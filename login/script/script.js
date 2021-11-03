function logar(){
    var login = [];
    login.push(document.getElementById("usuariologin").value)
    login.push(document.getElementById("senhalogin").value)
    for(var i = 0; i < login.length; i++){
        if(login[i] == ""){
            alert("Os dados foram inseridos incorretamente!!!")
            return false
        }
    }
    alert("Login realizado com sucesso!")
    console.log(login)
}