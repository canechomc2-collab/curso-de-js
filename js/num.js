import readline from "readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("ingrese un numero: ", (num) => {
    let numero = Number(num);

    console.log(`El numero ingresado es: ${numero}`);
    console.log(`Math.round(${numero}) -> ${Math.round(numero)}`);
    console.log(`Raíz cuadrada de ${numero} -> ${Math.sqrt(numero)}`);
    console.log(`Cuadrado de ${numero} -> ${numero ** 2}`);

    rl.close();
})