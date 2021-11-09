var listaProdutos = [[0, '<h2> R$40,00 - Crystal Coin </h2>', 'tibiacc.jfif', 'Crystal coins são as principais moedas de troca utilizadas no jogo, este pacote contém 200.', 0, 40 ], [1, '<h2> R$5,00 - Mana potion </h2>', 'potion.png', '1000 mana potions para auxiliar no seu combate!', 0, 5],
[2, '<h2> R$10,00 - Crystalline Armor </h2>', 'crystalline_armor.png', 'A poderosa Crystalline armor. <br> Arm:13, Ice Protec: +3%, Energy Protec: -3%', 0, 10], [3, '<h2> R$15,00 - Dragon Scale Mail </h2>', 'dragonscale.png', 'A grande armadura da família dos dragões! <br> Arm:15, Peso:114.00 oz.', 0, 15],
[4, '<h2> R$15,00 - Glacial Rod </h2>', 'rod.png', 'Uma varinha que permite congelar até as mais fortes tempestades. Alcance:4, Magic Level + 1.', 0, 15], [5, '<h2> R$100,00 - Draptor </h2>', 'draptor.png', 'Uma montaria lendária, apenas os mais bravos conseguem tê-la. Speed + 10.', 0, 100],
[6, '<h2> R$20,00 - Spellbook of Arcana</h2>', 'livro.png', 'O livro do grande mágico Ferumbras, fornece grande quantidade de poder. Magic level + 4.', 0, 20], [7, '<h2> R$1,20 - Amulet of Loss</h2>', 'amuleto.png', 'O único artefato capaz de garantir sua proteção após a morte.', 0, 1.20],
[8, '<h2> R$10,00 - Soft Boots </h2>', 'soft.png', 'Uma bota capaz de revigorar a saúde do usuário.', 0, 10]]

var carrinho = [];

window.onload = function(){
    MontarCardProdutos();
}

function MontarCardProdutos(){

    document.getElementById("divProdutos").innerHTML = "";

    for(var i = 0; i < listaProdutos.length; i++){
        var conteudo = ""
        conteudo += '<div class="cards">';
        conteudo += '<div class="div-imagem">';
        conteudo += listaProdutos[i][1];
        conteudo += '<img src="CSS/' + listaProdutos[i][2] + '"/>';
        conteudo += '</div>';
        conteudo += '<div class="div-descricao">';
        conteudo += listaProdutos[i][3];
        conteudo += '</div>';
        conteudo += '<div class="div-botoes">';
        conteudo += '<button type="button" id="botaomenos" onclick="menos(' + listaProdutos[i][0] + ')"> - </button>';
        conteudo += '<button type="button" id="botaomais" onclick="mais(' + listaProdutos[i][0] + ')"> + </button>';
        conteudo += '</div>';
        conteudo += '<div class="div-botaocompra">';
        conteudo += '<button type="button" id="confirmar" onclick="comprar(' + listaProdutos[i][0] + ')"> Confirmar </button>';
        conteudo += '</div>';
        conteudo += '</div>';

        document.getElementById("divProdutos").innerHTML += conteudo;
        
    }

    var finalpagina = ""
    finalpagina += '<div class="saida">'
    finalpagina += '<button type="button" id="voltarmenu" onclick="location.href=\'../index.html\'"> Voltar </button>'
    finalpagina += '<img src="CSS/dracoins.png" id="logofinal" />'
    finalpagina += '<button type="button" id="ircarrinho" onclick="location.href=\'../carrinho/index.html\'"> Carrinho </button>'
    finalpagina += '</div>'
    document.getElementById("divProdutos").innerHTML += finalpagina;
}


function mais(id){
    var quantia = listaProdutos[id][4] += 1;
    alert('Você está adicionando no seu carrinho uma quantia de ' + quantia +' produto(s)')
}

function menos(id){
    if(listaProdutos[id][4] > 0){
        var quantia = listaProdutos[id][4] -= 1;
        alert('A quantia deste produto em seu carrinho é de: ' + quantia +' Un.')
    }
    else{
        alert('Este produto não está mais contido no carrinho')
    }
}

function comprar(id){
    alert('Adicionado com sucesso!')
    carrinho.push(listaProdutos[id])
    window.localStorage.setItem("carrinho", JSON.stringify(carrinho))
    MontarCardProdutos();
}