function tabuada() {
    let num = document.getElementById('txtn')
    let res = document.getElementById('res')
    if (num.value.length == 0) {
        window.alert('Por favor, Digite um número!')
    } else {
        res.options.length = 0
        for (let c = 1; c <= 10; c++) {
            let mult = (Number(num.value) * Number(c))
            res.options[res.options.length] = new Option(`${num.value} x ${c} = ${mult}`,`value${c}`)
        }
    }
}