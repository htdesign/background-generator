let btn = document.querySelector(".btn");
let input = document.querySelector(".form-control");
let list = document.querySelector("ul");

const inputLength = () => {
    return input.value.length;
}

const createTask = () => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    list.appendChild(li);
    input.value = "";
}

btn.addEventListener("click", () => {
    if(inputLength() > 0) {
        createTask();
    }
})

input.addEventListener("keypress", (event) => {
    if(inputLength() > 0 && event.keyCode === 13) {
        createTask();
        event.preventDefault();
    } else if(inputLength() === 0 && event.keyCode === 13){
        event.preventDefault();
    }
})