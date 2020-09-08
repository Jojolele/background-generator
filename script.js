const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const body = document.getElementById('gradient');
const css = document.querySelector('h3');
const randBtn = document.getElementById('randomBtn');

function setGradient() {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value}`

    css.textContent = body.style.background + ";";
}

randomColor = () => {
    let randColor1 = Math.floor(Math.random()*16777215).toString(16);
    let randColor2 = Math.floor(Math.random()*16777215).toString(16);

    body.style.background = `linear-gradient(to right, #${randColor1}, #${randColor2}`
    css.textContent = body.style.background + ";";
}

setGradient();
color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);
randBtn.addEventListener('click', randomColor);


