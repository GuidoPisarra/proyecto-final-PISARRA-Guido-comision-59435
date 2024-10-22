

> 1-Creación de un proyecto Angular CLI con Angular:

> Todo correcto, pude correr ng s sin problemas. La estructura del proyecto también está correcta, creo que la carpeta components está demás o podría estar dentro de shared.

2-Creación de componentes de layout que incluya un navbar para el menú lateral y un toolbar para el título de la aplicación:

Tu componente layout está correcto, yo te sugeriría que el sidebar y el toolbar lo muevas a componentes separados, y que en el dashboard los llames desde su selector, pero queda a tu gusto.

Con respecto al toolbar y al sidebar está todo bien. Te haría las siguientes sugerencias:

Me gustaría que uses color para despegar estos elementos del background


3-Creación de componentes: Lista de Alumnos y ABM de Alumnos:

Pude ejecutar correctamente la creación, borrado y modificación de los alumnos. Felicitaciones por el trabajo realizado. Como sugerencia: 

 a la hora de eliminar un registro agregar una confirmación, para mejorar la experiencia del usuario y evitar errores por parte de este.
utilizar un solo formato de Id, ya sea autoincremental o aleatorio.


4-Definir formularios Reactivos de ABM de alumnos:

Veo que creaste los formControl con formBuilder, los enlazaste a los input, usaste Validator required, está todo correcto. Mi sugerencia sería que tu validator custom podría hacerse utilizando el validator que viene por defecto pattern. Además no deja ingresar tildes. 



5-Definir la lógica y estructura de representación de datos en listado, utilizando tablas de Angular Material tomando sus datos de arrays y funciones typescript:

Alimentaste tu tabla con un json basado en tu modelo de estudiante, muy bien. Lo que si le cambiaría el nombre a este array porque en una app que crece mockData puede ser cualquier cosa. Además fuiste consistente utilizado Material y tu aplicativo quedó muy bien



Por último veo que agregaste:

-Pipe personalizado para mostrar el nombre y el apellido de los alumnos juntos

-Directiva personalizada para que los titulos o cabeceras tengan un tamaño de 20px

Con respecto a la subida a GitHub, todo perfecto



Felicitaciones por el avance, espero que te sirva mi devolución, son cosas muy pequeñas y puntuales porque la verdad que está fantástica la entrega! Gracias por tu compromiso y felicitaciones!
