
Con respecto al toolbar y al sidebar está todo bien. Te haría las siguientes sugerencias:

Me gustaría que uses color para despegar estos elementos del background


3-Creación de componentes: Lista de Alumnos y ABM de Alumnos:


 a la hora de eliminar un registro agregar una confirmación, para mejorar la experiencia del usuario y evitar errores por parte de este.
utilizar un solo formato de Id, ya sea autoincremental o aleatorio.


4-Definir formularios Reactivos de ABM de alumnos:

Veo que creaste los formControl con formBuilder, los enlazaste a los input, usaste Validator required, está todo correcto. Mi sugerencia sería que tu validator custom podría hacerse utilizando el validator que viene por defecto pattern. Además no deja ingresar tildes. 

