# Roadmap

- Una sola página (single-page) con distintas sub-páginas para poder añadir gastos/ingresos, seleccionar categoría, añadir categorías.

001-pagina-inicial
Estado: pendiente.

- La página principal:
a) Cabecera con:
Menú de hamburguesa a la izquierda donde añadiremos funcionalidades futuras
En el centro selección de "Cuenta" específica que contendrá los Gastos e Ingresos de esa cuenta en concreto.
Debajo de la Cuenta el "Total" (diferencia entre gastos e Ingresos).
A la derecha de la cabecera un botón clicable para abrir página "Transacciones" que básicamente mostrará los 2 tabs de "Gastos" e "Ingresos" a seleccionar y abajo los periodos de tiempo "Día", "Semana", "Mes", "Año", "Período" que mostrará un resumen de nuestros gastos o ingresos en un día concreto, o semana concreta, etc. ordenado por 'Fecha' o 'Cantidad'.

b) Debajo otro bloque donde seleccionar un tab de "Gastos" o "Ingresos".
Tanto para "Gastos" o "Ingresos", cinco tabs con "Día", "Semana", "Mes", "Año" y "Período".
Debajo de estos tabs seleccionables:
b.I) "Día": Día actual, ejemplo: "Hoy, 6 de julio". Se puede clicar y aparecerá un calendario dónde seleccionar día, siendo imposible seleccionar un día futuro.
b.II) "Semana": Semana actual, ejemplo: 6 de julio - 12 de julio". Se puede clicar y aparecerá un calendario con semanas dónde seleccionar una semana en concreto, siendo imposible seleccionar una semana futura.
b.III) "Mes": Mes actual, ejemplo: "Julio de 2026". Se puede clicar y aparecerá un calendario con meses dónde seleccionar un mes en concreto, siendo imposible seleccionar un mes futuro.
b.IV) "Año": Año actual, ejemplo: "2026". Se puede clicar y aparecerá un calendario con años dónde seleccionar un año en concreto, siendo imposible seleccionar un año futuro.
b.V) "Período": Al clicar en este tab aparecerá un Caledario donde se podrá seleccionar un periodo concreto, ejemplo: "Del 1 de julio al 6 de julio".

c) Otro bloque donde aparecerán los gastos o ingresos del día, semana, mes, año o período (según el tab seleccionado). 
Esta información aparecerá de forma gráfica (un gráfico de anillos, por defecto, o gráfico lineal, si clicamos en el gráfico de anillos), donde saldrán los gastos o ingresos por "Categorías" con su color correspondiente.
Abajo a la derecha un botón "+" que nos abrirá una nueva página de "Añadir Gasto" o "Añadir Ingreso".

Especificación: spec/features/001-pagina-inicial/.