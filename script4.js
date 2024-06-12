//AJAX => asynch


//synch code

// function add1(){
//     console.log("Add 1 calling")
// }

// function add2(){
//     console.log("Add 2 function")
// }

// add2()
// add1()
//Add 2 calling
//Add 1 calling

//synch => asynch


// function add3() {
//     setTimeout(function () {
//         console.log("Add 3 calling")
//     }, 3000)
// }

// function add4(){
//     console.log("Add 4 calling")
// }

// add3()
// add4()

// //Add 4 calling
// //3 sec
// //Add 3 calling

//user create => get id => show info => asynch

// function getUserInfo() {
//     setTimeout(function () {
//         console.log("User Created")
//     }, 4000)

//     setTimeout(function () {
//         console.log("Get Id")
//     }, 3000)

//     setTimeout(function () {
//         console.log("show Info")
//     }, 2000)
// }
// getUserInfo()

//2 sec
//show Info
//3 Sec
//Get ID
//4 Sec
//User Created

//Asynch => Synch
//Call Back hell======= function under function(settimeout)

//user create => get id => show info => asynch

// disadvantage===== 1)tightly couple

//     2)code redeability dificult

//       3)one settimeout function we can not use the other code 

// function getUserInfo() {
//     setTimeout(function () {
//         console.log("/user create")
//         setTimeout(function () {
//             console.log("get id")
//             setTimeout(function () {
//                 console.log("show user")
//             }, 2000)
//         }, 3000)
//     }, 4000)
// }
// getUserInfo()

//  for overcome this call back hell methode we can use promise

// 3 state of promise === pending , resolve , reject .

//  for consuming promise we can use .then bolck



// let pro = new Promise(function (resolve, reject) {
//     let a = 20
//     let b = 20

//     if (a == b) {
//         resolve("Hello ALL")
//     }
//     else {
//         reject("Bye ALL")
//     }
// })

// //Consume => .then()

// pro.then(function (str) {
//     console.log(str)//Hello ALL

// }, function (str) {
//     console.log(str) //Bye ALL

// })

//==================================================

// let pro2 = new Promise(function (resolve, reject) {
//     let a = 98
//     let b = 918
//     if (a == b) {
//         resolve([38, 78, 47, 63, 784, 687])
//     }
//     else {
//         reject([57, 4, 839, 79, 74, 57])
//     }
// })
// pro2.then(function (str) {
//     console.log(str)
// })
//     .catch(function (str) {
//         console.log(str[3])
//     })
//     .finally(function (str) {
//         console.log("this will always executed")
//     })

// ====================================

let pro3 = new Promise(function (resolve, reject) {
    let a = 20
    let b = 20
    if (a == b) {
        resolve("Hello")
    }
    else {
        reject("Bye")
    }
})

pro3.then(function (str) {
    console.log(str) //Hello
    return str + "anjali"
})
    .then(function (str) {
        console.log(str) //Hello anjali
        return "Hello rahul"
    })
    .then(function (str) {
        console.log(str) //hello rahul
    })
    .catch(function (str) {
        console.log(str)
    })
    .finally(function (str) {
        console.log("it will be always executed")
    })



// pro3.then(function (str) {
//     console.log(str) //Hello
//     return str + "Mayuri"
// })
//     .then(function (str) {
//         console.log(str) //Hello Mayuri
//         return "Hello Minskole"
//     })
//     .then(function (str) {
//         console.log(str) //hello Minksole
//     })
//     .catch(function (str) {
//         console.log(str)
//     })






