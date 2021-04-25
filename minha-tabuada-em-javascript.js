let numero = prompt("Digite o número da tabuada de multiplicação desejada:");
let resultado;

for(var x = 1; x <= 10; x++){
    resultado = numero * x;
    alert(`${numero}` + ` x ` + x +` = ` + `${numero * x}`);
}

alert("Obrigado por utilizar minha tabuada em JavaScript 😃")