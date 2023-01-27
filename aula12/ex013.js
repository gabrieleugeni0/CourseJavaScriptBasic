var agora = new Date()
var diaSem = agora.getDay()
/*
    Domingo - 0
    Segunda - 1
    Terça - 2
    Quarta - 3
    Quinta - 4
    Sexta - 5
    Sábado - 6
*/

switch (diaSem) {
    case 0:
        diaSem = 'Domingo'
        break
    case 1:
        diaSem = 'Segunda'
        break
    case 2:
        diaSem = 'Terça'
        break
    case 3:
        diaSem = 'Quarta'
        break
    case 4:
        diaSem = 'Quinta'
        break
    case 5:
        diaSem = 'Sexta'
        break
    case 6:
        diaSem = 'Sábado'
        break
    default:
        diaSem = 'ERROR! Dia inválido!'
        break
}

console.log(`Hoje é ${diaSem}!`)