function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    
    if (fano.value.length == 0) {
        res.innerHTML = '[ERRO] Voce NAO digitou seu ano de nascimento! Tente novamente!'
    } else if (Number(fano.value) > ano) {
        res.innerHTML = `[ERRO] Voce NAO pode ter nascido em ${fano.value}, pois ainda estamos em ${ano}. Verifique os dados e tente novamente!`
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var fx_idade = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {  
            genero = 'Homem'
            if (idade <= 3) {
                // Bebe
                fx_idade = 'bebe'
            } else if (idade <= 11) {
                // Crianca
                fx_idade = 'crianca'
            } else if (idade <= 21) {
                // Adolescente
                fx_idade = 'adolescente'       
            } else if (idade <= 50) {
                // Adulto
                fx_idade = 'adulto'
            } else if (idade <= 70) {
                // Meia idade
                fx_idade = 'meiaidade'
            } else {
                // Idoso
                fx_idade = 'idoso'
            }
            img.setAttribute('src', `homem_${fx_idade}.jpg`)
        } else {
            genero = 'Mulher'
            if (idade <= 3) {
                // Bebe
                fx_idade = 'bebe'
            } else if (idade <= 11) {
                // Crianca
                fx_idade = 'crianca'
            } else if (idade <= 21) {
                // Adolescente
                fx_idade = 'adolescente'
            } else if (idade <= 50) {
                // Adulto
                fx_idade = 'adulto'
            } else if (idade <= 70) {
                // Meia idade
                fx_idade = 'meiaidade'
            } else {
                // Idoso
                fx_idade = 'idoso'
            }
            img.setAttribute('src', `mulher_${fx_idade}.jpg`)
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }   
}