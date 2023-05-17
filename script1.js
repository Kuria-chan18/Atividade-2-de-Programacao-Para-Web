class Produto {

    constructor() {
        this.id = 1;

        this.arrayProdutos = [];
    }

salvar() {
  let produto = this.lerDados();

  if(this.validaCampos(produto) == true) {
    this.adicionar(produto);
}

this.ListaTabela();

this.cancelar();
}

ListaTabela() {

    let tbody = document.getElementById('tbody')

    tbody.innerText = '';

    for(let i = 0; i < this.arrayProdutos.length; i++) {

        let tr = tbody.insertRow();
        let td_id = tr.insertCell();
        let td_produto = tr.insertCell();
        let td_valor = tr.insertCell();
        let td_quantidade = tr.insertCell();

        td_id.innerText = this.arrayProdutos[i].id;
        td_produto.innerText = this.arrayProdutos[i].nomeProduto;
        td_valor.innerText = this.arrayProdutos[i].preco;
        td_quantidade.innerText = this.arrayProdutos[i].quantidade
    }
}

adicionar(produto) {
    this.arrayProdutos.push(produto);
    
    this.id++;
}

lerDados() {

    let produto = {}

    produto.id = this.id;
   produto.nomeProduto = document.getElementById('produto').value;
   produto.preco = document.getElementById('preco').value;
   produto.quantidade = document.getElementById('quantidade').value;

    return produto;
}

validaCampos(produto) {

    let msg = '';

    if(produto.nomeProduto == '') {
        msg += '- Informe o Nome do Produto! \n';
    }

    if(produto.preco == '') {
        msg += '- Informe o Preço do Produto! \n';
    }

    if(produto.quantidade == '') {
        msg += '- Informe a Quantidade do Produto! \n';
    }

    if(msg != '') {
        alert(msg);
        return false
    }

    return true;
}


cancelar() {
    document.getElementById('produto').value = '';
    document.getElementById('preco').value = '';
    document.getElementById('quantidade').value = '';
}

}

let produto = new Produto();