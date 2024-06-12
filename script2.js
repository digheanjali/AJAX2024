// function getInfo(){
//     setTimeout(function(){
//         console.log("user created")
//         setTimeout(function(){
//             console.log("get info")
//             setTimeout(function(){
//                 console.log("get id")
//             },1000)
//         },2000)
//     },3000)
// }
// getInfo()


function userCreated() {
    let pro = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("user created")
        }, 3000)
    })
    return pro
}

function getId() {
    let pro = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("getId")
        }, 2000)
    })
    return pro
}

function getInfo() {
    let pro = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("getInfo")
        }, 1000)

    })
    return pro
}




// userCreated()
//     .then(function (str) {
//         console.log(str)
//         return userId()
//     })
//     .then(function (str) {
//         console.log(str)
//         return getInfo()
//     })
//     .then(function (str) {
//         console.log(str)
//         return 
//     })
//     .catch(function () {
//         console.log("error occured")
//     })
//     .finally(function () {
//         console.log("I will always execute")
//     })



// async await 

async function getUserInformation() {
    let one = await userCreated()
    console.log(one)
    let two = await getId()
    console.log(two)
    let three = await getInfo()
    console.log(three)
}
getUserInformation()