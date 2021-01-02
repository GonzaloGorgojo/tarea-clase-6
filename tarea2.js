const $botonEnvio = document.querySelector("#envioGrupo");
const $botonCalcular = document.querySelector("#botonCalcular");
const $botonReiniciar = document.querySelector("#botonReiniciar");
const $cantidadFamiliares = document.querySelector("#salarioFamiliar");
const $contenedorInputSalarios = document.querySelector("#contenedorSalarioAgregado");
const $salarioMayor = document.querySelector("#salarioMayor");
const $salarioMenor = document.querySelector("#salarioMenor");
const $anualPromedio = document.querySelector("#anualPromedio");
const $mensualPromedio = document.querySelector("#mensualPromedio");

let numeroFamiliares = 0;
let salarioAnualMayor = 0;


function crearInputSalarios(numero) {
    let nuevoInput = document.createElement("input");
    nuevoInput.setAttribute("type", "number");
    nuevoInput.setAttribute("id", "inputSalarios");
    const inputSalarios = document.querySelector("#inputSalarios");
    let nuevoLabel = document.createElement("label");
    nuevoLabel.setAttribute("id", "labelCreado");
    const labelCreado = document.querySelector("#labelCreado");
    let textoLabel = document.createTextNode(`Salario Anual Familiar ${numero + 1}:`)
    let nuevoBoton = document.createElement("button");
    let textoBoton = document.createTextNode("Borrar Familiar")
    nuevoBoton.setAttribute("id", "botonBorrarSalarios");


    nuevoLabel.appendChild(textoLabel)
    $contenedorInputSalarios.appendChild(nuevoLabel)
    $contenedorInputSalarios.appendChild(nuevoInput)
    nuevoBoton.appendChild(textoBoton)
    $contenedorInputSalarios.appendChild(nuevoBoton)

    $botonCalcular.style.display = "block";
}

$botonEnvio.onclick = function () {
    numeroFamiliares = $cantidadFamiliares.value;

    if (numeroFamiliares <= 0) {
        alert('Debe ingresar un numero mayor a 0')
    } else {
        for (let i = 0; i < numeroFamiliares; i++) {
            crearInputSalarios(i);
            borrarSalarios(i);
        }
        $botonEnvio.disabled = true;
    }

    return false;
}


function borrarSalarios(n) {
    const $botonBorrarSalarios = document.querySelectorAll("#botonBorrarSalarios");

    $botonBorrarSalarios[n].onclick = function () {
        $contenedorInputSalarios.removeChild(labelCreado[n]);
        $contenedorInputSalarios.removeChild(inputSalarios[n]);
        $contenedorInputSalarios.removeChild($botonBorrarSalarios[n]);
        return false;
    }

}

$botonCalcular.onclick = function(){
    calcularSalarios();
    $botonReiniciar.style.display='block';
    $botonCalcular.disabled=true;
    return false;
}
$botonReiniciar.onclick = function () {
    location.reload();
}

function calcularSalarios(){
    salarioMayor();
    salarioMenor();
    salarioAnualPromedio();
    salarioMensualPromedio();
}

function salarioMayor(){
    for(let x = 0; x < inputSalarios.length; x++) {
        if(salarioAnualMayor < Number(inputSalarios[x].value)){
            salarioAnualMayor = Number(inputSalarios[x].value);
        }
    }
    $salarioMayor.innerHTML = `El Salario Anual Mayor de su Familia es ${salarioAnualMayor}`
}
    
function salarioMenor() {
    let salarioAnualMenor = inputSalarios[0].value;

    for(let x= 0;x < inputSalarios.length; x++){
        if(salarioAnualMenor > Number(inputSalarios[x].value)){
            salarioAnualMenor = Number(inputSalarios[x].value);
        }
    }
    $salarioMenor.innerHTML = `El Salario Anual Menor de su Familia es ${salarioAnualMenor}`
}

function salarioAnualPromedio() {
    let total = 0;
   for (let x=0; x < inputSalarios.length; x++) {
    total = total + Number(inputSalarios[x].value);
   }
   let promedio = total / inputSalarios.length;
   $anualPromedio.innerHTML = `El Salario Anual Promedio de su Familia es ${promedio}`

}

function salarioMensualPromedio() {
    let total = 0;
   for (let x=0; x < inputSalarios.length; x++) {
    total = total + Number(inputSalarios[x].value);
   }
   let mensualPromedio = total / 12 / inputSalarios.length;
   $mensualPromedio.innerHTML = `El Salario Mensual Promedio de su Familia es ${mensualPromedio.toFixed(2)}`
}