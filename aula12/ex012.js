var agora = new Date()
var hora = agora.getHours()
console.log(`Agora sao exatamente ${hora}h.`)
if (hora < 6) {
    console.log('Boa Madrugada!')
} else if (hora < 12) {
    console.log('Bom dia!')
} else if (hora < 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}