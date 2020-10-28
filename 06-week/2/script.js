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

for(let i = 0; i <= 10; i++) {
    console.log(i)
    for(let j = 10; j >= 4; j-=2){
        console.log(j)
    }
}
