"use strict";

const button = document.querySelector('#button');
const quote = document.querySelector('#quote');
const adviceId = document.querySelector('#advice-id');

button.addEventListener("click",event =>{
    renderAdvice();
})
renderAdvice();

async function renderAdvice(){
    let advice = await getData()
    quote.textContent = `"${advice.slip.advice}"`;
    adviceId.textContent = advice.slip.id;
}

async function getData(){
    try{
        let response = await fetch("https://api.adviceslip.com/advice");
        return await response.json()
    }catch{
        quote.textContent = "Couldn't connect to API"
    }
}