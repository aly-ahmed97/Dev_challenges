let buttonPlus = document.getElementsByClassName("Plus"),
    buttonMinus = document.getElementsByClassName("Minus"),
    Output1 = document.getElementById("output1"),
    Output2 = document.getElementById("output2"),
    totalPrice = document.getElementById("totalPrice");

let Quantity_one = 1,
    Quantity_two = 1,
    total_price = 0;

const price_one = 54.99,
      price_two = 74.99;
buttonPlus[0].onclick = function(){
    Quantity_one++;
    if(Quantity_one > 9)
        Quantity_one = 9;
    modify_Output();
}
buttonPlus[1].onclick = function(){
    Quantity_two++;
    if(Quantity_two > 9)
        Quantity_two = 9;
    modify_Output();
}
buttonMinus[0].onclick = function(){
    Quantity_one--;
    if(Quantity_one < 1)
        Quantity_one = 1;
    modify_Output();
}
buttonMinus[1].onclick = function(){
    Quantity_two--;
    if(Quantity_two < 1)
        Quantity_two = 1;
    modify_Output();
}

function modify_Output()
{
    Output1.innerHTML = Quantity_one ;
    Output2.innerHTML = Quantity_two ;
    total_price = (Quantity_one * price_one) + (Quantity_two * price_two) + 19;
    totalPrice.innerHTML = "&#36;" + total_price.toFixed(2);
}