let horas = document.querySelector("#horas")
        let minutos = document.querySelector("#minutos")
        let segundos = document.querySelector("#segundos")

        setInterval(function time(){
            let data = new Date()
            let h = data.getHours()
            let m = data.getMinutes()
            let s = data.getSeconds()

            if(h < 10){
                h = "0" + h
            }
            if(m < 10){
                m = "0" + m
            }
            if(s < 10){
                s = "0" + s 
            }
            

            horas.textContent = h + " Horas"
            minutos.textContent = m + " minutos"
            segundos.textContent = s + " segundos"

            if (h == 1 ){
                horas.textContent = h + " Hora"
            }
            if ( m == 1){
                minutos.textContent = m + " minuto"
            }
            if ( s == 1){
                segundos.textContent = s + " segundo"
            }

            
            if(h >= 0 && h < 6){
                let lamp = document.querySelector("#img").src = "img/madrugada.png"
            } else if ( h >=6 && h < 12){
                let lamp = document.querySelector("#img").src = "img/dia.png"
            } else if ( h >= 12 && h < 18 ){
                let lamp = document.querySelector("#img").src = "img/tardezinha.png"
            } else{
                let lamp = document.querySelector("#img").src = "img/noite2.png"
            }
        })