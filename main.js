function loggy() {
    console.log("params")
}


function load(params) {
    var teste = document.getElementsByTagName("button");    
teste.addEventListener("click",loggy, false)
}

document.addEventListener("DOMContentLod", load, false)

