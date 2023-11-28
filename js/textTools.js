let iptTextarea = document.querySelector(".ipt-text > textarea");
let outText = document.querySelector(".out-text");
let btnConvert = document.querySelector(".btn-convert");

function toLowerCase(){
    let text = iptTextarea.value
    outText.textContent = text.toLowerCase()
    
}

btnConvert.addEventListener('click', toLowerCase)

