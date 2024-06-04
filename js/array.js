let lista = [""]
        function adc(){
            lista.push(document.getElementById("list").value)
            document.getElementById("here").innerHTML = lista.join("<br> ~")
            document.getElementById("list").value = []
        }
        function remover(){
            lista.pop(document.getElementById("list").value)
            document.getElementById("here").innerHTML = lista.join("<br> ~")
            document.getElementById("list").value = []
        }