let boxes = document.querySelectorAll(".gallery__box");
let animationNames = ["from-top","from-bottom","from-left","from-right"];

function assignAnimation() {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].classList.add(animationNames[Math.floor(Math.random()*4)]);
    }
}

function assignOrder() {
    let orders = [];
    for (let i = 0; i < boxes.length; i++) {
        let randomNumber = Math.ceil(Math.random()*(boxes.length));
        while (orders.includes(randomNumber)) {
            randomNumber = Math.ceil(Math.random()*(boxes.length));
        }
        orders[i] = randomNumber;
        boxes[i].style.order = orders[i].toString();
    }
}

assignOrder();
assignAnimation();