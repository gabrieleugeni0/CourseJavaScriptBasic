var arr = []

function validaNum(num) {
    if (num >= 1 && num <= 100) {
        return true
    } else {
        return false
    }
}

function numExistente(arr, num) {
    if (arr.indexOf(num) == -1) {
        return true
    } else {
        return false
    }
}
 
function adicionar() {
    let txtnum = document.getElementById('txtn')
    let num = Number(txtnum.value)
    let sel = document.getElementById('sel')
    if (validaNum(num)) {
        if (numExistente(arr, num)) {
            res.innerHTML = ''
            arr.push(num)
            sel.options[sel.options.length] = new Option(
                `Valor ${num} adicionado.`,`op${sel.options.length}`)
        } else {
            window.alert('[ERRO] Valor ja encontrado na lista!')
        }
    } else {
        window.alert('[ERRO] Valor invalido! Digite um numero entre 1 e 100!')
    }
    txtnum.value = ''
    txtnum.focus()     
}

function analisar() {
    if (arr.length == 0) {
        window.alert('[ERRO] Adicione valores antes de finalizar!')
    } else {
        let res = document.getElementById('res')
        let maior = arr[0]
        let menor = arr[0]
        let soma = 0
        for (let i in arr) {
            if (arr[i] > maior) {
                maior = arr[i]
            }
            if (arr[i] < menor) {
                menor = arr[i]
            }
            soma += arr[i]
        }
        let media = (soma / (arr.length))
        res.innerHTML += `Temos ao todo ${arr.length} valores cadastrados.<br><br><br>`
        res.innerHTML += `O maior valor informado foi ${maior}.<br><br><br>`
        res.innerHTML += `O menor valor informado foi ${menor}.<br><br><br>`
        res.innerHTML += `A soma de todos os valores informados vale ${soma}.<br><br><br>`
        res.innerHTML += `A media dos valores informados vale ${media}.`
        }
}

function recomecar() {
    arr = []
    let txtnum = document.getElementById('txtn')
    let sel = document.getElementById('sel')
    let res = document.getElementById('res')
    txtnum.value = ''
    sel.options.length = 0
    res.innerHTML = ''
}