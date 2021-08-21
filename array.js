{
    const aprovado = ['Bia', 'Grazy', 'Paulo', 'Keila']
    console.log(aprovado)
    aprovado.push('Khezia', 'Doriel')
    console.log(aprovado)


    //Deletentando campos de array

    delete aprovado[3]
    console.log(aprovado)

    const aprovado2 = ['Bia', 'Grazy', 'Paulo', 'Keila','Khezia', 'Doriel']

    //Função splice
    //Exclui elementos em determinadas posições reordenando os index do array e não deixando campos undefined
    //deixa o array reordenado

    //Primeiro parâmetro é o index de ponto de partida eo segundo até onde vai
    console.log(aprovado2.splice(1,1))//retorna qual elemento foi excluído
    console.log(aprovado2)// retorna a lista de elementos sem o elemento 1 e ordenada

    //Subtituindo elementos
    //Troca o elemento 1 e 2 pelas string 'Elemento1', 'Elemento2
    console.log(aprovado2.splice(1, 2, 'Elemento1', 'Elemento2'))
    console.log(aprovado2)

    //acrescenta apos o elemento 1 as strings 'Elemento3', 'Elemento4'
    aprovado2.splice(1, 0, 'Elemento3', 'Elemento4')
    console.log(aprovado2)

    aprovado2.pop()// remove o ultimo elemento do array
    console.log(aprovado2)
    
    aprovado2.push('Elemento5')// Aciona no final do array o elemento
    console.log(aprovado2)
    
    aprovado2.shift() //Remove o proveiro elemento
    console.log(aprovado2)
    
    aprovado2.unshift('Elemento0')//adiciona um elemento no início do array
    console.log(aprovado2)

    aprovado2.splice(3,1)//Removendo um único elemento que no caso é 3
    console.log(aprovado2)

    //Trazendo parte de uma a array para um novo array
    const aprovadosNovoArray = aprovado2.slice(1, 4)//Pega os elentos do index 1 ao 3, ele desconsidera o index 4
    console.log(aprovadosNovoArray)
   
}

{
    const aprovado2 = ['Bia', 'Grazy', 'Paulo', 'Keila','Khezia', 'Doriel']

    //Interagindo com com forEach em uma função collback do tipo arrow
    aprovado2.forEach((nomes, index) => console.log(index,nomes))

    const imprimeAprovados = (nome, index) => console.log(`${index + 1}º Lugar: ${nome}`)

    //Interagindo com elemento de um array com forEach passando uma função anônima arrow
    aprovado2.forEach(imprimeAprovados)
}

{
    const aprovado2 = ['Bia', 'Grazy', 'Paulo', 'Keila','Khezia', 'Doriel']

    const teste = {
            array:[]
            // forEach2(j){
            //     let j = this.array.length()
            //     for(let i = 0; i <= j; i++){
            //         return this.array[i]

            //     } 
            // }
        }

  
    teste.array = aprovado2
    console.log(teste.array)
    let j = teste.array.length()
    console.log(j)

}
{
    //Utilizando map
    //map é utilizado para tratar de alguma forma elementos de um array, testo o código abaixo com 
    // o foEach não funciona!!
    //Map gera um novo array tranformado
    //map não causa modificação no array atual

    const nums = [2,4,5,6,7,8]

    resultado = nums.map(function(e){
        return e * 2
    })

    console.log(resultado)


    //Olha a mágica do map
    // foram criadas tres funções arrows

    const soma = e => e + 10
    const triplo = e => e * 3
    const converteReal = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

    //Passmos cada função arrow arrow para um map encadeado. O resultudado de um map é alterado pelo outro
    const  resultado2 = nums.map(soma).map(triplo).map(converteReal)
    console.log(resultado2)

}
{

//Capturando valores JSON com o MAP!!
const carrinho = [
        '{ "nome": "Borracha", "preco": 2.54 }',
        '{ "nome": "Borracha", "preco": 2.54 }',
        '{ "nome": "Borracha", "preco": 2.54 }'
    
]

//função que recebe um parâmetros json como atributo e retorna esse Json como um objeto
const paraObj = json => JSON.parse(json)

//função que recebe um objeto como parâmetro e retorna um dos valores do atributo de um objeto
const pegavalor = produto => produto.preco

console.log(typeof(carrinho))


//O map recebe carrinho passando como parâmetro as duas funções criadas
//O map trata o objeto Json e executa as duas funções tendo como resultado final o preço de cada prodotudo
resultado = carrinho.map(paraObj).map(pegavalor)

console.log(resultado)


}

{
    //Filter utilizado para filtrar dados específicos de um array para outro

    const produtos = [
        {nome: 'Notebook', preco:2453, fragil: true},
        {nome: 'Ipad Pro', preco:4199, fragil: true},
        {nome: 'Copo de Vidro', preco:12.49, fragil: true},
        {nome: 'Copo de Plástico', preco:18.99, fragil: false}
    ]

    const produtosFrageis = produtos.filter(e => e.fragil).filter(e => e.preco < 1000)

    console.log(produtosFrageis)

    //Extraindo valores de atributos de objetos e armazendando em um novo array

    precos = produtos.map(e => e.preco).map(e => e - (0.10 * e).toFixed(2))
    console.log(precos)

}

{

    //reduce utilizado para acumular valores de objetos

    const produtos = [
        {nome: 'Notebook', preco:2453, fragil: true},
        {nome: 'Ipad Pro', preco:4199, fragil: true},
        {nome: 'Copo de Vidro', preco:12.49, fragil: true},
        {nome: 'Copo de Plástico', preco:18.99, fragil: false}
    ]
    //Caso no retorno da função arrow exista a passagem de um segundo parãmetro, por exempre  o numero número 10 abaixo, faz com o que o acumular inície com um valor 10, caso não seja passado nada ele inicia em 0 e vai acumulando os valores do própio objeto
    resultadoTotal = produtos.map(e => e.preco).reduce((acumulador, valorIdexAtual) => acumulador + valorIdexAtual, 10)

    console.log(resultadoTotal)
}

{

    //método concat, utilizado para utlizado para concatenar varios arrai em um

    const filhas = ['Maria', 'Madalena']
    const filhos = ['João', 'Alberto']

    console.log(filhas.concat(filhos))

}








