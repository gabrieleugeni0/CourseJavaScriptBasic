var idade = 87
console.log(`Voce tem ${idade} anos.`)
// if (idade < 16) {
//     console.log('Nao Vota!')
// } else {
//     if (idade < 18) {
//         console.log('Voto opcional!')
//     } else {
//         console.log('Voto obrigatorio!')
//     }
// }
if (idade < 16) {
    console.log('Nao vota!')
} else if (idade < 18) {
    console.log('Voto opcional!')
} else if (idade < 65) {
    console.log('Voto obrigatorio!')
} else {
    console.log('Voto opcional!')
}