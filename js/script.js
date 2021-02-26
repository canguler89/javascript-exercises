const nums = [25,23,4,2,1,5,7,9,3,14,11,15,16,27,29,31]
const result = document.getElementById('result')
const result2 = document.getElementById('result2')
const result3 = document.getElementById('result3')
const tryButton = document.getElementById("try")

document.getElementById('arr1').innerHTML = nums

// tryButton.addEventListener("click", checkValue)

function checkValue(){
    var inputNumber = document.getElementById('inputNumber').value
    var i = nums.indexOf(inputNumber)
    result3.innerHTML = i
    if(i == -1){
        status = "exist"
        result.innerHTML = status
    }else{
        status = "no exist"
        result2.innerHTML = status
    }
}

