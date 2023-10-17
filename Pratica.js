
function exibirmedia() {
    let numero = parseInt(prompt('Digite um numero'));
    let numero2 = parseInt(prompt('Digite outro numero!'))
    let numero3 = parseInt(prompt('Digite outro numero!'))
    let media = (numero + numero2 + numero3)  / 3
    console.log(`A media dos numeros digitados é ${media}`);
}
exibirmedia();