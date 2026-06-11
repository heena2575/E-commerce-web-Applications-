let total=0;

function addToCart(name,price){

let li=document.createElement("li");

li.innerHTML=
name+" - ₹"+price+
' <button onclick="this.parentElement.remove()">Remove</button>';

document.getElementById("cart").appendChild(li);

total+=price;

document.getElementById("total").innerText=total;
}