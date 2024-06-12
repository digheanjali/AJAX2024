
// program 1 
// it print paralaly===> Asynchronous



function addtionA() {
    console.log("hello world....")
}
function addtionB() {
    console.log("hello world B......")
}
addtionB()
addtionA()

// program 2 

// 1st print additionc and after 3 sec. print addtiond   ==> this is async to sync  (one- by-one)

function addtionD() {
    setTimeout(function () {
        console.log("D is called")
    }, 3000)
}
function addtionC() {
    console.log("C is called")
}

addtionD()
addtionC()   // this is call functio call

// program 3
// Async

// user create  ------ id ------- id info

function getInfo() {
    setTimeout(function () {
        console.log("user created")
    }, 3000)

    setTimeout(function () {
        console.log("By id ")
    }, 2000)

    setTimeout(function () {
        console.log(" get info by id ")
    }, 1000)
}
getInfo()

// 1) ---1000
// 2)---2000
// 3)---3000 print

// program 4
// call back hell
// async ----- sync ----- help

function getInfo() {
    setTimeout(function () {
        console.log("user created")
        setTimeout(function () {
            console.log("By id ")
            setTimeout(function () {
                console.log(" get info by id ")
            }, 1000)
        }, 2000)
    }, 3000)

}
// getInfo()
// program 5
// let pro = new Promise(function(resolve,reject){
//     let a = 10
//     let b = 5 
//     if(a == b){
//         resolve("hello")
//     }
//     else{
//         reject("bye")
//     }

// })
// // consuming the promise
// pro.then(function(str){
//     console.log(str)
// },function(str){
//     console.log(str)
// })

// program 6 

let pro2 = new Promise(function (resolve, reject) {
    let a = 10
    let b = 5
    if (a == b) {
        resolve([11, 22, 33, 44])
    }
    else {
        reject([55, 66, 77, 99])
    }
})
pro2
    .then(function (arr) {
        console.log(arr[0])
    })
    .catch(function (arr) {
        console.log(arr[1])
    })

// program 6 
let pro3 = new Promise(function (resolve, reject) {
    let firstname = "anjali"
    if (firstname.startsWith('a')) {
        resolve('start with a')
    }
    else {
        reject('does not strt with a')
    }
})

pro3.then(function (str) {
    console.log(str)
})
    .catch(function (str) {
        console.log(str)
    })
    .finally(function (str) {
        console.log('i will always execute')
    })

// program 7
let pro4 = new Promise(function (resolve, reject) {
    let a = 10
    let b = 10

    if (a == b) {
        resolve('hello')
    }
    else {
        reject('bye')
    }
})

pro4
    .then(function (str) {
        console.log(str)
        return str + "anjali"
    })
    .then(function (str) {
        console.log(str)
    })
    .catch(function (str) {
        console.log(str)
    })
    .finally(function () {
        console.log('i will always execute')
    })
