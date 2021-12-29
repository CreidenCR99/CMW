function BotonNo() {
    let x = (Math.random() * 1000).toFixed(0);
    let y = (Math.random() * 500).toFixed(0);
    document.getElementById("No").style = `left: ${x}px; top: ${y}px;`;
    console.log("x= "+ x + "\ny= " + y)
};