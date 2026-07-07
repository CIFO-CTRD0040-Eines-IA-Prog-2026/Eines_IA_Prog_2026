# Glosario de conceptos de programación

# HTML

## DOCTYPE
**Definición:** declaración que indica al navegador qué versión de HTML usa el documento.
**Explicación:** debe ser la primera línea de todo documento HTML. Para HTML5 se escribe `<!DOCTYPE html>`.
**Ejemplo:**
```html
<!DOCTYPE html>
<html lang="es">
```

## lang
**Definición:** atributo que especifica el idioma del contenido de la página.
**Explicación:** ayuda a los navegadores y lectores de pantalla a interpretar correctamente el texto.
**Ejemplo:**
```html
<html lang="es">
```

## meta charset
**Definición:** etiqueta que define la codificación de caracteres del documento.
**Explicación:** `UTF-8` permite usar cualquier carácter (tildes, eñes, símbolos) sin problemas.
**Ejemplo:**
```html
<meta charset="utf-8">
```

## meta viewport
**Definición:** etiqueta que controla cómo se muestra la página en dispositivos móviles.
**Explicación:** sin ella, los móviles escalan la página como si fuera de escritorio y el texto se ve pequeño.
**Ejemplo:**
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## link (hoja de estilos externa)
**Definición:** etiqueta que enlaza un documento CSS externo al HTML.
**Explicación:** se coloca en el `<head>` y usa el atributo `href` para la ruta del archivo CSS.
**Ejemplo:**
```html
<link rel="stylesheet" href="style.css">
```

