function preenchido(){
    var preenche = [];
    preenche.push(document.getElementById("inputcadastro1").value)
    preenche.push(document.getElementById("inputcadastro2").value)
    preenche.push(document.getElementById("inputcadastro3").value)
    preenche.push(document.getElementById("inputcadastro4").value)
    preenche.push(document.getElementById("inputcadastro5").value)
    preenche.push(document.getElementById("inputcadastro6").value)
    for(var i = 0; i < preenche.length; i++){
        if(preenche[i] == ""){
            alert("Preencha todos os dados!!!");
            var erro = document.getElementById("inputcadastro1");
            erro.classList.remove("estilocadastropadrao");
            erro.classList.add("estilocadastroerro");
            var erro = document.getElementById("inputcadastro2");
            erro.classList.remove("estilocadastropadrao");
            erro.classList.add("estilocadastroerro");
            var erro = document.getElementById("inputcadastro3");
            erro.classList.remove("estilocadastropadrao");
            erro.classList.add("estilocadastroerro");
            var erro = document.getElementById("inputcadastro4");
            erro.classList.remove("estilocadastropadrao");
            erro.classList.add("estilocadastroerro");
            var erro = document.getElementById("inputcadastro5");
            erro.classList.remove("estilocadastropadrao");
            erro.classList.add("estilocadastroerro");
            var erro = document.getElementById("inputcadastro6");
            erro.classList.remove("estilocadastropadrao");
            erro.classList.add("estilocadastroerro");
            return false
        }
    }
    alert("Dados cadastrados com sucesso! Pode retornar agora.")
    var acerto = document.getElementById("inputcadastro1");
    acerto.classList.remove("estilocadastropadrao");
    acerto.classList.add("estilocadastroacerto");
    var acerto = document.getElementById("inputcadastro2");
    acerto.classList.remove("estilocadastropadrao");
    acerto.classList.add("estilocadastroacerto");
    var acerto = document.getElementById("inputcadastro3");
    acerto.classList.remove("estilocadastropadrao");
    acerto.classList.add("estilocadastroacerto");
    var acerto = document.getElementById("inputcadastro4");
    acerto.classList.remove("estilocadastropadrao");
    acerto.classList.add("estilocadastroacerto");
    var acerto = document.getElementById("inputcadastro5");
    acerto.classList.remove("estilocadastropadrao");
    acerto.classList.add("estilocadastroacerto");
    var acerto = document.getElementById("inputcadastro6");
    acerto.classList.remove("estilocadastropadrao");
    acerto.classList.add("estilocadastroacerto");
    console.log(preenche);
}