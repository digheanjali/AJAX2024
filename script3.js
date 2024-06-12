//AJAX==> Asynchronous javascript

//synchronous js
//line by line

// program 1

// function add1() {
//     console.log("i am add one function")
// }

// function add2() {
//     console.log("i am add two function")
// }

// add2()
// add1()

// //I am add two function
//I am add one function

//cypress playwright

//html
//css
//js
//========================================================
//synch => asynch-----> 

//setTimeout


// function add3() {
//     setTimeout(function () {
//         console.log("i am add three function")
//     }, 2000)
// }

// function add4() {
//     console.log("i am add four function")
// }


// add3()
// add4()

//api => multiple user info=> single user => show info   => dependent


//synch => asynch => synch----> in case of dependency 

// function getUser() {
//     setTimeout(function () {
//         console.log("multiple user info")
//     }, 4000)

//     setTimeout(function () {
//         console.log("Get single user info")
//     }, 3000)

//     setTimeout(function () {
//         console.log("Render user info")
//     }, 2000)

// }
// getUser()

// promise


// let pro = new Promise(function (resolve, reject) {
//     let a = 10
//     let b = 10
//     if (a == b) {
//         resolve("Hello")
//     }
//     else {
//         reject("bye")

//     }
// })
// pro.then(function (result) {
//     console.log(result)
// }, function (result) {
//     console.log(result)
// })

// let pro = new Promise(function (resolve, reject) {
//     let a = 10
//     let b = 1000
//     if (a == b) {
//         resolve([11, 22, 33, 44, 55,])
//     }
//     else {
//         reject([55, 44, 33, 22, 11])
//     }
// })
// pro.then(function (arg) {
//     console.log(arg)
// })
//     .catch(function (arg) {
//         console.log(arg[2])
//     })



let pro1 = new Promise(function (resolve, reject) {
    let a = 54
    let b = 635
    if (a == b) {
        resolve("a is equal to b")
    }
    else {
        reject("a is not equal to b")
    }
})
pro1.then(function (str) {
    console.log(str)
})
    .catch(function (str) {
        console.log(str)
    })
    .finally(function (str) {
        console.log("it will always be executed")
    })













