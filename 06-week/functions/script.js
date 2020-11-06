// /////////////////////
// parameter is an input for functions
// when we pass parameter into functions it is argument

// return 

// function isPurple(color){
//     if(color === "purple"){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(isPurple("purple"))
// console.log(isPurple("PurPle"))
// console.log(isPurple("pink"))

// function isValidPassword(password, username){
//     if(password.length < 8){
//         return console.log("password must be 8 or more characters")
//     }
//     if(password.indexOf(" ") !== -1){
//         return console.log("password cannot contain space")
//     }
//     if(password.indexOf(username) !== -1){
//         return console.log("passwork cannot contain username")
//     }
//   return true
// }


// console.log(isValidPassword("sadsada123","sad"))
// console.log(isValidPassword("nice","lol123"))

// function average(arr){
//     let total = 0;
//     for(let nums of arr){
//         total += nums
//     }
//     return total / arr.length
// }

// console.log(average([2,3,4,5,6,7]))

// ////////////////////////////////////
// PANGRAM FUNCTION

// function isPangram(sentence){
//     for(let char of "abcdefghijklmnopqrstuvwxyz"){
//         if(sentence.indexOf(char) === -1 ){
//             return false
//         }
//     }
//     return true;
// }
// console.log(isPangram("abcdefghijklmnopqr stu vwxyz"))

function isPangram2(sentence){
    for(let char of "abcdefghijklmnopqrstuvwxyz"){
        if(!sentence.includes(char)){
            return false
        }
    }
    return true;
}
console.log(isPangram2("abcdefghijklmnopqrstuvwxy"))