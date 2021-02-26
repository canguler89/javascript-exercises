let p = new Promise((resolve, reject)=> {
    let a = 1 + 3
    if(a == 2) {
        resolve('CORRECT!!!!')
    }else{
        reject('WRONG!!!!')
    }
})

p.then((message)=> {
    console.log('This is .then solves problem ' + message)
})
.catch((message)=> {
    console.log('This is error in .catch ' + message)
})
