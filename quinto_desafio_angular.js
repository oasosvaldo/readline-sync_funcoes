/* Criar um algoritmo que calcule o valor do produto
mediante a forma de pagamento do cliente.
Ex:
1- A vista no debito - desconto de 10%
2- A vista dinheiro ou pix - desconto de 15%
3- Em 2X - sem juros
4- Acima de 2X - juros de 10%
*/
var readlinesync = require('readline-sync')
var preco = parseFloat(readlinesync.question('Preço da etiqueta: '))
var formaDePagamento = parseInt(readlinesync.question('Forma de pagamento: '))

if (formaDePagamento === 1) {    
    preco = (preco-(preco*0.10))
    console.log(preco)
} else if (formaDePagamento === 2) {
    preco = (preco-(preco*0.15))
    console.log(preco)
}else if (formaDePagamento === 3) {
    console.log(preco)
} else if (formaDePagamento === 4) {
    preco = (preco+(preco*0.10))
    console.log(preco)
} else {
    console.log('Forma de pagamento invalida')
}