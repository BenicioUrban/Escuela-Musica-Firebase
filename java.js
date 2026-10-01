// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBhDhuBQEvnKCILK8nALs0Vhl-Qv_4w4Oo",
  authDomain: "escuela-los-moggers.firebaseapp.com",
  databaseURL: "https://escuela-los-moggers-default-rtdb.firebaseio.com",
  projectId: "escuela-los-moggers",
  storageBucket: "escuela-los-moggers.firebasestorage.app",
  messagingSenderId: "778457835317",
  appId: "1:778457835317:web:4f17dba1cd65cc39fc4e7c"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// ==========================================
// 1. GESTIÓN DE INSTRUMENTOS (5 parámetros)
// ==========================================
db.ref('instrumentos').on('value', function(snapshot) {
    let datos = snapshot.val();
    let tbody = document.querySelector("#tabla-instrumentos tbody");
    tbody.innerHTML = "";

    if (datos) {
        for (let clave in datos) {
            let item = datos[clave];
            let fila = "<tr>" +
                "<td>" + item.codigo + "</td>" +
                "<td>" + item.nombre + "</td>" +
                "<td>" + item.tipo + "</td>" +
                "<td>" + item.marca + "</td>" +
                "<td>" + item.anio + "</td>" +
                "</tr>";
            tbody.innerHTML += fila;
        }
    }
});

function agregarInstrumento(event) {
    event.preventDefault();
    let codigo = document.getElementById("inst-codigo").value;
    let nombre = document.getElementById("inst-nombre").value;
    let tipo = document.getElementById("inst-tipo").value;
    let marca = document.getElementById("inst-marca").value;
    let anio = document.getElementById("inst-anio").value;

    db.ref('instrumentos/' + codigo).set({
        codigo: codigo,
        nombre: nombre,
        tipo: tipo,
        marca: marca,
        anio: anio
    }, function(error) {
        if (error) {
            alert("Error al guardar instrumento.");
        } else {
            alert("¡Instrumento guardado con éxito!");
            event.target.reset();
        }
    });
}

// ==========================================
// 2. GESTIÓN DE PROFESORES (4 parámetros)
// ==========================================
db.ref('profesores').on('value', function(snapshot) {
    let datos = snapshot.val();
    let tbody = document.querySelector("#tabla-profesores tbody");
    tbody.innerHTML = "";

    if (datos) {
        for (let clave in datos) {
            let item = datos[clave];
            let fila = "<tr>" +
                "<td>" + item.dni + "</td>" +
                "<td>" + item.nombre + "</td>" +
                "<td>" + item.materia + "</td>" +
                "<td>" + item.telefono + "</td>" +
                "</tr>";
            tbody.innerHTML += fila;
        }
    }
});

function agregarProfesor(event) {
    event.preventDefault();
    let dni = document.getElementById("prof-dni").value;
    let nombre = document.getElementById("prof-nombre").value;
    let materia = document.getElementById("prof-materia").value;
    let telefono = document.getElementById("prof-telefono").value;

    db.ref('profesores/' + dni).set({
        dni: dni,
        nombre: nombre,
        materia: materia,
        telefono: telefono
    }, function(error) {
        if (error) {
            alert("Error al guardar profesor.");
        } else {
            alert("¡Profesor guardado con éxito!");
            event.target.reset();
        }
    });
}

// ==========================================
// 3. GESTIÓN DE ESTUDIANTES (4 parámetros)
// ==========================================
db.ref('estudiantes').on('value', function(snapshot) {
    let datos = snapshot.val();
    let tbody = document.querySelector("#tabla-estudiantes tbody");
    tbody.innerHTML = "";

    if (datos) {
        for (let clave in datos) {
            let item = datos[clave];
            let fila = "<tr>" +
                "<td>" + item.legajo + "</td>" +
                "<td>" + item.nombre + "</td>" +
                "<td>" + item.instrumento + "</td>" +
                "<td>" + item.nivel + "</td>" +
                "</tr>";
            tbody.innerHTML += fila;
        }
    }
});

function agregarEstudiante(event) {
    event.preventDefault();
    let legajo = document.getElementById("est-legajo").value;
    let nombre = document.getElementById("est-nombre").value;
    let instrumento = document.getElementById("est-instrumento").value;
    let nivel = document.getElementById("est-nivel").value;

    db.ref('estudiantes/' + legajo).set({
        legajo: legajo,
        nombre: nombre,
        instrumento: instrumento,
        nivel: nivel
    }, function(error) {
        if (error) {
            alert("Error al guardar estudiante.");
        } else {
            alert("¡Estudiante guardado con éxito!");
            event.target.reset();
        }
    });
}