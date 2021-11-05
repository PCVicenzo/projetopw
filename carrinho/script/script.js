window.onload = function(){
    MontarCarrinho();
}  


function MontarCarrinho(){
    var caixa = JSON.parse(window.localStorage.getItem("carrinho"));

    document.getElementById("tabelaCarrinho").innerHTML = "";

    var conteudo = ""
    conteudo += '<table>';
    conteudo += '<tr>';
    conteudo += '<td>' + 'Imagem do produto' + '</td>';
    conteudo += '<td>' + 'Você está comprando' + '</td>';
    conteudo += '<td>' + 'Unidades' + '</td>';
    conteudo += '<td>' + 'Preço (R$)' + '</td>';
    conteudo += '<td>' + 'Total (R$)' + '</td>';
    conteudo += '</tr>';
    document.getElementById("tabelaCarrinho").innerHTML += conteudo;
    if(caixa != null){
        for(var i = 0; i < caixa.length; i++){
            conteudo = ""
            conteudo += '<tr>';
            conteudo += '<td>';
            conteudo += '<img src="CSS/' + caixa[i][2] + '"/>';
            conteudo += '</td>';
            conteudo += '<td>';
            conteudo += caixa[i][1];
            conteudo += '</td>';
            conteudo += '<td>';
            conteudo += caixa[i][4];
            conteudo += '</td>';
            conteudo += '<td>';
            conteudo += caixa[i][5];
            conteudo += '</td>';
            conteudo += '<td>';
            conteudo += caixa[i][5]*caixa[i][4];
            conteudo += '</td>';
            conteudo += '</tr>';
    }
    document.getElementById("tabelaCarrinho").innerHTML += conteudo;
}
else{
    conteudo  = ""
    conteudo += '<h2> Carrinho vazio!! <h2>';
    conteudo += '<img src="CSS/sad.jfif"/> <br>';
    conteudo += '<button type="button" id="volta" onclick="retorno()"> Adicionar itens </button>'
    document.getElementById("divCarrinhoVazio").innerHTML += conteudo;
 }
}


function retorno(){
    window.location.href = "../maisprodutos/index.html";
}

function volta(){
    window.location.href = "../telaprincipal/index.html";
}

function compra(){
    var caixa = JSON.parse(window.localStorage.getItem("carrinho"));
    if(caixa != null){
        alert("Produtos comprados com sucesso!! :D")
    }
    else{
        alert("Sinto muito, o seu carrinho está vazio. Por favor, clique em Adicionar itens e confira nossos produtos! ")
    }
}