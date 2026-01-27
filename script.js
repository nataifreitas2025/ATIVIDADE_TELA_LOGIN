function entrarPagina(){
    var cpf_usuario, senha_usuario;

    var tipoUsuario = "aluno";

    cpf_usuario = document.getElementById('inpUsuario').value;
    senha_usuario = document.getElementById('inpSenha').value;

    if (cpf_usuario === "00000000000" && senha_usuario === "123456"){
        alert("Acesso liberado!");
        window.location.href = "aluno.html";

    }

    else{

        alert("Usuario e senha incorretos! <br>")
    
    }

    function selecionarTipo(tipo, botao) {
        tipoUsuario = tipo;
      
        document.querySelectorAll('.btn-tipo').forEach(btn => {
          btn.classList.remove('ativo');
        });
      
        botao.classList.add('ativo');
      
        console.log("Tipo selecionado:", tipoUsuario);
    }

















}