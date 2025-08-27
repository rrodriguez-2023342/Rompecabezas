// rompecabezas de numeros
let puzzleContainer = document.getElementById("puzzle");
let mensaje = document.getElementById("mensaje");

let piezas = ["image1.png", "image2.png", "image3.png", "image4.png", "image5.png", "image6.png", 
    "image7.png", "image8.png", "image9.png", "image10.png", "image11.png", "image12.png", 
    "image13.png", "image14.png", "image15.png", ""];
let estado = [];

let cronometro = null;
const tiempoMaximo = 300;

// Crear el elemento del cronómetro
let cronometroElem = document.getElementById("tiempo");

// Cronómetro compacto
function actualizarCronometro(reset = false) {
    if (reset) {
        clearInterval(cronometro);
        cronometro = null;
        tiempo = 300;
        cronometroElem.textContent = "05:00";
        return;
    }
    if (cronometro) return;
    cronometro = setInterval(() => {
        tiempo--;
        const min = String(Math.floor(tiempo / 60)).padStart(2, "0");
        const seg = String(tiempo % 60).padStart(2, "0");
        cronometroElem.textContent = `${min}:${seg}`;
        if (tiempo >= tiempoMaximo) {
            clearInterval(cronometro);
            cronometro = null;
            reiniciar();
        }
    }, 1000);
}

// Función para mezclar piezas
function mezclar(array) {
    let copia = [...array];
    for (let i = copia.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
}

// Dibujar el puzzle
function dibujar() {
    puzzleContainer.innerHTML = "";
    estado.forEach((valor, i) => {
        let celda = document.createElement("div");
        celda.classList.add("celda");
        if (valor === "") {
            celda.classList.add("vacio");
        } else {
            let img = document.createElement("img");
            img.src = "../Images/" + valor;
            img.alt = valor;
            img.style.width = "100%";
            img.style.height = "100%";
            celda.appendChild(img);
            celda.addEventListener("click", () => mover(i));
        }
        puzzleContainer.appendChild(celda);
    });
}

// Intentar mover pieza
function mover(indice) {
    let vacio = estado.indexOf("");
    let filas = 4;
    let col = indice % filas;
    let fila = Math.floor(indice / filas);
    let colVacio = vacio % filas;
    let filaVacio = Math.floor(vacio / filas);
    
     // Iniciar cronómetro en el primer movimiento
    if (tiempo === 300 && !cronometro) {
        actualizarCronometro();
        setTimeout(perder, 300000);
    }

    // Verificar si es adyacente
    if ((Math.abs(col - colVacio) === 1 && fila === filaVacio) ||
            (Math.abs(fila - filaVacio) === 1 && col === colVacio)) {
        [estado[indice], estado[vacio]] = [estado[vacio], estado[indice]];
        dibujar();
        verificar();
    }
}

// Verificar si ganó
function verificar() {
    if (JSON.stringify(estado) === JSON.stringify(piezas)) {
        clearInterval(cronometro);
        cronometro = null;
        alert("🎉 ¡Felicidades! Completaste el rompecabezas.");
        mensaje.innerText = "🎉 ¡Felicidades! Completaste el rompecabezas.";
    }
}

// Reiniciar juego
function reiniciar(){
    estado = mezclar(piezas);
    mensaje.innerText = "";
    dibujar();
    actualizarCronometro(true);
}

// Iniciar al cargar
reiniciar();

function perder() {
    alert("Se acabo el tiempo!");
    reiniciar();
}