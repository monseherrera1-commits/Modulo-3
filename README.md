Plataforma de Aprendizaje Interactiva
Sistema de Gestión de Estudiantes
Sistema desarrollado en JavaScript para gestionar estudiantes y sus notas académicas. Utiliza la escala de calificación chilena (10-70) y la convierte automáticamente a la escala 1.0-7.0.

Características

Gestión de estudiantes con sus notas
Cálculo automático de promedios
Estadísticas del curso
Búsqueda de estudiantes por nombre
Validación de datos ingresados


Requisitos Técnicos Implementados
Estructuras de Control

if/else: Validaciones y verificación de estado
switch: Determinación de nivel académico
for: Recorrido de arreglos y conteo
while: Validación de notas al agregar estudiante
for...in: Recorrido de notas en funciones

Estructuras de Datos

Arrays: Almacenamiento de estudiantes y notas
Objetos: Representación de cada estudiante
Variables let y const: Gestión de datos

Funciones

Funciones básicas: Operaciones matemáticas
Funciones con parámetros: Reciben y procesan datos
Funciones con return: Devuelven resultados
Funciones anidadas: Organización modular del código
forEach y map: Recorrido de arreglos de objetos

Operaciones Matemáticas

Suma de notas
Cálculo de promedios
Búsqueda de nota máxima y mínima
Conversión de escalas


Cómo Usar
1. Abrir la Consola del Navegador

Chrome/Edge: Presiona F12 o Ctrl + Shift + J
Firefox: Presiona F12 o Ctrl + Shift + K
Safari: Cmd + Option + C

2. Funciones Disponibles
Ver todos los estudiantes: mostrarTodosLosEstudiantes()
Muestra el reporte completo de todos los estudiantes con sus notas, promedios, estado y nivel.
Ver estadísticas del curso: estadisticasDelCurso()
Muestra el promedio general, nota más alta, nota más baja, cantidad de aprobados y reprobados.

Agregar nuevo estudiante: agregarEstudiante()
Te pedirá:
El nombre del estudiante (prompt)
Las 4 notas una por una (entre 10 y 70)

Si ingresas una nota inválida, te la volverá a pedir.
Buscar estudiante por nombre
javascriptbuscarEstudiante("Nombre Apellido")
IMPORTANTE: El nombre debe ir entre comillas y debe ser exacto (respeta mayúsculas y minúsculas).
Ejemplos:
buscarEstudiante("Juan Perez")     // Correcto
buscarEstudiante("Maria Lopez")    // Correcto
buscarEstudiante(Juan Perez)       // Error - faltan comillas
buscarEstudiante("juan perez")     // No lo encuentra - minúsculas

Escala de Notas
Rango de Notas

Mínimo: 10
Máximo: 70
Aprobación: 40 o más (equivale a 4.0)

Niveles Académicos

7.0: Sobresaliente
6.0: Muy Bueno
5.0: Bueno
4.0: Suficiente
3.0: Insuficiente
2.0: Deficiente
1.0: Muy Deficiente


Estudiantes Predefinidos
El sistema incluye 4 estudiantes de ejemplo

Validaciones Implementadas
Validación de Notas

Debe ser un número
Debe estar entre 10 y 70
Si es inválida, muestra error y vuelve a pedirla

Validación de Nombres

No puede estar vacío
Si no ingresa nombre al inicio, se asigna "Usuario"


Estructura del Código
plataforma_aprendizaje.js
│
├── Variables Globales
│   └── Array de estudiantes (objetos)
│
├── Funciones Matemáticas
│   ├── calcularPromedio()
│   ├── calcularNotaMaxMin()
│   └── convertirNota()
│
├── Funciones de Validación
│   ├── validarNota()
│   └── validarNombre()
│
├── Funciones de Evaluación
│   ├── verificarEstado()
│   └── determinarNivel()
│
├── Funciones Principales
│   ├── generarReporte()
│   ├── agregarEstudiante()
│   ├── mostrarTodosLosEstudiantes()
│   ├── estadisticasDelCurso()
│   └── buscarEstudiante()
│
└── Inicialización
    └── Mensaje de bienvenida


JavaScript (ES5/ES6)
Funciones de arrays: forEach(), map()
Estructuras de control: if/else, switch, for, while, for...in
Interacción con el usuario: prompt(), console.log()


Autor
Proyecto desarrollado como práctica de JavaScript básico para una plataforma de aprendizaje interactiva.

Notas Adicionales

El sistema se ejecuta completamente en la consola del navegador
Los datos se almacenan en memoria (se pierden al recargar la página)

Solución de Problemas
"buscarEstudiante no funciona"

Verifica que el nombre esté entre comillas: buscarEstudiante("Juan Perez")
Verifica que el nombre sea exacto (mayúsculas y minúsculas)

