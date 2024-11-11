Falta implementar sweetalert


utilizar un solo formato de Id, ya sea autoincremental o aleatorio.

Faltan pantallas de detalles de alumnos, clases y cursos



En clases, deberías tener un selector para las horas con un listado y



Bueno primero que nada tenes que desarrollar el modulo users, ya que actualmente estas usando a tus estudiantes para iniciar sesión, y los usuarios además tienen un rol que puede ser admin o usuario común y no es correcto que compartan modelo con los estudiantes.
Por otro lado, estaría bueno implementar también el modulo de inscripciones.


Falta implementar el guard de admin que verifica el rol de los usuarios
El login está validando el email solamente, o la contraseña parcialmente porque pude ingresar poniendo '1234' como psw
