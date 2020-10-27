var arr1 = [ 2, 5, 3, 7, 4, 1, 6, 9, 8]

document.getElementById('random').innerHTML = arr1

var order = document.getElementById("order");

function myFunc(){
    arr1.sort()
    order.innerHTML = arr1
}

var factor = document.getElementById("factor");

var x = 0
var num = 0;

while(x < 4){
    num = num + x;
    x++;
}

factor.innerHTML = num