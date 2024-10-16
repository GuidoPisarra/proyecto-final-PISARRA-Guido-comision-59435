# Angular 
> npm install -g @angular/cli                                                

# Nuevo proyecto
> ng new [nombre-proyecto] --no-standalone

# proyecto typescript
> npx tsc --init 

# generar componente 
> comando ng g c "carpeta"/"nombre_componente" [opcion]

--> opciones 
    --inline-style (sin scss)
    --skip-tests (sin test)
    --inline-template (sin html)


> ng add @angular/material

> ? Choose a prebuilt theme name, or "custom" for a custom theme: Custom
> ? Set up global Angular Material typography styles? yes
> ? Include the Angular animations module? Include and enable animations


# MODULOS
> ng generate module features/auth --routing

APP MODULE Importamos el  module 
APP module del componente exportamos el componente


# PIPES --> convierten datos en la vista
> ng  generate pipe shared/pipes/[nombre_pipe]

# DIRECTIVAS --> nos permiten cambiar el comportamiento o apariencia html
> ng generate directive shared/directives/highligth

# Servicio (logica de datos)
> ng generate service core/services/[nombre_servicio]

# Rxjs documentacion
> https://rxjs.dev/api

# SweetAlert

> npm i sweetalert2

