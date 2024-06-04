function verificarSenha() {
    let senha = document.getElementById("senha").value;
    const senhaCerta = "senhafoda";
    const lamp = document.getElementById("apagada");
    const resultado = document.getElementById("resultado");

    if (senha === senhaCerta) {
        lamp.src = "img/lamp-on.png";
        resultado.innerHTML = "Senha correta! Bem-vindo ao site das Forças Armadas dos Estados Unidos, seja bem-vindo Sr.Presidente!";
        document.body.style.backgroundColor = "white";
        resultado.classList.add("check");
    } else {
        lamp.src = "img/lamp-off.png";
        document.body.style.backgroundColor = "black";
        resultado.innerHTML = "A senha não coincide. Por favor, tente novamente!";
        resultado.classList.remove("check");
    }
}