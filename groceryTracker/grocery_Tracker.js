let groceries;
let groceries2;
let groceries3;

function totalGroceries() {
    groceries = parseFloat(document.getElementById('groceries').value);
    groceries2 =parseFloat(document.getElementById('groceries2').value);
    groceries3 = parseFloat(document.getElementById('groceries3').value);

let amount= groceries + groceries2 + groceries3;

document.getElementById('result').innerText = `The total amount is: ${amount}`;
}