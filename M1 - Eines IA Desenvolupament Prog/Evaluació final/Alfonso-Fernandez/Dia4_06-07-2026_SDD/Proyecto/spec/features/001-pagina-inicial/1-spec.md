# 001 — Página inicial

- Objetivo
Una página única (index.html) con cabecera, mostrando la Cuenta actual, donde se mostrará el total entre Ingresos y Gastos, se podrá elegir entre Ingresos o Gastos, y luego un periodo de tiempo. Por último habrá un botón de "Añadir" que nos redigirá a otra página para añadir un gasto o ingreso según en que tab estemos.

- Requisitos funcionales
Cabecera con menú de hamburguesa a la izquierda que nos servirá para añadir futuras funciones a mi aplicación. 
Una futura implementación en este menú hamburguesa será:
 a) La posibilidad de añadir, modificar o eliminar "Cuentas". 
 b) Otra futura implementación será la posibilidad de añadir, modificar o eliminar "Categorías".
 c) "Ajustes" para poder modificar apariencia (modo Claro o Oscuro). "Personalización avanzada" para seleccionar 'Primer día de la semana', 'Separador decimal', 'Sin redondear' toggle, seleccionar divisa (euro €, dólar $, ...), selección de idioma, etc.

 En el centro de la cabecera "Total" siendo éste clicable para poder seleccionar una "Cuenta" u otra, y debajo de este "Total" la suma de Ingresos y Gastos.

 En la derecha de la cabecera un botón clicable para abrir página "Transacciones" que básicamente mostrará los 2 tabs de "Gastos" e "Ingresos" a seleccionar y abajo los periodos de tiempo "Día", "Semana", "Mes", "Año", "Período" que mostrará un resumen de nuestros gastos o ingresos en un día concreto, o semana concreta, etc. ordenado por 'Fecha' o 'Cantidad'.

 Abajo de la cabecera el bloque con los 2 tabs clicables de "Gastos" o "Ingresos" y debajo los periodos de tiempo "Día", "Semana", "Mes", "Año", "Período". 
 Debajo de esto y de forma gráfica habrá un gráfico de anillos, o un gráfico lineal si clicamos en el gráfico de anillos por defecto. Mostrará de forma resumida los gastos/ingresos del periodo de tiempo que tengamos seleccionado, ordenado por categorías y aplicando el color de la categoría correspondiente.

Debajo a la derecha del gráfico habrá un botón de "+" para añadir un nuevo gasto o ingreso en una nueva página.

 Debajo del bloque gráfico habrá otro bloque que mostrará cada uno de los totales por categoría para el período de tiempo seleccionado.
 La forma exacta de mostrarlo será una líne horizontal donde a la izquierda estará el logo/icono de la Categoría, el nombre de la categoría, el porcentaje numérico de esta categoría sobre el total de gastos/ingresos en el período de tiempo que esté seleccionado (día, semana, mes, etc.) y por último el Total de forma numérica con 2 decimales como máximo y a su derecha el símbolo de la divisa que estemos utilizando, siendo el euro € por defecto.
Si clicáramos en alguna línea de estas categoría, nos llevaría directamente a la página de "Transacciones".

- Contenido
El contenido en sí estará vacío ya que esta webapp se basará en los datos de ingresos y/o gastos introducidos por el usuario y que serán almacenado y debidamente mostrados para que el usuario tenga un control sobre sus finanzas.

- Requisitos no funcionales
Diseño: skill diseño-web (modo oscuro, paleta y tokens). Ningún color fuera de esta guía.
Responsive: parrilla de 1 → 2 → 3 columnas (móvil → tableta → pantalla grande).
Accesibilidad: contraste suficiente, foco visible, botón del menú con aria-label.

- Fuera de alcance
Búsqueda, filtros.

- Criterios de aceptación
[ ] El menú de hamburguesa se abre correctamente y muestra distintos apartados que será mockups al inicio.
[ ] Si clico en "Total" se abre una ventana modal incrustada obligándome a seleccionar una "Cuenta". Mostrará el icono de la Cuenta, nombre de la cuenta y abajo el Total de la cuenta (diferencia entre gastos e ingresos).
[ ] Se mostrará correctamente el saldo "Total" siendo rojo si la diferencia es negativa con signo '-' y verde si es positiva la diferencia entre gastos e ingresos. Además debe mostrarse el símbolo de la divisa actual, siendo el euro € por defecto.
[ ] A la derecha de la cabecera habrá un icono para abrir otra página de "Transacciones" pero que de momento no implementaremos y no abrirá ninguna página.
[ ] Correcta selección de "Gastos" o "Ingresos".
[ ] Se muestran correctamente 5 tabs de: "Día", "Semana", "Mes", "Año", "Período".
[ ] Se pueden seleccionar correctamente cada uno de los 5 tabs de: "Día", "Semana", "Mes", "Año", "Período". 
[ ] Se muestra correctamente una línea clicable de "Día" (día de hoy, día actual), "Semana" (semana actual), "Mes" (mes actual), "Año" (año actual), "Período" (aquí salta directamente un Calendario que seleccionará por defecto el primer día del mes actual hasta el día de hoy).
[ ] Sale un Calendario cuando clicamos en esta línea de "Día", "Semana", etc mostrando por defecto el día, semana, etc. actual. Este calendario debe dejar al usuario seleccionar el día, semana, etc. que quiera y se guarde su elección.
[ ] Se muestra correctamente la información total de forma gráfica (gráfico de anillos por defecto).
[ ] Clicando en el gráfico de anillos se muestra un gráfico lineal. Si clicamos otra vez se muestra de nuevo el gráfico de anillos.
[ ] Se muestra un botón "+" abajo a la derecha que nos llevará a otra página para agregar un nuevo gasto o ingreso. A desarrollar a futuro esta nueva página.
[ ] Se muestran los totales por categoría de los gastos/ingresos de forma correcta.