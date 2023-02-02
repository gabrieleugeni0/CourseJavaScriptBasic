function soma(n1=0, n2=0) {
    let soma = n1 + n2
    return(soma)
}

function parimp(num) {
    if (num % 2 == 0) {
        return 'par'
    } else {
        return 'impar'
    }
}

let doub = function(num) {
    return num*2 
}

function fat(num){
    let fat = 1
    for (let i = num; i > 1; i--) {
        fat *= i
    }
    return fat
}

function fatorial_recursivo(num) {
    if (num == 1 || num == 0) {
        return 1
    } else {
        return num * fatorial_recursivo(num-1)
    }
}


console.log(soma(5, 1))
console.log(parimp(2))
console.log(doub(8))
console.log(fat(5))
console.log(fatorial_recursivo(5))