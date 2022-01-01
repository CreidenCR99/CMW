var x = Math.floor(Math.random() * (1285-32))
var y = Math.floor(Math.random() * (625-32))

async function RandomPos() {
    x = Math.floor(Math.random() * (1285-32))
    y = Math.floor(Math.random() * (625-32))
    document.getElementById("test").style = `display: block; margin-left: ${x}px; margin-top: ${y}px; animation: test ease-in-out 15s infinite;`
    console.log("x= " + x + "\ny= " + y);
    document.getElementById("text").innerHTML = `x= ${x}<br>y= ${y}`
    await sleep(15000);
    document.getElementById("test").style = `display: none;`
}

async function Click() {
    document.getElementById("test").style = `display: block; margin-left: ${x}px; margin-top: ${y}px; animation: scale linear 1s;`
    await sleep(1000);
    document.getElementById("test").style = `display: none;`
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

setInterval(function () {
    RandomPos();
}, 15100);