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
            alert("Preencha todos os dados!!!")
            return false
        }
    }
    alert("Dados gravados com sucesso!")
    console.log(preenche)
}