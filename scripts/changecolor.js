let dido = document.getElementById('dido');
let random = function (event) {
    return Math.floor(Math.random()*256);
};

let changeBody = function(event) {
    let first = random();
    let second = random();
    let third = random();
    let randomColor = 'rgb(' + first + ',' + second + ',' + third + ')';
    document.body.style.backgroundColor = randomColor;
    document.getElementById('logo').style.color = 'rgb(' + Math.abs(255 - first) + ',' + Math.abs(255 - second) + ',' + Math.abs(255 - third) + ')';
}
dido.addEventListener('click', changeBody)