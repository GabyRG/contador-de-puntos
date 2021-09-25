function empezar(){
    let botonTurno = document.getElementById("turnoBlancas");
    let botonTurnoNegras = document.getElementById("turnoNegras");
    let contadorBlancas = document.getElementById("contadorBlancas");
    let contadorNegras = document.getElementById("contadorNegras");
    contadorBlancas.innerHTML = "10";
    contadorNegras.innerHTML = "10";
    botonTurno.setAttribute("style", "border: 10px solid #0f0;");
    botonTurnoNegras.setAttribute("style", "border: 10px solid #000;");
};

function cambiarTurno(terminar, empezar, contOtro) {
    let turnoTerminar = document.getElementById(terminar);
    let turnoEmpezar = document.getElementById(empezar);
    let contadorOtro = document.getElementById(contOtro);
    let num = parseInt(contadorOtro.textContent);
    num++;
    contadorOtro.innerHTML = num;
    
    
    turnoTerminar.setAttribute("style", "border: 10px solid #000;");
    turnoEmpezar.setAttribute("style", "border: 10px solid #0f0;")
}

function sumar(contador){
    let valor = document.getElementById(contador);
    let num = parseInt(valor.textContent);
    num++;
    valor.innerHTML = num;

}

function restar(contador){
    let valor = document.getElementById(contador);
    let num = parseInt(valor.textContent);
    if (num <= 0) {
        valor.innerHTML = num;
    } else {
        num--;
        valor.innerHTML = num;
    }
}