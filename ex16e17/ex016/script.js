function contador() {
    var inicio = document.querySelector('input#inicio')
    var fim = document.querySelector('input#fim')
    var passo = document.querySelector('input#passo')
    var res = document.querySelector('div#res')
    if (inicio.value.length == 0 || fim.value.length == 0) {
        res.innerHTML = 'Impossivel contar! Preencha os campos corretamente!'
    } else {
        if (Number(fim.value) == Number(inicio.value)) {
            res.innerHTML = 'Impossivel contar! Inicio e o mesmo do Fim!'
        } else {
            if (passo.value.length == 0 || Number(passo.value) == 0) {
                window.alert('Passo nulo ou nao preenchido! Contando de 1 em 1!')
                passo = 1
            }    
            if (Number(inicio.value) > Number(fim.value)) {
                window.alert('Contagem decresciva!')
                if (Number(passo.value) > 0) {
                    passo = -passo
                }
            }
        }
    }
    res.innerHTML = 'FIM'
}