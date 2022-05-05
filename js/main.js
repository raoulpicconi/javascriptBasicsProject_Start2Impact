const resetButton = document.getElementById("resetButton");
const goToButton = document.getElementById("goToButton");
const counterBody = document.querySelector(".main-container-body");
let counter = 0;

const valueDisplay = document.createElement("div");
valueDisplay.className = "value-box";
valueDisplay.innerHTML = counter;
counterBody.append(valueDisplay);

const lessButton = document.createElement("button");
lessButton.className = "less";
lessButton.innerHTML = "-";
counterBody.append(lessButton);

const plusButton = document.createElement("button");
plusButton.className = "plus";
plusButton.innerHTML = "+";
counterBody.append(plusButton);

lessButton.onclick = () => {
    counter--;
    valueDisplay.innerHTML = counter;
};

plusButton.onclick = () => {
    counter++;
    valueDisplay.innerHTML = counter;
};

resetButton.onclick = () => {
    if (counter == 0) {
        alert("Counter is already set to zero!");
    } else {
        counter = 0;
        valueDisplay.innerHTML = counter;
    }
};

goToButton.onclick = () => {
    counter = prompt("Enter the number you want to go to:");
    if (Number(counter)) {
        valueDisplay.innerHTML = counter;
    } else {
        alert("Input must be a number, try again!");
    }
    
}
