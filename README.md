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

# crea un módulo con su respectivo archivo routing

> ng g module NOMBRE_MODULE --routing


# JSON SERVER

Instalación 

> npm i json-server -g

Ejecutar:

Primero crear el archivo db.json que es donde va a aestar nuestra bbdd mockeada

luego ejecutamos 

> json-server db.json --watch

# ENVIRONMENT
ng generate --configuration production --> toma el environment de producción

# NG mocks 

> npm install ng-mocks

# TEST 

> ng test
si agregamos una 'x' antes del describe, esa prueba se omite --> ejemplo --> xdescribe('AppComponent', () => {
si agregamos una 'f' antes del describe, solo se ejecuta/n esa prueba/s --> ejemplo --> fdescribe('AppComponent', () => {

Para obtener el estado de las pruebas unitarias:
> ng test --code-coverage

Se puede ver  en la consola o en el navegador abriendo el archivo index.html que esta dentro de la carpeta coverage

# REDUX 
Permite entre otras cosas manejar los estados

> ng add @ngrx/store

crear carpeta store en src y dentro de ella un archivo ts

en app.component.ts importamos  StoreModule.forRoot(RootReducer)

instalar en chrome extension redux devtools --> para que funcione hay que instalar en el proyecto  

> ng add @ngrx/store-devtools@latest
> ng add @ngrx/schematics -->se generan los reducers, actions y selectors de una manera mas sencilla
> ng add @ngrx/effects@latest

# desplegar aplicacion
> https://render.com/


# effects

>  ng add @ngrx/effects
