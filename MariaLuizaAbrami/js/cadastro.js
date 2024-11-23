function Enviar() {
    var pessoa = {
        primeiroNome:"",
        ultimoNome:"",
        email:"",
        celular:"",
        animal:"",
        especie:"",
        genero:"",
        mensagem:""
    }

    pessoa.primeiroNome = document.getElementById("primeiroNome").value;
    pessoa.ultimoNome = document.getElementById("ultimoNome").value;
    pessoa.email = document.getElementById("email").value;
    pessoa.celular = document.getElementById("celular").value;
    pessoa.animal = document.getElementById("animal").value;
    pessoa.especie = document.getElementById("especie").value;
    pessoa.mensagem = document.getElementById("mensagem").value;
    var generoSelecionado = document.querySelector('input[name="genero"]:checked');
    if (generoSelecionado) {
        pessoa.genero = generoSelecionado.value;
    }

    document.getElementById("primeiroNomeCad").innerHTML = pessoa.primeiroNome;
    document.getElementById("ultimoNomeCad").innerHTML = pessoa.ultimoNome;
    document.getElementById("emailCad").innerHTML = pessoa.email;
    document.getElementById("celularCad").innerHTML = pessoa.celular;
    document.getElementById("animalCad").innerHTML = pessoa.animal;
    document.getElementById("especieCad").innerHTML = pessoa.especie;
    document.getElementById("generoCad").innerHTML = pessoa.genero;
    document.getElementById("mensagemCad").innerHTML = pessoa.mensagem;
    document.getElementById("formCadastrado").innerHTML;
}