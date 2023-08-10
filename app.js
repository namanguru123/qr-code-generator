let btn = document.querySelector("button");
let input = document.querySelector("input");
let img = document.querySelector("img");


let value = input.value;

function gen(){
    img.setAttribute("src", `https://api.qrserver.com/v1/create-qr-code/?data=${input.value}&amp;size=100x100`)
    img.style.opacity = 1;
}


btn.addEventListener('click', gen);