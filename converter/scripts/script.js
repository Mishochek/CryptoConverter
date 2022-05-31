const firstValue = document.getElementById("crypto");
const secondValue = document.getElementById("convert-to");
const price = document.getElementById('price');
const button = document.getElementById('button-convert');
const amount = document.getElementById('amount');

let getPrice = async(event) => {
    const firstValue = document.getElementById("crypto").value;
    const secondValue = document.getElementById("convert-to").value;
    let requestedURL = 'https://api.coingecko.com/api/v3/simple/price?ids='+firstValue+'&vs_currencies=usd';
    
    await fetch(requestedURL)
    .then(resp => resp.json())
    .then(data => price.innerHTML = data[firstValue]["usd"] * amount.value)
};

button.addEventListener('click', getPrice)