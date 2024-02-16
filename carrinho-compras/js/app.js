let total = 0;
let totalProduto = 0;
limpar();


function adicionar(){
    //recuperar os valores do nome do produto, preço e quantidade
    let produto = document.getElementById("produto").value;
    let nomeProduto = produto.split('-')[0]; //separar a variável produto
    let valorUnitario = produto.split('R$')[1];//[1] porque é o que vai depois do cifrão
    let quantidade = document.getElementById("quantidade").value;

   
    //calcular o preço do subtotal
    if(quantidade.value != 0){
       totalProduto = valorUnitario * quantidade;
    }
    
    if(quantidade == 0){
      alert('Insira um valor em quantidade');
      return;
    }

    //adicionar no carrinho
    let listaProdutos = document.getElementById("lista-produtos");
    listaProdutos.innerHTML = listaProdutos.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorUnitario}</span>
  </section>`;

    //calcular custo total
    total = totalProduto + total;
    let valorTotal = document.getElementById("valor-total");
    valorTotal.textContent = `R$${total}`;

    document.getElementById('quantidade').value = '';
  
}

function limpar(){
  document.getElementById("lista-produtos").innerHTML = '';
  document.getElementById("valor-total").textContent = 'R$ 0';

}