let ItemName = document.getElementById("ItemName").value;
let ItemQuantity = document.getElementById("ItemQuantity").value;
let ItemPrice = document.getElementById("ItemPrice").value;

const generateBtn = document.getElementById('GenerateBtn');

generateBtn.onclick = () => {
    let ItemName = document.getElementById("ItemName").value;
    let ItemQuantity = document.getElementById("ItemQuantity").value;
    let ItemPrice = document.getElementById("ItemPrice").value;

    alert(`ItemName: ${ItemName}, ItemPrice: ${ItemPrice}, ItemQuantity: ${ItemQuantity}`);
};
