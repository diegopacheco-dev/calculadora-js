let resultado = document.getElementById("resultado");
let valorActualPantalla = document.getElementById("valor-actual");
valorActualPantalla.innerText = '0';

let numeroAnterior = 0;
let numeroActual = "0";
let numeroNuevo = true;
let coma = false;

let operacion = "";

// FUNCION ACTIVADA POR LOS BUTTONS
const obtenerNumero = (n) => {
  if (n === "." && coma === true) {
    return;
  }

  // Si en la pantalla no hay ningun número, añadimos uno nuevo
  if (numeroActual === "0" || numeroNuevo === true) {
    valorActualPantalla.innerHTML = n; // Mostrar en la pantalla el nuevo número
    numeroActual = n; // Guardamos el numero quew tenemos en la pantalla
    if (numeroActual === ".") {
      valorActualPantalla.innerText = "0.";
      numeroActual = "n";
      coma = true;
    }
    numeroNuevo = false;
  } else if (n === "." && coma === false) {
    valorActualPantalla.innerText += n;
    numeroActual += n;
    coma = true;
  }
  // Si en la pantalla ya tenemos algun número, concatemos el número ingresado
  else {
    valorActualPantalla.innerText += n; // concatemos el numero ingresado con el que ya habia en la pantalla
    numeroActual += n; // concatenamos y guardamos el numero
  }
};

const operar = (operador) => {
  igualar(); // resolver operaciones pendientes
  // Capturamos el operador
  operacion = operador;
  // Tomamos el numero mostrado en la pantalla como el primer número de la operación
  numeroAnterior = numeroActual;
  // Establecemos que el próximo número a ingresar será un número nuevo
  numeroNuevo = true;
};

const igualar = () => {
  // Comprobamos si tenemos una operacion pendiente
  if (operacion === "") {
    return;
  }

  // concatenamos el número anterior con la operacion y el numero actual
  let resolver = numeroAnterior + operacion + numeroActual;
  let solucion = eval(resolver); // eval() evalua un código JS representado como string
  valorActualPantalla.innerText = solucion;
  numeroAnterior = solucion;
  operacion = "";
  numeroNuevo = true; // Podemos ingresar un número nuevo;
  numeroActual = '';
};

// Estas operaciones se resuelven directamente sin necesidad de presionar la tecla igual
const porcentaje = () => {
  numeroActual /= 100;
  valorActualPantalla.innerText = numeroActual;
  igualar();
  numeroNuevo = true;
};

// Borra el número escrito en pantalla, pero conserva el número y la operación guardada
const borradoParcial = () => {
  let cifras = numeroActual.length;
  let caracterBorrado = numeroActual[cifras - 1];
  numeroActual = numeroActual.substr(0, cifras - 1);
  if (numeroActual === "") {
    numeroActual = "0";
  }
  if (caracterBorrado === ".") {
    coma = false;
  }
  valorActualPantalla.innerText = numeroActual;
};

// Reinicia la calculadora
const borradoTotal = () => {
  valorActualPantalla.innerText = "0";
  numeroActual = "0";
  numeroNuevo = true;
  coma = false;
  numeroAnterior = 0;
  operacion = "";
};

// MOSTRAR TECLAS SELECCIONADAS
window.addEventListener("keyup", (e) => {
  console.log(e);
});
