// Primises in Javascript 
// Example 1 
let p = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if(a === 2){
        resolve("Success");
    }else {
        reject("Failed")
    }
})

.then((message)=> {
    console.log('This in the then ', message)
}).catch((message)=> {
    console.log('This is in the catch', message);
})

// Example 2 
const userLeft = false;
const userWatchingCatMeme = false;

function watchTutotrialPromise(){
    return new Promise((resolve, reject)=> {
        if(userLeft){
            reject({name: "User Left", message: ":("})
        }else if(userWatchingCatMeme){
            reject({name : "user watching cat meme", message: ":("})
        }else {
            resolve(" Thumbs up and subscribe")
        }
    })
}

watchTutotrialPromise().then((message)=> {
    console.log("Saccess" + message);
}).catch((error)=> {
    console.log(error.name + " " + error.message)
})