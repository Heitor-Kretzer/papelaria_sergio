//Nomes: Douglas Pierri Beccari e Heitor Kretzer 

var produto = ['caneta', 'lápis', 'borracha', 'régua', 'caderno', 'lapiseira']
var preco = [5.25, 2.99, 3.99, 5.50, 15.90, 22.59]
var qtdEstoque = [27, 53, 60, 33, 28, 15]

function compras(qtdComprada, produtoComprado){
    indiceProduto = produto.indexOf(produtoComprado)
    qtdEstoque[indiceProduto] = qtdEstoque[indiceProduto] + qtdComprada
    console.log(qtdEstoque[indiceProduto])
}

function vendas(qtdVendida, produtoVendido){
    indiceProduto = produto.indexOf(produtoVendido)
    qtdEstoque[indiceProduto] = qtdEstoque[indiceProduto] - qtdVendida
    console.log(qtdEstoque[indiceProduto])
}

/*function novaMercadoria(nomeProduto, precoNovo, qtd){
    var posicao = produto.length //length é para dizer quantos materias tem e adicionar no final 
    produto[posicao] = nomeProduto
    preco[posicao] = precoNovo
    qtdEstoque[posicao] = qtd
    if(nomeProduto === produto){
        return("Produto já existente")
    }
}*/

let nomeProduto = document.getElementById("novaMercadoria").value

function novaMercadoria(nomeProduto, precoNovo, qtd){
    var posicao = produto.push(nomeProduto) //.push ao invés de .length pois o push já envia direto para o fim do array!!!
    produto[posicao] = nomeProduto
    preco[posicao] = precoNovo
    qtdEstoque[posicao] = qtd
    let nomeProduto = nomeProduto === produto? alert("Produto já existente, não pode ser cadastrado novamente") : ("Produto cadastrado")
    
    /*if(nomeProduto === produto){
        return("Produto já existente")
    }
    */

}

function Verificaestoque(){
    let qtdEstoque = qtdVendida <= qtdEstoque? alert("Possui quantidade suficiente" + qntVendida) : ("Não possui quantidade em estoque")  
    
    /*if(qtdEstoque >= qtdVendida){
        return ("Possui suficiente" + qtdVendida)
    }
    else{
        return ("Não possui suficiente")
    }*/   

}