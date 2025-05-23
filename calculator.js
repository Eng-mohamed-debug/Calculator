const screen = document.querySelector('.screen');


function clearScreen() {
    screen.innerHTML = '';
}

function addToScreen(input) {
    screen.innerHTML += input;
}


function calculate() {
    try {
        screen.innerHTML = eval(screen.innerHTML);
    } catch {
        screen.innerHTML = 'Error';
    }
}

function backSpace() {
    screen.innerHTML = screen.innerHTML.substring(0, screen.innerHTML.length - 1);
}