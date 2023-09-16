

const key = "fde3ad91d843949b26258078a5f1ebfd";



function  colocarDadosNaTela(dados){
console.log(dados)
    
document.querySelector(".cidade").innerHTML =  "tempo em" + dados.name
document.querySelector(".temperatura").innerHTML = Math.floor (dados.main.temp) + "ºC"
document.querySelector(".texto-tempo").innerHTML = dados.weather[0].description
document.querySelector(".umidade").innerHTML = dados.main.humidity + "%" 
document.querySelector(".img-do-tempo").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png` 


}
 

async function buscarCidade(cidade){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt&units=metric`).then(resposta => resposta.json())

    colocarDadosNaTela(dados)
}

function buttonClick(){
    const cidade = document.querySelector(".input-cidade").value;
    
    buscarCidade(cidade)
   
}