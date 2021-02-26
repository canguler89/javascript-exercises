const userLeft = false
const userWatchingTv = false

function watchYoutubePromise() {
    return new Promise((res, rej)=> {
        if(userLeft){
            rej({
                name: 'User left',
                message: ":(("
            })
        }else if (userWatchingTv){
            rej({
                name: 'User watching TV',
                message: 'Ohh no!'
            })
        }else {
            res('you can share and like videos with friends!!!')
        }
    })
}

watchYoutubePromise().then((message)=> {
    console.log('Success' + message)
}).catch((error) => {
    console.log(error.name + ' ' + error.message)
})


Promise.all([
    // all promises run at the same time
])
Promise.race([
    // will get only one value which runs fastest
])