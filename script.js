

const t = new Date();

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

document.getElementById('live').innerText = 'Today is ' + ': ' + days[t.getDay()];

document.getElementById('live2').innerText = 'Current Date : ' + t.toLocaleDateString();


document.getElementById('live3').innerHTML = 'Current Time : ' + t.toLocaleTimeString();


function prints(){
    window.print()
}


let a = Number(prompt('Tringle Area 1'));
let b = Number(prompt('Tringle Area 2'));
let c = Number(prompt('Tringle Area 3'));

let s = (a + b + c) / 2;

let areaResult = Math.sqrt(s*(s-a)*(s-b)*(s-c)) 

document.getElementById('live3').innerText = 'Tringle Length : ' + areaResult;