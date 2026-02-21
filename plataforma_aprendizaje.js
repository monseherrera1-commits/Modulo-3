// ============================================
// PLATAFORMA DE APRENDIZAJE INTERACTIVA
// Sistema de Gestion de Estudiantes
// Notas en escala chilena: 10 a 70
// ============================================


// ============================================
// ARREGLO DE OBJETOS - Lista de estudiantes
// ============================================
let estudiantes = [
    { nombre: "Juan Perez",    notas: [55, 62, 48, 70] },
    { nombre: "Maria Lopez",   notas: [40, 35, 42, 38] },
    { nombre: "Pedro Soto",    notas: [65, 70, 60, 68] },
    { nombre: "Ana Martinez",  notas: [50, 55, 48, 52] }
];


// ============================================
// FUNCIONES DE OPERACIONES MATEMATICAS
// ============================================

// Funcion que calcula el promedio de un arreglo de notas
function calcularPromedio(notas) {
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    return suma / notas.length;
}

// Funcion que busca la nota maxima o minima
function calcularNotaMaxMin(notas, tipo) {
    let resultado = notas[0];
    for (let i = 1; i < notas.length; i++) {
        if (tipo === "max" && notas[i] > resultado) {
            resultado = notas[i];
        } else if (tipo === "min" && notas[i] < resultado) {
            resultado = notas[i];
        }
    }
    return resultado;
}

// Funcion que convierte nota de escala 10-70 a escala 1.0-7.0
function convertirNota(nota) {
    return ((nota - 10) / (70 - 10)) * 6 + 1;
}


// ============================================
// FUNCIONES DE VALIDACION
// ============================================

// Valida que la nota este en el rango correcto (10 a 70)
function validarNota(nota) {
    if (isNaN(nota)) {
        return false;
    } else if (nota < 10 || nota > 70) {
        return false;
    } else {
        return true;
    }
}

// Valida que el nombre no este vacio
function validarNombre(nombre) {
    if (nombre === "" || nombre === null) {
        return false;
    } else {
        return true;
    }
}

// ============================================
// FUNCIONES DE ESTADO Y NIVEL
// ============================================

// Funcion que determina si el estudiante aprobo o reprobo
// Nota minima de aprobacion: 40 (equivale a 4.0 en escala chilena)
function verificarEstado(promedio) {
    if (promedio >= 40) {
        return "Aprobado";
    } else {
        return "Reprobado";
    }
}

// Funcion que determina el nivel usando switch
function determinarNivel(promedio) {
    // Convertimos el promedio a escala 1-7 para el switch
    let notaConvertida = Math.round(convertirNota(promedio));

    switch (notaConvertida) {
        case 7:
            return "Sobresaliente";
        case 6:
            return "Muy Bueno";
        case 5:
            return "Bueno";
        case 4:
            return "Suficiente";
        case 3:
            return "Insuficiente";
        case 2:
            return "Deficiente";
        default:
            return "Muy Deficiente";
    }
}


// ============================================
// FUNCION PRINCIPAL - Genera reporte de un estudiante
// (Usa funciones anidadas adentro)
// ============================================
function generarReporte(estudiante) {

    // Funcion anidada - solo existe dentro de generarReporte
    function mostrarNotas(notas) {
        let texto = "";
        for (let i in notas) {
            texto += "Nota " + (Number(i) + 1) + ": " + notas[i] + "  ";
        }
        return texto;
    }

    // Llamamos las funciones desde aqui (funciones dentro de funciones)
    let promedio = calcularPromedio(estudiante.notas);
    let notaMax = calcularNotaMaxMin(estudiante.notas, "max");
    let notaMin = calcularNotaMaxMin(estudiante.notas, "min");
    let estado = verificarEstado(promedio);
    let nivel = determinarNivel(promedio);
    let promedioEscala  = convertirNota(promedio).toFixed(1);

    console.log("-".repeat(50));
    console.log("Estudiante: " + estudiante.nombre);
    console.log("Notas: " + mostrarNotas(estudiante.notas));
    console.log("Promedio: " + promedio.toFixed(1) + " (Nota: " + promedioEscala + ")");
    console.log("Nota Maxima: " + notaMax);
    console.log("Nota Minima: " + notaMin);
    console.log("Estado: " + estado);
    console.log("Nivel: " + nivel);
}


