let css = document.querySelector("h3"),
    color1 = document.querySelector(".color1"),
    color2 = document.querySelector(".color2"),
    site = document.querySelector(".site"),
    btn = document.querySelector(".btn");

let backgroundGenerate = () => {
    site.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = site.style.background + ";"
}

const randomHex  = () => {
    return '#' + ("000000" + Math.random().toString(16).slice(2, 8)).slice(-6);
}

backgroundGenerate();

btn.addEventListener("click", function(){
    color1.value = randomHex();
    color2.value = randomHex();
    backgroundGenerate()
})

color1.addEventListener("input", backgroundGenerate)
color2.addEventListener("input", backgroundGenerate)