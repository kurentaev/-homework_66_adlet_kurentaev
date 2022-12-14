// Task 1
const containers = document.querySelectorAll('.containerString')[0]

const first = document.getElementById('string-1')
const second = document.getElementById('string-2')
const third = document.getElementById('string-3')
const fourth = document.getElementById('string-4')
const fifth = document.getElementById('string-5')
const sixth = document.getElementById('string-6')

function firstTask() {
    containers.append(third, fifth)
    containers.append(second, sixth)
    containers.append(fourth, first)
}

// Task 2
function secondTask() {
    const elements = document.getElementsByClassName('element');
    for (let i = 0; i < elements.length; i++) {
        if (i < 3) elements[i].style.color = 'red';
        else elements[i].style.color = 'green';
    }
}

// Task 3
function thirdTask() {
    const colors = ['red', 'blue', 'green', 'yellow', 'violet'];
    for (let i = 0; i < 5; i++) {
        let string = document.createElement('div');
        let number = document.createElement('span')
        string.className = 'element'
        string.innerText = 'Element '
        number.innerText = [i + 1]
        number.style.color = colors[i]
        container.appendChild(string).appendChild(number)
    }
}
