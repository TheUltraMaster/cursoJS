const saludar1 = () => console.log(`Hola`);
saludar1();

const saludar = nombre => console.log(`Hola ${nombre}`);
saludar("Irma");

const sumar1 = function (a, b) {
    return a + b;
}

const sumar = (a, b) => a + b;

console.log(sumar1(9, 9));
console.log(sumar(9, 9));

const funcionDeVariasLineas = () => {
    console.log("Uno");
    console.log("Dos");
    console.log("Tres");
}

funcionDeVariasLineas();

const numeros = [1, 2, 3, 4, 5];

numeros.forEach((el, index) => console.log(`${el} esta en la posición ${index}`));


function Perro() {
    console.log(this);
}

Perro();

const perro = {
    nombre: "kenai",
    ladrar() {
        console.log(this)
    }
}

perro.ladrar();