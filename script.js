let notas = document.getElementsByTagName("li")
let span = document.getElementById("span")
let valor = ""
Array.from(notas).forEach(i=>{
    i.addEventListener("click", i => {   
        for(nota of notas){
            nota.style.backgroundColor = "hsl(213, 21%, 25%)"
        }     
        valor = i.target.value
        i.target.style.backgroundColor = "hsl(25, 97%, 53%)"
        span.innerText = valor
    })
})
document.querySelector("button").addEventListener("click", ()=>{
    if(valor == ""){
        alert("Insira uma nota")
    }else{
        document.getElementById("containerOne").style.display = "none"
    document.getElementById("containerTwo").style.display = "inline"
    }    
})