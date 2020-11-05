// /////////////////////
// REVERSE TYPING
const word = "stressed";
let reversed = ""

for(let i = word.length -1; i >=0; i--){
    reversed = reversed + word[i]
}

console.log(reversed)

// /////////////////////
// Nested for loops

// for(let i = 0; i <= 10; i++) {
//     console.log(i)
//     for(let j = 10; j >= 4; j-=2){
//         console.log(j)
//     }
// }
// another example
// const gameboard = [
//     [4,32,8,4],
//     [64,8,32,2],
//     [8,32,16,4],
//     [2,8,4,2]
// ]
//     let total = 0
// for(let i = 0; i < gameboard.length; i++){
//     let row = gameboard[i]
//     for(let j = 0; j < row.length; j++){
//         total += row[j]
//     }
// }
// console.log(total)

// /////////////////////////
// WHILE LOOP

// const target = Math.floor(Math.random() * 10)
// let guess = Math.floor(Math.random() * 10)


// while(guess !== target){
//     console.log("target:", target, "guess: ", guess)
//     guess = Math.floor(Math.random() * 10)
// }

// console.log(`CONGRATZ target: ${target} guess: ${guess}`)

