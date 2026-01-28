var tipoUsuario = "aluno";

function entrarPagina() {
    var cpf_usuario, senha_usuario;

    cpf_usuario = document.getElementById('inpUsuario').value;
    senha_usuario = document.getElementById('inpSenha').value;

    if (cpf_usuario === "12345678900" && senha_usuario === "123") {

        alert("Acesso liberado!");

        if (tipoUsuario === "aluno") {
            window.location.href = "aluno.html";
        } else {
            window.location.href = "docente.html";
        }

    } else {
        alert("Usuário e senha incorretos!");
    }
}

function selecionarTipo(tipo, botao) {
    tipoUsuario = tipo;

    document.querySelectorAll('.btn-tipo').forEach(btn => {
        btn.classList.remove('ativo');
    });

    botao.classList.add('ativo');

    console.log("Tipo selecionado:", tipoUsuario);
}
