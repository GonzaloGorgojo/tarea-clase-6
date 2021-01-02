const $botonGrupoFamiliar = document.querySelector("#envioGrupo");
const $grupoFamiliar = document.querySelector("#grupoFamiliar");
const $formulario = document.querySelector("#formularioFamiliares")
const $contenedorInputAgregado = document.querySelector("#contenedorInputAgregado");
const $botonCalcularEdades = document.querySelector("#botonCalcularEdades");
const $botonBorrarDatos = document.querySelector("#borrarDatos");
const $mayorEdad = document.querySelector("#mayorEdad");
const $menorEdad = document.querySelector("#menorEdad");
const $edadPromedio = document.querySelector("#edadPromedio");

let numeroFamiliar = 0;
let familiarMayor = 0;

function crearFamiliar(numero) {
    let nuevoInput = document.createElement("input");
    nuevoInput.setAttribute("type", "number");
    nuevoInput.setAttribute("id", "inputEdades");
    const inputEdades = document.querySelector("#inputEdades");
    let nuevoLabel = document.createElement("label");
    let textoLabel = document.createTextNode(`Edad Familiar: ${numero + 1}`)

    nuevoLabel.appendChild(textoLabel)
    $contenedorInputAgregado.appendChild(nuevoLabel)
    $contenedorInputAgregado.appendChild(nuevoInput)
    $botonCalcularEdades.style.display = "block";
}


$botonGrupoFamiliar.onclick = function () {
    numeroFamiliar = $grupoFamiliar.value;

    if (numeroFamiliar <= 0) {
        alert('Debe ingresar un numero mayor a 0')
    } else {
        for (let i = 0; i < numeroFamiliar; i++) {
            crearFamiliar(i);
        }
        $botonGrupoFamiliar.disabled = true;
    }

    return false;
}

$botonCalcularEdades.onclick = function () {
    edadPromedio();
    $botonBorrarDatos.style.display = "block";
    return false;
}

function edadMayor() {
    for (let i = 0; i < inputEdades.length; i++) {
        if (familiarMayor < Number(inputEdades[i].value)) {
            familiarMayor = Number(inputEdades[i].value);
        }
    }
    $mayorEdad.innerHTML = `La Edad mayor es ${familiarMayor}`;
}

function edadMenor() {
    let familiarMenor = inputEdades[0];

    for (let j = 0; j < inputEdades.length; j++) {
        if (familiarMenor > Number(inputEdades[j].value)) {
            familiarMenor = Number(inputEdades[j].value);
        }
    }
    $menorEdad.innerHTML = `La Edad Menor es ${familiarMenor}`;
}



function edadPromedio() {
    let lista = []
    for (let i = 0; i < inputEdades.length; i++) {
        lista.push(Number(inputEdades[i].value));
    }
    let total = 0;
    for (let j = 0; j < lista.length; j++) {
        total = total + lista[j];
    }
    promedio = total / lista.length;

    let numero = lista[0];
    for (let k = 0; k < lista.length; k++) {
        if (numero > lista[k]) {
            numero = lista[k];
        }
    }
    if (numero <= 0) {
        alert('No puede haber edades negativas o 0')
    } else {
        edadMenor();
        edadMayor();
        $edadPromedio.innerHTML = `La Edad Promedio es ${promedio}`
        $botonCalcularEdades.disabled = true;
    }
}
$botonBorrarDatos.onclick = function () {
    location.reload();
}


