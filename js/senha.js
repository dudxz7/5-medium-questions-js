function senha(){
    let senha = document.getElementById("senha").value
    let senha2 = document.getElementById("confirmarsenha").value
    if(senha == senha2){
        document.querySelector("#resultado").innerHTML = "Cadastro realizado com sucesso!"
        document.querySelector("#resultado").classList = "check"
    } else{
        document.querySelector("#resultado").innerHTML = "As senhas não coincidem. Por favor, tente novamente!"
        document.querySelector("#resultado").classList.remove = "check"
        document.querySelector("#resultado").classList = "erro"
    }
    }