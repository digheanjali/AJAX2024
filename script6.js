// callback hell used for Asunch to synch
// for that we use setTimeout function 

// function getSingleUser() {
//     setTimeout(function () {
//         console.log("user created")


//         setTimeout(function () {
//             console.log("get id")

//             setTimeout(function () {
//                 console.log("show user")
//             }, 5000)

//         }, 2000)

//     }, 3000)
// }
// getSingleUser()

// function createuser() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve("user crested")

//         }, 3000)
//     })
// }


// function Getid() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve("user get id")

//         }, 4000)
//     })
// }


// function userinfo() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve(" show user")

//         }, 2000)
//     })
// }

// // consumed using .then block
// //        or
// // use aynch await function


// async function getUser() {
//     let a = await createuser()
//     console.log(a)
//     let b = await Getid()
//     console.log(b)
//     let c = await userinfo()
//     console.log(c)
// }
// getUser()

//GET => retrive
//POST => add
//PUT=> update
//DELET => delet

//===================================================================
let user = {
    "page": 2,
    "per_page": 6,
    "total": 12,
    "total_pages": 2,
    "data": [
        {
            "id": 7,
            "email": "michael.lawson@reqres.in",
            "first_name": "Michael",
            "last_name": "Lawson",
            "avatar": "https://reqres.in/img/faces/7-image.jpg"
        },
        {
            "id": 8,
            "email": "lindsay.ferguson@reqres.in",
            "first_name": "Lindsay",
            "last_name": "Ferguson",
            "avatar": "https://reqres.in/img/faces/8-image.jpg"
        },
        {
            "id": 9,
            "email": "tobias.funke@reqres.in",
            "first_name": "Tobias",
            "last_name": "Funke",
            "avatar": "https://reqres.in/img/faces/9-image.jpg"
        },
        {
            "id": 10,
            "email": "byron.fields@reqres.in",
            "first_name": "Byron",
            "last_name": "Fields",
            "avatar": "https://reqres.in/img/faces/10-image.jpg"
        },
        {
            "id": 11,
            "email": "george.edwards@reqres.in",
            "first_name": "George",
            "last_name": "Edwards",
            "avatar": "https://reqres.in/img/faces/11-image.jpg"
        },
        {
            "id": 12,
            "email": "rachel.howell@reqres.in",
            "first_name": "Rachel",
            "last_name": "Howell",
            "avatar": "https://reqres.in/img/faces/12-image.jpg"
        }
    ],
    "support": {
        "url": "https://reqres.in/#support-heading",
        "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
    }
}

// user.data.forEach(function (el) {
// console.log(el)


//  if you want write each element on web page for that use document.write

// document.write(`<h1>${el.first_name}</h1>`)
// document.write(`<h1>${el.last_name}</h1>`)
// document.write(`<h1>${el.email}</h1>`)
// document.write(`<h1>${el.id}</h1>`)
// document.write(`<img src = ${el.avatar} >`)

// })

let clickme = document.querySelector('button')
clickme.addEventListener('click', function () {
    user.data.forEach(function (el) {

        document.write(`<h1>${el.first_name}</h1>`)
        document.write(`<h1>${el.last_name}</h1>`)
        document.write(`<h1>${el.email}</h1>`)
        document.write(`<h1>${el.id}</h1>`)
        document.write(`<img src = ${el.avatar}>`)


    })
})

