// ============================================
// FUNCION - Agregar nuevo estudiante
// Solo usa prompt para pedir el nombre
// Usa WHILE para pedir las 4 notas
// ============================================
function agregarEstudiante() {
    
    // Pedir nombre con prompt
    let nombre = prompt("Ingrese el nombre del estudiante:");
    
    if (!validarNombre(nombre)) {
        console.log("Error: El nombre no puede estar vacio.");
        return;
    }

    // Usar WHILE para pedir y validar las 4 notas
    let notas = [];
    let contador = 1;

    while (contador <= 4) {
        let nota = Number(prompt("Ingrese la nota " + contador + " de " + nombre + " (entre 10 y 70):"));

        if (validarNota(nota)) {
            notas.push(nota);
            contador++;
        } else {
            console.log("Nota invalida. Debe ser un numero entre 10 y 70. Intente nuevamente.");
        }
    }

    // Crear objeto estudiante y agregarlo al arreglo
    let nuevoEstudiante = {
        nombre: nombre,
        notas: notas
    };

    estudiantes.push(nuevoEstudiante);
    console.log("Estudiante " + nombre + " agregado correctamente.");
}

// ============================================
// FUNCION - Muestra el reporte de TODOS los estudiantes
// Usa forEach para recorrer el arreglo de objetos
// ============================================

function mostrarTodosLosEstudiantes() {
    console.log("=".repeat(50));
    console.log("REPORTE GENERAL DE ESTUDIANTES");
    console.log("=".repeat(50));

    estudiantes.forEach(function(estudiante) {
        generarReporte(estudiante);
    });

    console.log("-".repeat(50));
    console.log("Total de estudiantes: " + estudiantes.length);
}


// ============================================
// FUNCION - Estadisticas generales del curso
// Usa map() para extraer solo los promedios
// ============================================
function estadisticasDelCurso() {
    console.log("=".repeat(50));
    console.log("ESTADISTICAS DEL CURSO");
    console.log("=".repeat(50));

    // map() crea un nuevo arreglo con los promedios de cada estudiante
    let promedios = estudiantes.map(function(estudiante) {
        return calcularPromedio(estudiante.notas);
    });

    let promedioGeneral = calcularPromedio(promedios);
    let notaMasAlta     = calcularNotaMaxMin(promedios, "max");
    let notaMasBaja     = calcularNotaMaxMin(promedios, "min");

    // Contar aprobados y reprobados con for
    let aprobados  = 0;
    let reprobados = 0;

    for (let i = 0; i < promedios.length; i++) {
        if (promedios[i] >= 40) {
            aprobados++;
        } else {
            reprobados++;
        }
    }

    console.log("Promedio general del curso: " + promedioGeneral.toFixed(1) + " (Nota: " + convertirNota(promedioGeneral).toFixed(1) + ")");
    console.log("Promedio mas alto: " + notaMasAlta.toFixed(1) + " (Nota: " + convertirNota(notaMasAlta).toFixed(1) + ")");
    console.log("Promedio mas bajo: " + notaMasBaja.toFixed(1) + " (Nota: " + convertirNota(notaMasBaja).toFixed(1) + ")");
    console.log("Aprobados: " + aprobados);
    console.log("Reprobados: " + reprobados);
    console.log("-".repeat(50));
}

// ============================================
// FUNCION - Buscar estudiante por nombre
// ============================================
function buscarEstudiante(nombreBuscado) {
    let encontrado = false;

    for (let i = 0; i < estudiantes.length; i++) {
        if (estudiantes[i].nombre === nombreBuscado) {
            encontrado = true;
            generarReporte(estudiantes[i]);
            break;
        }
    }

    if (!encontrado) {
        console.log("Estudiante no encontrado.");
    }
}


// ============================================
// MENSAJE DE INICIO
// ============================================

let nombreUsuario = prompt("Bienvenido! Ingrese su nombre:");

if (!validarNombre(nombreUsuario)) {
    nombreUsuario = "Usuario";
}

console.log("=".repeat(50));
console.log("PLATAFORMA DE APRENDIZAJE");
console.log("Sistema de Gestion de Notas");
console.log("Hola " + nombreUsuario + "! Bienvenido al sistema.");
console.log("=".repeat(50));
