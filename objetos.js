//Nova forma de se criar objetos usando o Object.create


{
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)
}

{
//Transformando JSON em objetos
const fromJSON = JSON.parse('{"Nome":"kennedy"}')
console.log(fromJSON.Nome)
}

{
//Caso o objeto seja do tipo const, ele não poder receber nenhuma atribuição direta, mas os seus atributos sim
//por exemplo pessoa.nome = "nome" essa atribuição funciona, já pessoa = {sobreNome: "Alves"} ja não fucionaria
//Objeto.freeze é um método que congela o objeto, ou seja, não permite atrubuições a nenhum atributo de um objeto

const pessoa = {
    nome: "Kennedy"
}
console.log(pessoa.nome)

//Após o freeze, todas atribuições para esse atributo serão ignoradas
Object.freeze(pessoa)

pessoa.nome = "João"

console.log(pessoa.nome)//Retorna Kennedy ainda.

delete pessoa.nome// Não permite nem a inserção dinâmica de novos atributos e nem a deleção dos atributos que ja existem e seus dados

//Criando um objeto freezer na sua consepção.
const pessoaCobstante = Object.freeze({
    nome: "João",
    sobrenome: "Silva"
})
console.log(pessoaCobstante)
}

{
//Passando variáveis como nome de atributo ou valor de atribudo de objetos

const nomeAttr = 'nota'
const ValorAttr = 7.9

const obj = {[nomeAttr]:ValorAttr}

console.log(obj)

}

{
//Getter and Setter

const sequencia = {

    _valor: 1, //Declaração de atributo privado

    
    get getValor() {

        return this._valor++

    },
    
    set setValor(valor){

        if(valor > this._valor){

            this._valor = valor

        } 
    }
}

// chamada do método setValor passando parâmetro
sequencia.setValor = 1000

//chamada do método getValor
console.log(sequencia.getValor, sequencia.getValor)

sequencia.setValor = 900

console.log(sequencia.getValor)


}


//Principai funções para objetos


{

    const pessoa = {
        nome: 'Rebeca',
        idade: 2,
        peso: 15
    }

    console.log(Object.keys(pessoa))//Captura todas as chaves do objeto

    console.log(Object.values(pessoa))// Captura somente os valor do objeto

    console.log(Object.entries(pessoa))// Traforma as chaves e valores de objetos em valores de um array

    //([chave, valor] Exemplo de destruct de array, forma de extrair dados de um array.
    Object.entries(pessoa).forEach(([chave, valor]) => {

        console.log(`${chave}: ${valor}`)

    });

    //Criando novos atributos de um objeto e definindo propriedades específicas
    Object.defineProperties(pessoa, 'dataNacimento', {
        enumerable: true, //pode ser listado
        writable: false, //Propriedade poderá ser modificada?
        value: '01/01/2020'
    })
    {
        // concatenando objetos
        const dest = {a: 1}
        const orig1 = {b: 2}
        const orig2 = {c: 6, a: 5}
        //OBS: os dados da concatenação devem ser amazenado em um objeto novo
        const objfull = Object.assign(dest, orig1, orig2)
        console.log(objfull)

        //congelando Objetos
        Object.freeze(objfull)

        objfull.c = 10

        console.log(objfull.c)
    }


{

    //Herança
    //Herança no Javascript se paseia em prototype, que são objetos pais de objetos filhos
    //O objeto pai de todos é o Object.prototype, todos os objetos são filhos dele

    const pessoa = {
        nome: 'Kennedy',
        idade: 27
    }

    console.log(pessoa.__proto__ === Object.prototype)//nome do objeto .__proto__ busca saber qual é o objeto pai


    //Cadeia de protótipos (prototype chain)
    //declarando ligação entre objetos
    const avo = { attr1: "0"}
    const pai = {__proto__: avo, att2: "1", att3: "2"}
    const filho = {__proto__:pai, att4: "3"}

    console.log(filho.attr1)


    const carro = {

        velocidadeAtual: 0,
        velocidadeMaxima: 200,

        acelera(delta){
            if(this.velocidadeAtual + delta <= this.velocidadeMaxima){
                this.velocidadeAtual += delta
            }else{
                this.velocidadeAtual = this.velocidadeAtual
            }
        },
    
        
        getVelocidadeAtual() {
            return this.velocidadeAtual
        }
    }


    const ferrari = {
        velocidadeMaxima: 290,
        modelo: 'F40',
        getVelocidadeAtual(){
           return `${this.modelo}: ${super.getVelocidadeAtual()}`
        }
    }

    //Definindo a relação com a função Object.setPrototype(objetoFilho, ObjetoPai)
    Object.setPrototypeOf(ferrari, carro)

    ferrari.acelera(200)
    console.log(ferrari.getVelocidadeAtual())

    
    
}

{
    //Herança
    //outras forma de  criar relação entrei prototypes com atribuições de regras
    const pai = {nome: 'Kennedy', corCabelo: "castanho claro"}

    const filha = Object.create(pai)

    filha.nome = 'Laura'
    filha.corCabelo = 'Castanho Escuro'

    console.log(`${filha.nome} cabelo ${filha.corCabelo}`)


    const filho = Object.create(pai, {

        nome:{value: 'Uriel', writable: false, enumerable:true}

    })

    console.log(`${filho.nome} cabelo ${filho.corCabelo}`)

    for(let key in filha){
        //Utilizou-se if ternário mais a função hasOwnproperty que verifica quais são os atributos do objeto em si, não os do pai
        filha.hasOwnProperty(key) ? 
            console.log(key) : console.log(`Por herança ${corCabelo}`)
    }
}



{

    //Convertendo obj em json

    const obj = {a: 1, b: 2, c: 3, soma() {return a + b +c}}

    console.log(JSON.stringify(obj))


    const json = '{"result":true, "count":42}';

    const obj2 = JSON.parse(json)

    console.log(obj2)
}

{

//Classe

class Lancamento {

    constructor(nome = 'Genérico', valor = 0){
        this.nome = nome
        this.valor = valor
    }

}
class CicloFinanceiro {

    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }
    //... tonar a aceitação de parâmetros variáveis
    addLancamento(...paramLancamentos) {

        paramLancamentos.forEach(this.lancamentos.push(paramLancamentos))

    }

    sumario(){
        let valorCOnsolidado = 0
        this.lancamentos.forEach(l => {
            valorCOnsolidado += l.valor
        })
        return valorCOnsolidado
    }

   }


const salario = new Lancamento('Salario', 45000)
const contasApagar = new Lancamento('luz', -10000)

const contas =  new CicloFinanceiro(6, 2021)
contas.addLancamento(salario, contasApagar)

console.log(sumario())



}



{
    class Pessoa{
        constructor(nome, sobrenome, idade){
            this.nome = nome
            this.sobrenome = sobrenome
            this.idade = idade
            }

        }
        
        
    

    class Aluno extends Pessoa{
        constructor(nome, sobrenome, idade, matricula, nota1, nota2, nota3){
            super(nome, sobrenome, idade)
            this.matricula = matricula
            this.nota1 = nota1
            this.nota2 = nota2
            this.nota3 = nota3
            
        }

        getMediafinal(){

            return (this.nota1 + this.nota2 + this.nota3) / 3

        }
        
        
    }

    const obj = new Aluno("Kennedy", "Alves", 27, '12356', 10,8,7)
    console.log(obj)
    console.log(obj.getMediafinal())

}






}