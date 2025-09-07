import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese un número: ", (num) => {
    let randomNumero = Math.floor(Math.random() * 29) + 1;
    console.log(`Número aleatorio entre 1 y 29 -> ${randomNumero}`);
    rl.close();
});

    