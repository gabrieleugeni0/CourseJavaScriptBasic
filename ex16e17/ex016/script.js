function contar() {
    let ini = document.getElementById('txtini')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpas')
    let res = document.getElementById('res')
    if (ini.value.length == 0 || fim.value.length == 0) {
        res.innerHTML = '[ERRO] Dados nao preenchidos!'      
    } else if (Number(ini.value) == Number(fim.value)) {
        res.innerHTML = '[ERRO] Inicio igual a fim!'
    } else {
        if (Number(passo.value) <= 0) {
            window.alert('Passo nao preenchido ou zero invalido! Passo 1 considerado.')
            passo.value = '1'
        }
        res.innerHTML = 'Contando: <br><br>'
        if (Number(ini.value) < Number(fim.value)) {
            for(let c = Number(ini.value); c <= Number(fim.value); c += Number(passo.value)) {
                res.innerHTML += `${c} &#x1f449 `
            }
        } else if (Number(ini.value) > Number(fim.value)) {
            for(let c = Number(ini.value); c >= Number(fim.value); c -= Number(passo.value)) {
                res.innerHTML += `${c} &#x1f449 `
            }
        }
        res.innerHTML += `&#x1F6A9`
    }
}