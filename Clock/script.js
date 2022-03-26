function time(){
        const res = document.querySelector("h1#res")
        let hora = String(new Date().getHours());
        let min = String(new Date().getMinutes());
        let sec = String(new Date().getSeconds());
        if (hora.length == 1) hora = "0"+ hora;
        if (min.length == 1) min = "0"+ min;
        if (sec.length == 1) sec = "0" + sec;
        if (run) {res.innerHTML = `${hora}:${min}:${sec}`}
  }

  function state(){
        const button = document.querySelector("div#state")
        if (button.innerHTML == "Stop"){
            button.innerHTML = "Resume"
            button.style = "background-color: rgba(104, 236, 43, 0.815)"
            run = false
        } else {
            button.innerHTML = "Stop"
            button.style = "background-color: rgba(236, 43, 43, 0.815)"
            run = true
        }
  }

let run = true
setInterval(time, 100)