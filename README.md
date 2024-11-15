# Proyecto Angular - Gestión de Alumnos y Cursos

Este proyecto está diseñado para gestionar alumnos, cursos e inscripciones, con funcionalidades específicas para administradores y usuarios. Utiliza Angular, Angular Material, NgRx, y se implementa un sistema de autenticación y gestión de roles.

## 1. Configuración Inicial del Proyecto

### Crear el proyecto en Angular
Ejecuta el siguiente comando para crear un nuevo proyecto Angular:

> ng new nombre-proyecto

### Instalar dependencias necesarias
- **Angular Material**:
- **NgRx**:


### Configurar estructura de carpetas
Crea los siguientes módulos para organizar mejor el código:
- **core**: Contendrá servicios y configuraciones generales.
- **shared**: Componentes reutilizables y directivas.
- **feature**: Para cada funcionalidad específica del sistema.

Configura rutas en `app-routing.module.ts` y utiliza **módulos lazy-loaded** para cada sección.

---

## 2. Autenticación y Roles de Usuario

### Crear un servicio de autenticación (`AuthService`)
- Métodos para **login**, **logout** y gestión de sesiones.

### Implementar el componente de Login
- Formulario para ingresar **credenciales**.
- Validaciones básicas (campos obligatorios, formato de email).
- **Redireccionamiento post-login**.

### Gestionar el rol de usuario en el sistema
- Almacenar la información de **rol** y **perfil** en el servicio o en el estado global (NgRx).
- **Restringir acceso** a rutas usando `canActivate` para verificar roles.

---

## 3. Estructura de Navegación y UI

### Configurar la barra de navegación lateral
- Mostrar **opciones de menú dinámicas** según el rol de usuario.
- Opción de **deslogueo**.

### Configurar la barra de herramientas (toolbar)
- Mostrar el **nombre de la aplicación** y **del usuario logueado**.
- Cambiar el **título dinámicamente** basado en la funcionalidad actual.

---

## 4. Módulo de Alumnos

### Componente de Listado de Alumnos
- Mostrar listado en formato **tabla**.
- Incluir **columnas básicas** (nombre, email, cursos inscritos, etc.).
- Opciones para **ver detalles**, **editar** y **eliminar**.

### Componente de Detalle de Alumno
- Vista detallada del alumno, incluyendo los **cursos en los que está inscrito**.
- Botón para **agregar/eliminar cursos**.

### Formularios para Agregar/Editar Alumnos
- **Formularios reactivos** con validaciones.
- Acciones de **guardar cambios** y **cancelar**.

---

## 5. Módulo de Cursos

### Componente de Listado de Cursos
- Mostrar los **cursos** en una **tabla**.
- Opción para **ver alumnos inscritos** en cada curso.

### Formularios para Agregar/Editar Cursos
- **Formularios reactivos** con validaciones.
- Acciones de **guardar cambios** y **cancelar**.

---

## 6. Módulo de Inscripciones

### Vista para inscribir/desinscribir alumnos en cursos
- Selección de **alumnos** y **cursos** desde listas desplegables.
- Botones para **inscribir** y **desinscribir**.
- Actualizar listado de alumnos y cursos tras cada cambio.

---

## 7. Módulo de Usuarios (Administrador)

### Componente de Listado de Usuarios
- **Tabla** para mostrar la lista de usuarios.
- Opciones para **ver detalles**, **editar** y **eliminar** usuarios.

### Formularios para Agregar/Editar Usuarios
- **Formularios reactivos** con validaciones.
- Acciones de **guardar cambios** y **cancelar**.

### Implementar control de roles en el formulario de usuario
- Permitir la **selección del rol** (administrador o usuario).

---

## 8. Implementación del Estado Global (NgRx)

### Configurar NgRx Store
- Crear **slices** para alumnos, cursos, usuarios e inscripciones.

### Configurar NgRx Effects
- Implementar **efectos** para gestionar llamadas HTTP y actualizar el estado en el Store.

### Configurar NgRx DevTools
- Permitir la **inspección** del estado global en el navegador.

---

## 9. Servicios y Llamadas HTTP

### Crear servicios para consumir la API
- **AlumnosService**, **CursosService**, **UsuariosService**, **InscripcionesService**.

### Configurar endpoints con mockapi.io (u otra API de prueba en la nube)

### Realizar llamadas HTTP desde los efectos de NgRx
- Obtener, crear, actualizar y eliminar datos de manera eficiente.

---

## 10. Test Unitarios

### Escribir pruebas unitarias para componentes
- Pruebas básicas para verificar que los **componentes** se crean correctamente.

### Escribir pruebas unitarias para servicios
- **Mock** de dependencias para verificar que los métodos de servicios devuelvan los datos esperados.

### Escribir pruebas unitarias para efectos y reducers de NgRx
- Verificar **cobertura de pruebas** para cumplir con los requisitos de calidad.

---

## 11. Validaciones y Seguridad

### Validar formularios antes de enviar datos
- Asegurar que los datos enviados son válidos.

### Gestionar errores de API con mensajes claros
- Mostrar mensajes de error claros para el usuario.

### Evitar uso de `console.log()` en producción
- Asegurar que los logs se eliminan o se gestionan adecuadamente.

---

## Tecnologías Utilizadas

- **Angular**: Framework para el desarrollo del frontend.
- **NgRx**: Gestión del estado global.
- **Angular Material**: Componentes de UI.
- **RxJS**: Programación reactiva.
- **API Mock (mockapi.io)**: API para pruebas.
