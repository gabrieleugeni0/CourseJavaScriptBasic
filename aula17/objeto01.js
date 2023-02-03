let amigo = {
    nome:'Jose', 
    sexo: 'M',
    peso: 85.4,
    engordar(aumentoPeso=0) {
        console.log(`${this.nome} engordou ${aumentoPeso}kg.`)
        this.peso += aumentoPeso
    }
}

amigo.engordar(3)
console.log(`${amigo.nome} pesa ${amigo.peso}kg.`)