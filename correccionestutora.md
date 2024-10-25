

utilizar un solo formato de Id, ya sea autoincremental o aleatorio.



Veo que creaste los formControl con formBuilder, los enlazaste a los input, usaste Validator required, está todo correcto. Mi sugerencia sería que tu validator custom podría hacerse utilizando el validator que viene por defecto pattern. Además no deja ingresar tildes. 

