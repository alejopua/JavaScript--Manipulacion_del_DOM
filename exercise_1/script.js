//Esto es una test 1

const h1 = document.querySelector('h1').style.color = 'red';
const form = document.querySelector('#form');
const input1 = document.querySelector('#cal1');
const input2 = document.querySelector('#cal2');
const btn = document.querySelector('#cal');
const resulSum = document.querySelector('#resulSum');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const result = parseInt(input1.value) + parseInt(input2.value);
    
    resulSum.innerHTML = `El resultado es: ${result}`;
});

