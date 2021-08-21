{
const peso1 = 1.0
const peso2 = Number('2.0') // Outra forma de se criar um número

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))//Valida se o dado passado é do tipo inteiro
console.log(Number.isInteger(peso2))
}

const avaliacao1 =  9.454
const avaliacao2 =  6.343

const total = avaliacao1 * peso1 + avaliacao2 * peso2

const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // O método toFixed é utilizada pra dizer quantas casa decimais depois do ponto deverão apracer.
// toFixed não modifica o dado da vaiável

console.log(media.toString()) // O método toString, tranforma um dado de valor número em String

console.log(typeof media)

{
//Math -  calculos matemáticos
const raio = 5.6
const area = Math.PI * Math.pow(raio, 2)
console.log('Math -  calculos matemáticos')
console.log(area.toFixed(2))
}

//string
const nome = "kennedy"

console.log("charAt tráz o caracter de posição 4")
console.log(nome.charAt(4))

console.log("charCodeAt tráz o código unicode do caracter na posição informada")
console.log(nome.charCodeAt(3))

console.log(" indexOf retorna  o número do índice do caracter informado se existir")
console.log(nome.indexOf('k'))

console.log("trás os caracter de index 3 em diante")
console.log(nome.substring(3))

console.log("trás de uma posição a outra, não trazendo o index do segundo parâmetro informado")
console.log(nome.substring(0, 3))


console.log("Concatenando string")
console.log(nome.concat(" costa").concat(" alves"))

console.log("Subtituindo strings")
console.log(nome.replace('k', 'K'))


console.log("Split, tranformar strings em arrays")
console.log("kennedy,Costa,Alves".split(','))


