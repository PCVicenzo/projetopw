window.onload = function(){
    MontarCarrinho();
}  


function MontarCarrinho(){
    var caixa = JSON.parse(window.localStorage.getItem("carrinho"));

    document.getElementById("externa").innerHTML = "";

    if(caixa != null){
        for(var i = 0; i < caixa.length; i++){
        var conteudo = ""
        conteudo += '<div class="cards">';
        conteudo += '<div class="imagem">';
        conteudo += '<img src="CSS/' + caixa[i][2] + '"/>';
        conteudo += '</div>';
        conteudo += '<div class="detalhes">';
        conteudo += '<b><p id="det">Produto Adicionado</p> <p>'+caixa[i][1]+'</b></p>';
        conteudo += '</div>';
        conteudo += '<div class="unidade">';
        conteudo += '<b><p>Unidades: '+caixa[i][4]+' Un.</b></p>';
        conteudo += '</div>';
        conteudo += '<div class="preco">';
        conteudo += '<b><p>Preço: R$ '+caixa[i][5]+'</b></p>';
        conteudo += '</div>';
        conteudo += '<div class="total">'
        conteudo += '<center><b><p>TOTAL</p></b></center>';
        conteudo += '</div>'
        conteudo += '<div class="valortotal">';
        conteudo += '<center> R$ '+caixa[i][5]*caixa[i][4]+'</center>';
        conteudo += '</div>'
        conteudo += '</div>'
        document.getElementById("externa").innerHTML += conteudo;
        }
        conteudo = ""
        conteudo += '<div class="saida">'
        conteudo += '<button type="button" id="voltarmenu" onclick="volta()"> Voltar </button>'
        conteudo += '<img src="CSS/dracoins.png" id="logofinal" />'
        conteudo += '<button type="button" id="finalizacompra" onclick="compra()"> Finalizar Compra</button>'
        conteudo += '</div>'
        document.getElementById("externa").innerHTML += conteudo;
    }

else{
    conteudo  = ""
    conteudo += '<div class="cardsvazio">';
    conteudo += '<div class="mensagem">';
    conteudo += '<b><p> Seu carrinho está vazio. Clique no botão adicionar itens abaixo para consultar nossos produtos!</p></b>';
    conteudo += '</div>';
    conteudo += '<div class="sad">';
    conteudo += '<img src="CSS/sad.jfif"/> <br>';
    conteudo += '</div>';
    conteudo += '<button type="button" id="maisprodt" onclick="retorno()"> Adicionar Produtos </button>'
    conteudo += '</div>';
    conteudo += '<div class="saida">'
    conteudo += '<button type="button" id="voltarmenu" onclick="volta()"> Voltar </button>'
    conteudo += '<img src="CSS/dracoins.png" id="logofinal" />'
    conteudo += '<button type="button" id="finalizacompra" onclick="compra()"> Finalizar Compra</button>'
    conteudo += '</div>'
    document.getElementById("externa").innerHTML += conteudo;
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
        localStorage.clear()
        location.reload()
    }
    else{
        alert("Sinto muito, o seu carrinho está vazio. Por favor, clique em Adicionar itens e confira nossos produtos! ")
    }
}