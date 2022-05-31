const bitcoin = document.getElementById('btc');
const ethereum = document.getElementById('eth');
const dollar = document.getElementById('usd');
const buttonIn = document.getElementById('draw');
const buttonWith = document.getElementById('withdrawal');
const amountIn = document.getElementById('amountin');
const amountWith = document.getElementById('amountwith');
const selectOne = document.getElementById('selectCrypt');
const selectTwo = document.getElementById('selectCrypto');
const updateButton  =document.getElementById('update')


const cashIn = (event) => {
    let currency = amountIn.value;
    let crypto = selectOne.value;
    let oldCash = document.getElementById(crypto).innerText;
    document.getElementById(crypto).innerHTML = Number(currency) + Number(oldCash);
};

buttonIn.addEventListener('click', cashIn)

const cashOut = (event) => {
    let currency = amountWith.value;
    let crypto = selectTwo.value;
    let oldCash = document.getElementById(crypto).innerText;
    if(Number(oldCash) - Number(currency) < 0) {
        document.getElementById(crypto).innerHTML = 0;
    } else { 
    document.getElementById(crypto).innerHTML = Number(oldCash) - Number(currency);}
};

buttonWith.addEventListener('click', cashOut)

const updateBalance = async(event) => {
    let balanceUS = 0;
    let bitc = Number(bitcoin.innerText);
    let ethe = Number(ethereum.innerText);
    let usdt = Number(dollar.innerText);
    let btcURL = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd';
    let ethURL = 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd';

    await fetch(btcURL)
    .then(resp => resp.json())
    .then(data => balanceUS += data["bitcoin"]["usd"]*bitc)

    await fetch(ethURL)
    .then(resp => resp.json())
    .then(data => balanceUS += data["ethereum"]["usd"]*ethe)

    balanceUS += usdt;

    document.getElementById('balance').innerHTML = balanceUS;
};

updateButton.addEventListener('click', updateBalance);
