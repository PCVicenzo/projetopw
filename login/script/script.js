function logar(){
    var login = [];
    login.push(document.getElementById("usuariologin").value)
    login.push(document.getElementById("senhalogin").value)
    for(var i = 0; i < login.length; i++){
        if(login[i] == ""){
            var erro = document.getElementById("usuariologin");
            erro.classList.remove("estilologin");
            erro.classList.add("estilologinerro");
            var erro = document.getElementById("senhalogin");
            erro.classList.remove("estilologin");
            erro.classList.add("estilologinerro");
            alert("Os dados foram inseridos incorretamente!!!")
            return false
        }
    }
    var acerto = document.getElementById("usuariologin");
    acerto.classList.remove("estilologin");
    acerto.classList.add("estilologinacerto");
    var acerto = document.getElementById("senhalogin");
    acerto.classList.remove("estilologin");
    acerto.classList.add("estilologinacerto");
    alert("Login realizado com sucesso!")
    console.log(login)
}