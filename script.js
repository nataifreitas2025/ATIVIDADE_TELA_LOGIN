function entrarPagina(){
    var cpf_usuario, senha_usuario;

    cpf_usuario = document.getElementById('inpUsuario').value;
    senha_usuario = document.getElementById('inpSenha').value;

    if (cpf_usuario === "00000000000" && senha_usuario === "123456"){
        alert("Acesso liberado!");
        window.location.href = "aluno.html";

    }

    else{

        alert("Usuario e senha incorretos! <br>")
    }

















}