## link (preconnect)
**Definición:** etiqueta que indica al navegador que establezca una conexión temprana con un dominio externo.
**Explicación:** acelera la carga de recursos de terceros como fuentes o APIs.
**Ejemplo:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
```

## Elementos semánticos
**Definición:** etiquetas HTML que describen el significado del contenido que envuelven.
**Explicación:** mejoran la accesibilidad y el SEO. Ejemplos: `<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`.
**Ejemplo:**
```html
<header>Cabecera</header>
<main>Contenido principal</main>
<footer>Pie de página</footer>
```

## aria-label
**Definición:** atributo que proporciona una etiqueta de texto para elementos sin texto visible.
**Explicación:** imprescindible para accesibilidad en botones con solo icono; los lectores de pantalla lo usan para describir la acción.
**Ejemplo:**
```html
<button aria-label="Cerrar menú">✕</button>
```

# CSS

## scroll-behavior
**Definición:** propiedad CSS que controla el comportamiento del desplazamiento al hacer clic en un enlace interno.
**Explicación:** con `smooth` el salto a una sección es animado en lugar de instantáneo.
**Ejemplo:**
```css
html { scroll-behavior: smooth; }
```

## scroll-margin-top
**Definición:** propiedad CSS que añade un margen superior al hacer scroll hasta un elemento.
**Explicación:** evita que un encabezado fijo (sticky) tape el título de la sección al navegar con anclas.
**Ejemplo:**
```css
section { scroll-margin-top: 7rem; }
```

## white-space: pre
**Definición:** propiedad CSS que conserva los espacios en blanco y saltos de línea tal como están escritos.
**Explicación:** se usa en bloques de código para que el formato no se pierda.
**Ejemplo:**
```css
pre { white-space: pre; }
```

## focus-visible
**Definición:** pseudoclase CSS que aplica estilos solo cuando el elemento recibe foco mediante el teclado.
**Explicación:** mejora la accesibilidad mostrando un borde de foco a quienes navegan con tabulador, sin mostrarlo al hacer clic.
**Ejemplo:**
```css
a:focus-visible { outline: 2px solid cyan; }
```

## backdrop-blur
**Definición:** propiedad CSS que aplica un desenfoque al fondo detrás de un elemento.
**Explicación:** crea un efecto de vidrio esmerilado; se usa en cabeceras fijas para que el contenido detrás se vea borroso.
**Ejemplo:**
```css
header { backdrop-filter: blur(4px); }
```

# JavaScript

## Algoritmo
**Definición:** conjunto de pasos ordenados y finitos que resuelven un problema.
**Explicación:** es la base de cualquier programa; primero se diseña el algoritmo y luego se escribe el código.
**Ejemplo:**
```
1. Pedir dos números al usuario
2. Sumar los números
3. Mostrar el resultado
```

## Array
**Definición:** estructura de datos que almacena múltiples valores en una sola variable.
**Explicación:** cada elemento se identifica por un índice numérico que empieza en 0. Se usan para manejar listas de datos.
**Ejemplo:**
```javascript
let frutas = ["manzana", "plátano", "naranja"];
console.log(frutas[0]); // manzana
frutas.push("pera");
```

## Bucle `for`
**Definición:** estructura que repite un bloque de código un número determinado de veces.
**Explicación:** se usa cuando se sabe de antemano cuántas iteraciones se necesitan.
**Ejemplo:**
```javascript
for (let i = 0; i < 3; i++) {
  console.log("Iteración " + i);
}
```

## Bucle `while`
**Definición:** estructura que repite un bloque de código mientras una condición sea verdadera.
**Explicación:** se usa cuando no se sabe de antemano cuántas iteraciones harán falta.
**Ejemplo:**
```javascript
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}
```

## Bucle `do...while`
**Definición:** variante del `while` que ejecuta el bloque al menos una vez antes de comprobar la condición.
**Explicación:** garantiza que el código se ejecuta como mínimo una iteración.
**Ejemplo:**
```javascript
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 3);
```

## Clase
**Definición:** plantilla para crear objetos con propiedades y métodos comunes.
**Explicación:** la POO se basa en clases; una vez definida, se pueden crear múltiples objetos con `new`.
**Ejemplo:**
```javascript
class Perro {
  constructor(nombre) {
    this.nombre = nombre;
  }
  ladrar() {
    console.log("¡Guau!");
  }
}
```

## Código fuente
**Definición:** texto escrito por un programador en un lenguaje de programación.
**Explicación:** es el archivo legible que luego se compila o interpreta para que el ordenador lo ejecute.
**Ejemplo:**
```javascript
// Esto es código fuente
let mensaje = "Hola";
console.log(mensaje);
```

## Compilador
**Definición:** programa que traduce el código fuente completo a código máquina antes de ejecutarlo.
**Explicación:** lenguajes como C o Java usan compiladores. El programa traducido se ejecuta más rápido.
**Ejemplo:**
```
gcc programa.c -o programa  // compila el código C
./programa                   // ejecuta el binario
```

## Condicional `if` / `else if` / `else`
**Definición:** estructura que ejecuta un bloque de código u otro según una condición booleana.
**Explicación:** permite tomar decisiones en el flujo del programa.
**Ejemplo:**
```javascript
let edad = 18;
if (edad >= 18) {
  console.log("Mayor de edad");
} else {
  console.log("Menor de edad");
}
```

## Constructor
**Definición:** método especial de una clase que se ejecuta al crear una nueva instancia.
**Explicación:** sirve para inicializar las propiedades del objeto con los valores que se le pasan.
**Ejemplo:**
```javascript
class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}
```

## Función declarada
**Definición:** bloque de código reutilizable definido con la palabra clave `function`.
**Explicación:** se puede llamar antes de su declaración gracias al hoisting.
**Ejemplo:**
```javascript
function sumar(a, b) {
  return a + b;
}
```

## Función flecha
**Definición:** sintaxis abreviada para definir funciones usando `=>`.
**Explicación:** más concisa que la función tradicional; no tiene su propio `this`.
**Ejemplo:**
```javascript
const sumar = (a, b) => a + b;
```

## Intérprete
**Definición:** programa que ejecuta el código fuente línea por línea sin compilarlo previamente.
**Explicación:** lenguajes como JavaScript o Python usan intérpretes. Permiten probar código rápidamente.
**Ejemplo:**
```
node script.js   // el intérprete de Node.js ejecuta el archivo
```

## Objeto
**Definición:** instancia concreta creada a partir de una clase.
**Explicación:** contiene los valores reales de las propiedades definidas en la clase.
**Ejemplo:**
```javascript
let perro = new Perro("Rex");
perro.ladrar();  // ¡Guau!
```

## Operador ternario
**Definición:** forma abreviada del `if...else` en una sola línea.
**Explicación:** devuelve un valor u otro según una condición.
**Ejemplo:**
```javascript
let edad = 20;
let mensaje = edad >= 18 ? "Mayor" : "Menor";
```

## Switch
**Definición:** estructura condicional que evalúa una expresión contra múltiples casos.
**Explicación:** alternativa al `if...else if` cuando se comparan muchos valores posibles.
**Ejemplo:**
```javascript
let dia = 3;
switch (dia) {
  case 1: console.log("Lunes"); break;
  case 2: console.log("Martes"); break;
  default: console.log("Otro día");
}
```

## Variable
**Definición:** espacio con nombre en memoria que almacena un valor que puede cambiar.
**Explicación:** se declara con `let` (mutable) o `const` (constante). Es la unidad básica para guardar datos.
**Ejemplo:**
```javascript
let nombre = "Ana";
const IVA = 0.21;
```

## Tipos de datos (`string`, `number`, `boolean`)
**Definición:** clasificación de los valores que puede tener una variable.
**Explicación:** `string` almacena texto, `number` almacena números, `boolean` almacena verdadero/falso.
**Ejemplo:**
```javascript
let texto = "Hola";       // string
let entero = 42;          // number
let activo = true;        // boolean
```
