function appendValue(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calculate() {
    let display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

const toggleButton = document.getElementById('darkModeToggle');
const body = document.body;
const calculator = document.querySelector('.calculator');
const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

toggleButton.addEventListener('change', () => {
    if (toggleButton.checked) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'dark') {
        toggleButton.checked = true;
        enableDarkMode();
    }
});

function enableDarkMode() {
    body.classList.add('dark-mode');
    calculator.classList.add('dark-mode');
    display.classList.add('dark-mode');
    buttons.forEach(button => {
        button.classList.add('dark-mode');
    });
    localStorage.setItem('theme', 'dark');
}

function disableDarkMode() {
    body.classList.remove('dark-mode');
    calculator.classList.remove('dark-mode');
    display.classList.remove('dark-mode');
    buttons.forEach(button => {
        button.classList.remove('dark-mode');
    });
    localStorage.setItem('theme', 'light');
}
