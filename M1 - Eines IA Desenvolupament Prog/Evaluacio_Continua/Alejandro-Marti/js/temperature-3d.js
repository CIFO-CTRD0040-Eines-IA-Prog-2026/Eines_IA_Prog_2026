import * as THREE from 'three';

(function () {
  const CANVAS_ID = 'temp-3d-canvas';
  const TOOLTIP_ID = 'temp-tooltip';
  const CURSOR_ID = 'custom-cursor';
  const SCENE_ATTR = 'data-3d-scene';

  const container = document.getElementById(CANVAS_ID);
  const tooltip = document.getElementById(TOOLTIP_ID);
  const cursor = document.getElementById(CURSOR_ID);
  const wrap = document.querySelector('[' + SCENE_ATTR + ']');

  if (!container || !wrap) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let disposed = false;

  const barData = [
    { min: 19, max: 26, week: 'Setm. 1', bc: [0.22, 0.74, 0.97], tc: [0.97, 0.44, 0.44], label: '26° / 19°' },
    { min: 22, max: 28, week: 'Setm. 2', bc: [0.22, 0.74, 0.97], tc: [0.97, 0.44, 0.44], label: '28° / 22°' },
    { min: 24, max: 30, week: 'Setm. 3', bc: [0.92, 0.35, 0.05], tc: [0.86, 0.15, 0.15], label: '30° / 24°' },
    { min: 20, max: 27, week: 'Setm. 4', bc: [0.22, 0.74, 0.97], tc: [0.97, 0.44, 0.44], label: '27° / 20°' },
  ];

  const SCALE_MIN = 12;
  const SCALE_FACTOR = 0.15;

  function getBarHeight(min, max) { return (max - min) * SCALE_FACTOR; }
  function getBarBottom(min) { return (min - SCALE_MIN) * SCALE_FACTOR; }
  function getBarCenter(min, max) {
    return getBarBottom(min) + getBarHeight(min, max) / 2;
  }

  function createGradientTexture(bottomColor, topColor, height) {
    const canvas = document.createElement('canvas');
    canvas.width = 2;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createLinearGradient(0, canvas.height, 0, 0);

    const bc = [bottomColor[0] * 0.6, bottomColor[1] * 0.6, bottomColor[2] * 0.6];
    const tc = [topColor[0] * 0.8, topColor[1] * 0.8, topColor[2] * 0.8];

    function rgba(arr, a) {
      return 'rgba(' + (arr[0] * 255 | 0) + ',' + (arr[1] * 255 | 0) + ',' + (arr[2] * 255 | 0) + ',' + a + ')';
    }

    grad.addColorStop(0, rgba(bc, 0.85));
    grad.addColorStop(0.15, rgba(bottomColor, 0.92));
    grad.addColorStop(0.5, rgba(topColor, 0.92));
    grad.addColorStop(1, rgba(tc, 0.95));

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 2, 64);

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1, Math.max(1, height * 4));
    return texture;
  }

  var dimW = container.clientWidth;
  var dimH = container.clientHeight;
  if (dimW < 1) dimW = 300;
  if (dimH < 1) dimH = 200;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, dimW / dimH, 0.1, 20);
  camera.position.set(0, 2.2, 7);
  camera.lookAt(0, 1.6, 0);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(dimW, dimH);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  container.appendChild(renderer.domElement);

  scene.add(new THREE.AmbientLight(0xffffff, 0.5));

  const dirLight = new THREE.DirectionalLight(0xffffff, 1.8);
  dirLight.position.set(4, 6, 5);
  dirLight.castShadow = true;
  dirLight.shadow.mapSize.width = 512;
  dirLight.shadow.mapSize.height = 512;
  scene.add(dirLight);

  const fillLight = new THREE.DirectionalLight(0x4a90d9, 0.4);
  fillLight.position.set(-3, 2, -3);
  scene.add(fillLight);
  const rimLight = new THREE.SpotLight(0xff9ff3, 0.6);
  rimLight.position.set(-2, 3, 4);
  scene.add(rimLight);
  scene.add(new THREE.HemisphereLight(0x4a90d9, 0x2d3436, 0.3));

  const barGroup = new THREE.Group();
  scene.add(barGroup);

  const bars = [];
  const RADIUS = 0.35;

  barData.forEach(function (data, i) {
    var min = data.min;
    var max = data.max;
    if (min > max) { var t = min; min = max; max = t; }

    var h = getBarHeight(min, max);
    var clampedH = Math.max(h, 0.05);
    var cy = getBarCenter(min, max);
    var cx = (i - 1.5) * 2.0;

    var bottomColor = new THREE.Color(data.bc[0], data.bc[1], data.bc[2]);
    var topColor = new THREE.Color(data.tc[0], data.tc[1], data.tc[2]);
    var tex = createGradientTexture(data.bc, data.tc, clampedH);

    var mat = new THREE.MeshPhysicalMaterial({
      map: tex,
      roughness: 0.15,
      metalness: 0.1,
      clearcoat: 0.4,
      clearcoatRoughness: 0.3,
      envMapIntensity: 0.6,
      transparent: true,
      opacity: 0.92,
      side: THREE.DoubleSide,
    });

    var mesh = new THREE.Mesh(new THREE.CylinderGeometry(RADIUS, RADIUS, clampedH, 16, 1), mat);
    mesh.position.set(cx, cy, 0);
    mesh.castShadow = true;
    mesh.receiveShadow = true;

    mesh.userData = {
      index: i,
      week: data.week,
      label: data.label,
      min: min,
      max: max,
      barHeight: clampedH,
      hovered: false,
    };

    var glowMat = new THREE.MeshBasicMaterial({
      color: topColor,
      transparent: true,
      opacity: 0,
      side: THREE.BackSide,
    });
    var glowMesh = new THREE.Mesh(
      new THREE.CylinderGeometry(RADIUS * 1.6, RADIUS * 1.6, 1, 16, 1),
      glowMat
    );
    glowMesh.position.set(cx, cy, 0);
    glowMesh.scale.y = clampedH;
    mesh.userData.glowMesh = glowMesh;

    barGroup.add(mesh);
    barGroup.add(glowMesh);
    bars.push(mesh);

    if (!prefersReduced) {
      mesh.scale.y = 0.01;
      animateIn(mesh, glowMesh, i, clampedH);
    }
  });

  function animateIn(mesh, glowMesh, index, targetH) {
    var duration = 700 + index * 150;
    var start = performance.now();
    var animId = null;

    function step(now) {
      if (disposed) return;
      var elapsed = now - start;
      var t = elapsed >= duration ? 1 : elapsed / duration;
      var ease = 1 - Math.pow(1 - t, 3);
      var s = ease * 0.95 + 0.05;
      mesh.scale.y = s;
      if (t < 1) { animId = requestAnimationFrame(step); }
    }
    animId = requestAnimationFrame(step);
  }

  var floorGeo = new THREE.PlaneGeometry(10, 4);
  var floorMat = new THREE.ShadowMaterial({ opacity: 0.15 });
  var floor = new THREE.Mesh(floorGeo, floorMat);
  floor.rotation.x = -Math.PI / 2;
  floor.position.set(0, 0.01, 0);
  floor.receiveShadow = true;
  barGroup.add(floor);

  var mouse = { x: 0, y: 0 };
  var targetCameraPos = { x: 0, y: 2.2, z: 7 };

  function lerp(a, b, t) { return a + (b - a) * t; }

  var isHovering = false;
  var raycaster = new THREE.Raycaster();
  var pointer = new THREE.Vector2();

  function getCanvasRect() {
    return renderer.domElement.getBoundingClientRect();
  }

  function projectTooltip(hit) {
    if (!tooltip) return;
    var pos = new THREE.Vector3();
    hit.getWorldPosition(pos);
    pos.y += hit.userData.barHeight / 2 + 0.3;
    pos.project(camera);

    var rect = getCanvasRect();
    var x = (pos.x * 0.5 + 0.5) * rect.width;
    var y = (-pos.y * 0.5 + 0.5) * rect.height;

    if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
      tooltip.style.display = 'block';
      tooltip.style.transform = 'translate(-50%, -100%)';
      tooltip.style.left = x + 'px';
      tooltip.style.top = (y - 12) + 'px';
      tooltip.querySelector('.tooltip-week').textContent = hit.userData.week;
      tooltip.querySelector('.tooltip-val').textContent = hit.userData.label;
    } else {
      tooltip.style.display = 'none';
    }
  }

  function onMouseMove(event) {
    if (disposed) return;
    var rect = getCanvasRect();
    var mx = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    var my = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    if (!prefersReduced) {
      targetCameraPos.x = mx * 0.5;
      targetCameraPos.y = 2.2 - my * 0.3;
    }

    pointer.x = mx;
    pointer.y = my;

    if (cursor) {
      cursor.style.left = (event.clientX - wrap.getBoundingClientRect().left) + 'px';
      cursor.style.top = (event.clientY - wrap.getBoundingClientRect().top) + 'px';
    }

    raycaster.setFromCamera(pointer, camera);
    var intersects = raycaster.intersectObjects(bars);

    for (var bi = 0; bi < bars.length; bi++) {
      bars[bi].userData.hovered = false;
      if (bars[bi].userData.glowMesh) bars[bi].userData.glowMesh.material.opacity = 0;
    }

    if (intersects.length > 0) {
      var hit = intersects[0].object;
      hit.userData.hovered = true;
      isHovering = true;

      wrap.style.cursor = 'none';
      document.body.style.cursor = 'none';

      if (cursor) {
        cursor.style.width = '56px';
        cursor.style.height = '56px';
        cursor.style.borderColor = 'rgba(248,113,113,0.6)';
        cursor.style.background = 'rgba(248,113,113,0.08)';
        cursor.innerHTML = '<span class="cursor-text">Setmana</span>';
        cursor.style.opacity = '1';
      }

      if (hit.userData.glowMesh) hit.userData.glowMesh.material.opacity = 0.35;
      projectTooltip(hit);
    } else {
      isHovering = false;
      wrap.style.cursor = '';
      document.body.style.cursor = '';

      if (cursor) {
        cursor.style.opacity = '0.7';
        cursor.style.width = '24px';
        cursor.style.height = '24px';
        cursor.style.borderColor = 'rgba(255,255,255,0.4)';
        cursor.style.background = 'transparent';
        cursor.innerHTML = '';
      }

      if (tooltip) tooltip.style.display = 'none';
    }
  }

  function onMouseLeave() {
    if (disposed) return;
    isHovering = false;
    wrap.style.cursor = '';
    document.body.style.cursor = '';
    if (cursor) { cursor.style.opacity = '0'; }
    if (tooltip) tooltip.style.display = 'none';

    for (var bi = 0; bi < bars.length; bi++) {
      bars[bi].userData.hovered = false;
      if (bars[bi].userData.glowMesh) bars[bi].userData.glowMesh.material.opacity = 0;
    }
  }

  document.addEventListener('mousemove', onMouseMove);
  wrap.addEventListener('mouseleave', onMouseLeave);

  function onTouchMove(event) {
    if (disposed || !event.touches.length) return;
    var touch = event.touches[0];
    onMouseMove(touch);
  }

  function onTouchEnd() {
    if (disposed) return;
    onMouseLeave();
  }

  wrap.addEventListener('touchstart', onTouchMove, { passive: true });
  wrap.addEventListener('touchmove', onTouchMove, { passive: true });
  wrap.addEventListener('touchend', onTouchEnd, { passive: true });
  wrap.addEventListener('touchcancel', onTouchEnd, { passive: true });

  var resizeObserver = new ResizeObserver(function () {
    if (disposed) return;
    var w = container.clientWidth;
    var h = container.clientHeight;
    if (w < 1) w = 300;
    if (h < 1) h = 200;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  });
  resizeObserver.observe(container);

  var clock = new THREE.Clock();
  var animFrameId = null;

  function animate() {
    if (disposed) return;
    animFrameId = requestAnimationFrame(animate);

    var delta = clock.getDelta();
    var smoothFactor = Math.min(delta * 5, 1);

    if (!prefersReduced) {
      camera.position.x = lerp(camera.position.x, targetCameraPos.x, smoothFactor);
      camera.position.y = lerp(camera.position.y, targetCameraPos.y, smoothFactor);
    }
    camera.lookAt(0, 1.6, 0);

    for (var bi = 0; bi < bars.length; bi++) {
      var bar = bars[bi];
      var ud = bar.userData;
      var targetZ = ud.hovered ? 0.4 : 0;
      var targetS = ud.hovered ? 1.08 : 1;

      bar.position.z = lerp(bar.position.z, targetZ, smoothFactor);
      bar.scale.x = lerp(bar.scale.x, targetS, smoothFactor);
      bar.scale.z = lerp(bar.scale.z, targetS, smoothFactor);

      var glow = ud.glowMesh;
      if (glow) {
        glow.position.z = lerp(glow.position.z, targetZ, smoothFactor);
        glow.position.y = bar.position.y;
      }
    }

    renderer.render(scene, camera);
  }

  animFrameId = requestAnimationFrame(animate);

  function cleanup() {
    if (disposed) return;
    disposed = true;

    document.removeEventListener('mousemove', onMouseMove);
    if (wrap) wrap.removeEventListener('mouseleave', onMouseLeave);
    resizeObserver.disconnect();

    if (animFrameId) cancelAnimationFrame(animFrameId);

    renderer.dispose();

    for (var bi = 0; bi < bars.length; bi++) {
      var bar = bars[bi];
      bar.geometry.dispose();
      bar.material.dispose();
      if (bar.userData.glowMesh) {
        bar.userData.glowMesh.geometry.dispose();
        bar.userData.glowMesh.material.dispose();
      }
    }
  }

  window.addEventListener('beforeunload', cleanup);
})();