console.log("TemaplteString")
const firtName = 'Kennedy'
const concatenacao = 'Olá'
const template = `${concatenacao}, ${firtName}` //a Interpolação/interpretação ocorrerá aqui
console.log(template)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!!`)

{
console.log('Testando se o valor verdadeiro ou falso - True/False utiliza-se "!!"')
let valor = true
console.log(!!valor)
valor = '' // Retorna falso o vazio
console.log(!!valor)
valor = ' ' //Retorna verdadeiro
console.log(!!valor)
let valor2 = 123

if(!!(valor || valor2)){
    console.log('True!')
}
}

{
console.log('Arrays')
let meuArray = [1, 2, 3, 4, 5]
console.log(`Acessando index 1: ${meuArray[1]}`)

console. log('Inserindo novo dado no index 5')
meuArray[5] = 6
console.log(meuArray) 

console.log('Adicionando mais valores no array')
meuArray.push(7, 8, 9, null)
console.log(meuArray)

console.log('Deletando elementos do array')
meuArray.pop()
delete meuArray[7]
console.log(meuArray)
}

console.log('Objetos')
const prod1 = {}
prod1.nome = 'Celular'
prod1.preco = 5000.00
console.log(prod1)


console.log('Outra forma de se criar um objeto')

const prod2 = {
    nome: 'Tenis',
    preco: 500.00
}
console.log(prod2)


console.log('Funções')



// Armazendado uma função em uma variável
const imprirSoma = function (a, b){
    console.log(a + b)
}
imprirSoma(2, 4)


//Armazena uma função arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(5, 5))


//Função arrow com return implícito
const subitracao = (a, b) => a - b
console.log(subitracao(10, 5))


//Diferenças entre var e let
//var são acessadas em dois escopos, no window(global) ou no escopo de função

{
    {
        {
            var valorx = 10

        }
    }
}
// acessível no escopo de bloco de forma global
console.log(valorx)

var valorz = 1
{
    var valorz = 2
    console.log('Dentro = ', valorz)
}
console.log('Fora = ', valorz)


// O let é melhor de se utilizar, pois ele pode ser utilizado somente em escopo de bloco
console.log('Uso do let')
{
    let valorz = 10
    console.log('Dentro do let = ', valorz)
}
console.log('fora do let = ', valorz)

//Quando se utilizar um loop e a variável do escopo declara for do tipo let, ela não poderá ser utilizada
// fora desse escopo.

for (let i = 0; i <= 10; i++){
    console.log(i)
}
//chamando o valor de i fora do escopo da função
//console.log(i)// retorna erro


for (var j = 0; j <= 10; j++){
    console.log(j)
}
//Variável j declada como var pode ser acessada fora do escopo do loop
console.log('j =',j)



//Pelo fato do let respeitar os valores é possível fazer acessos as posições do array, pois ele armazenou cada valor de i
// de sua interão a determinado index do array.
const func = []

for(let i = 0; i <= 10; i++ ){
    func.push(function(){
        console.log(i)
    })
}

func[2]()
func[8]()



//Se tentarmos fazer o memso utilizando o var, todos os index do array valerão 10 no final
const func2 = []

for(var i = 0; i <= 10; i++ ){
    func2.push(function(){
        console.log(i)
    })
}

func2[2]()
func2[8]()

//Criando e instanciado funções. Com a notação ponto e this, pode se criar atribudos ao objeto ou funcções
function Obj(nome){
    this.nome = nome
    this.exec = function(){
        console.log('Print de uma função que pode ser tilizada por objetos instanciados se utilizando do this')
    }
}

const obj1 = new Obj('Mesa')
const obj2 = new Obj('Carro')
console.log(obj1.nome)
console.log(obj2.nome)
obj1.exec()


//Recurso destruct, recurso utilizado para estrair dados de valores de objetos
{
    const pessoa = {
        nome: 'Alice',
        idade: 8,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 1000
        }
    }

    console.log('Acesso com destruct')

    //Extrai os campos nome e idade do objeto pessoa
    const { nome, idade } = pessoa
    console.log(nome, idade)

    //Extrai os campos nome e idade do objeto pessoa mas renomeando os atributos para n e i
    const {nome: n, idade: i} = pessoa
    console.log(n, i)

    //Extraido atributos mas passando para eles valores default, buscando por atributos não existentes
    const {mideName, lastName = true} = pessoa
    console.log(mideName, lastName)

    //Extraindo valores de atributos do tipo objeto dentro de objetos
    const {endereco: {logradouro, numero, cep = 000} } = pessoa
    console.log(logradouro, numero, cep)

}



{

//Verificação de igualdade entre valores

console.log('1' == 1)

const d1 = new Date(0)
const d2 = new Date(0)

console.log(d1 == d2)//dará falso, pois nesse caso serão comparados os endereços de memória
console.log(d2 === d2)//*** */

console.log(d1.getTime() === d2.getTime())//Dará verdadeiro, pois seração comparados os dados
}

{

    //Operadores unários
    let num1 = 1
    let num2 = 2

    num1++
    console.log(num1)

    --num2
    console.log(num2)


}

{

    // Operadores ternários

    const resultado = nota => nota >=7 ? 'Aprovado' : 'Reprovado'

    const resultado2 = valor => valor == 'admin' ? 'Bem vindo Admin' : `Logue como admin! ${valor}`

    console.log(resultado2('kennedy'))



}

{
//Teste de runTime
    let var1 = 123
    var var2 = 456
    var3 = 890

    console.log(global.var1)
    console.log(global.var2)
    console.log(global.var3)

    console.log(var1, var2)

}

{
//Try Catch

    function trataErro(e){

        erro  = {
                nome: e.name,
                msg: e.message,
                date: new Date
            }
        throw(`Erro gerado: ${erro.msg}`)
            
    }

    function imprimeUppercase(obj){
        try{
            console.log(obj.nome.toUpperCase())
        }catch (e){
            trataErro(e)
        }
    }

    function imprimeSplit(obj){
        console.log(obj.nome.split(' '))
    }

    const obj = {
        name: 'Kennedy Alves'
    }

    imprimeUppercase(obj)
    imprimeSplit(obj)


}


{

    const imprimeResult =  function(valor){
        if(valor >= 7){
            console.log('Aprovado')
        }else{
            console.log('reprovado')
        }
    }


    imprimeResult(8)


}

{
    // Função para verificar range de valor, ex uma valor entre 8(inicio) e 10(fim)
    Number.prototype.entre = function(inicio, fim){
        return this >= inicio && this <= fim
    }

    const validaResultado =  function(nota){
        if(nota.entre(9, 10)){
            console.log('Quadro de honra')
        }else if(nota.entre(7, 8)){
            console.log('Passou normal')
        }else{
            console.log('Recuperação')
        }
    }

    validaResultado(9)


}


{

    const validaResultado2 = function(valor){
        if(valor >= 9){
            console.log('Quadro de honra')
        }else if(valor >= 7 && valor <= 8){
            console.log('Aprovado')
        }else{
            console.log('reprovado')
        }
    }

    validaResultado2(10)




}

{
//função de geração de número randômico

    function getInteiroAleatporio(min, max){
        const valor = Math.random() * (max - min) + min
        return Math.floor(valor)
    }

    let opcao = 0

    while(opcao != -1){
        opcao = getInteiroAleatporio(-1, 100000)
        console.log(`Opção escolhida ${opcao}`)
    }
    console.log('Até logo..')




}

{

//for/in

    const lista = [1, 2, 5, 6, 8 ]

    for(let i in lista){
        console.log(lista[i])
    }



    const pessoa = {
        nome: 'Alice',
        sobrenome: 'Alves',
        idade: 10,
        peso: 40

    }
//Navegar entre os atributus de um objeto
//Atributo recebe q quantidade de atritutos e seus nomes passado por pessoa
//pesso[atributo] pega o dado em si do atributo
    for(let atributo in pessoa){
        console.log(`${atributo} = ${pessoa[atributo]}`)
    }
}

{
//Criando rótulos para loops for
const lista = [1, 2, 5, 6, 8, 9, 10, 11, 12 ]
externo: for(i in lista){
    for(j in lista){
        if(i == 2 && j == 3){
            break externo
        }
        console.log(`Par = ${i} - ${j}`)
    }
}
console.log('fim')



}

