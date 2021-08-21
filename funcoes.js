//Criar função de forma literal
function nome(){

}

//Armazernar função em uma variável
const variavel = function (){

}

//Armazenar em um array
const array = [function(a,b){return a+b}, nome, variavel]
console.log(array[0](2,3))

//Armazenar função dentro de objeto

const obj = {}
obj.func = function() {return 'Opa'} 
console.log(obj.func())   


// Passa função como param
function run(fun){
    fun()
}

run(function () {console.log( 'Executando')})


//função que retorna outra função
function soma(a, b){
    return function (c) {
        console.log(a + b + c)
        
    }
}

//Forma de se chamar essa função
soma(2, 4)(4)
//ou
const recebeReturn = soma(2, 4)
recebeReturn(4)


{
//Passagem de arugumentos de forma variável

function soma(){
    let soma = 0
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}

function concatena(){
    let espaco = ' '
    let concatena = ''
    for(i in arguments){
        concatena += arguments[i]+espaco
    }
    return concatena
}

console.log(soma(5,6,7,8,10))
console.log(concatena('kennedy', 'costa', 'alves'))
}

{
//Setando valores padão nos parâmetros da função
//Modo mais recomendado
    function soma1(a = 0, b = 0, c = 0){
        return a + b + c
    }

//Segunda forma, mais utilizada para setar valores de variáveis padrão dentro da função
    function soma2(a, b, c){
        a = a || 0
        b = b || 0
        c = c || 0
        return  a + b + c
    }

// terceira forma recomendada
    function soma3(a, b, c){
        a = isNaN(a) ? 0 : a
        b = isNaN(b) ? 0 : b
        c = isNaN(c) ? 0 : b
    }


console.log(soma1(2,4))
console.log(soma2(10))
console.log(soma3(5,5))



}

{
// Uso do bind
// O bind é utilizado para força a refenciação do objeto this a instancia o qual ele pertence.

    const pessoa = {
        saudacao: 'Bom dia',
        falar(){
            console.log(this.saudacao)
        }
    }
//a const falar que recebe a função falar do objeto pessoa não possui o campo saudação
//e como a função falar chama o parâmetro saudação atravez do this.saudação, toda vez que,
//essa função for invocada ele buscará pela parâmetro saudação
    const falar = pessoa.falar
    falar()

//para tornar possível usamos o bind que faz essa amarração
    const falar2 = pessoa.falar.bind(pessoa)
    
    falar2()




}

{

//Função anônima 

const soma =  function(x, y){
    return x + y
}

const imprimisoma = function(a, b, operacao = soma){
    if(operacao == '-'){
        console.log(a - b)
    }else if(operacao == '*'){
        console.log(a * b)
    }else if(operacao == '/'){
        console.log(a / b)
    }else(console.log(soma(a,b)))
    
}

imprimisoma(1,4)
imprimisoma(10,4,'-')
imprimisoma(1,4,'*')


}

{
//collback forEach

const array = ['moto', 'carro', 'navio', 'avião']

function imprime(valor, index){
    console.log(`${index} . ${valor}`)
}

//callback
// para cada elemento ele chamara a função imprime passando chave e valor, que serão separados pela função imprime
array.forEach(imprime)

//para cada elemento do array, ele executa uma função arrow passada como parâmetro
//na função arrow "a" é o parâmetro e console.log(a) é o return

array.forEach((valor,index) =>   console.log(`${index} . ${valor}`))

}

{
//callback filter
//Utilizado para filtros em arrays ou objetos

const notas = [7.8, 8.9, 10.0, 6.6, 4.5, 7.0, 5.5]

const notasBaixar = notas.filter(valor => valor < 7)

console.log(notasBaixar)

}

{
//Função construtora

function Carro(velocidadeMaxima = 200, delta = 5){

    // Atibuto Privado
    let velocidadeAtual = 0
    
    //método público
    this.acelera = function (){
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeAtual
        }
    }

    //método público
    this.getVelocidadeAtual = function() {
        return velocidadeAtual
    }

}

const uno = new Carro()
uno.acelera()
console.log(uno.getVelocidadeAtual())

const opala = new Carro(350, 25)

opala.acelera()
console.log(opala.getVelocidadeAtual())

}

{
//Função factory, função que retorna objetos

    function criarPessoa(nome, sobre, idade){

        return {
            nome: nome,
            sobre: sobre,
            idade: idade
        }
    }
    const objs = criarPessoa('Kennedy', 'Alves', 27)
    

}

{

    function Pessoa(nome){
       
        
        //método público
        this.falar = function (){

            console.log(`Meu nome é ${nome}`)
        }
    
    
    }
    
    const obj = new Pessoa('Kennedy')
    obj.falar()
    

}

{
//Factory com função arrow

const criarProduto = nome => {
    return{
        falar: () => console.log(`produto: ${nome}`)
    }
}

const sabao = criarProduto("sabão")
sabao.falar()


}

{
// IIFE Funções que se alto executam e fogem do escopo global

(function(){

    console.log('Assim que o script for lido, tudo que essa função tiver como execução, sera executado')
    console.log('Executando função dentro do escopo local dela')

})()

}