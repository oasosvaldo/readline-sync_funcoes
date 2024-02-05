/* Criar um algoritmo que calcule o valor do produto
mediante a forma de pagamento do cliente usando funções.
Ex:
1- A vista no debito - desconto de 10%
2- A vista dinheiro ou pix - desconto de 15%
3- Em 2X - sem juros
4- Acima de 2X - juros de 10%
*/

function aplicarDesconto(preco, desconto) {
    return preco - (preco * (desconto / 100))
}

function aplicarJuros(preco, juros) {
    return preco + (preco * (juros / 100))
}



var readlinesync = require('readline-sync')
var precoEtiqueta = parseFloat(readlinesync.question('Valor da etiqueta: '))
var formaDePagamento = parseInt(readlinesync.question('Forma de pagamento: '))

if (formaDePagamento === 1) {    
    preco = (aplicarDesconto(precoEtiqueta, 10))
    console.log(preco)
} else if (formaDePagamento === 2) {
    preco = (aplicarDesconto(precoEtiqueta, 15))
    console.log(preco)
}else if (formaDePagamento === 3) {
    console.log(preco)
} else if (formaDePagamento === 4) {
    preco = (aplicarJuros(precoEtiqueta, 10))
    console.log(preco)
} else {
    console.log('Forma de pagamento invalida')
}