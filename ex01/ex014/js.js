function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}h${minutos}min. </br>`
    if (hora >= 0 && hora < 12) {
        msg.innerHTML += 'Bom Dia!'
        img.src = 'manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML += 'Boa tarde!'
        img.src = 'tarde.png'
        document.body.style.background = '#b9846f'
    } else if (hora >= 18 && hora <= 23) {
        msg.innerHTML += 'Boa noite!'
        img.src = 'noite.png'
        document.body.style.background = '#515154'
    }
}