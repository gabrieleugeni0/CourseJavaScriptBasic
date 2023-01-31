function contador() {
    let inicio = document.querySelector('input#inicio')
    let fim = document.querySelector('input#fim')
    let passo = document.querySelector('input#passo')
    let restxt = document.querySelector('p#restxt')
    let res = document.querySelector('p#res')
    res.innerHTML = ''
    if (inicio.value.length == 0 || fim.value.length == 0) {
        restxt.innerHTML = '[ERRO]'
        res.innerHTML = 'Impossivel contar! Preencha os campos corretamente!'
    } else if (Number(fim.value) == Number(inicio.value)) {
        restxt.innerHTML = '[ERRO]'
        res.innerHTML = 'Impossivel contar! Inicio e o mesmo do Fim!'
    } else if (Number(passo.value) < 0) {
        restxt.innerHTML = '[ERRO]'
        res.innerHTML = 'Impossivel contar! Passo negativo (considerar passo positivo para countdowns)!'
    } else {
        if (passo.value.length == 0 || passo.value == '0') {
            passo.value = '1'
            window.alert('Passo nao digitado ou nulo. Passo considerado: 1')
        }
        restxt.innerHTML = 'Contando:'
        if (Number.parseInt(inicio.value) > Number.parseInt(fim.value)) {
            for (let c = Number.parseInt(inicio.value); c >= Number.parseInt(fim.value); c -= Number.parseInt(passo.value)) {
                if (c == Number.parseInt(inicio.value)) {
                    res.innerHTML += `${c} `             
                } else {
                    res.innerHTML += ` &#128073 ${c}`
                }              
            }
        } else {
            for (let c = Number.parseInt(inicio.value); c <= Number.parseInt(fim.value); c += Number.parseInt(passo.value)) {
                if (c == Number.parseInt(inicio.value)) {
                    res.innerHTML += `${c} `             
                } else {
                    res.innerHTML += ` &#128073 ${c}`
                }              
            }
        }       
        res.innerHTML += ` &#128073 &#x1F6A9`
    }
}