

function getUserPageWise(pageNumber) {
    return fetch(`https://reqres.in/api/users?page=${pageNumber}`)
        .then(function (response) {
            return response.json()
        })
        .then(function (response) {
            console.log(response.data)
            return response.data
        })
}
//getUserPageWise(2)

function getSingleUser(id) {
    return fetch(`https://reqres.in/api/users/${id}`)
        .then(function (response) {
            return response.json()
        })
        .then(function (response) {
            console.log(response)
            return response.data
        })
}
//getSingleUser(2)
// .then()

function renderHtml(user) {
    document.write(`<h1>${user.first_name}${user.last_name}</h1>`)
    document.write(`<p>${user.email}${user.id}</p>`)
    document.write(`<img src=${user.avatar}>`)
}


//using then

// getUserPageWise(1)
//     .then(function (users) {
//         let id = users[0].id
//         return getSingleUser(id)
//     })
//     .then(function (user) {
//         //console.log(user)
//         renderHtml(user)
//     })

// async await 
// async function getinfo(pageNumber){
//        let users = await getUserPageWise(pageNumber)
//        let id = users[0].id
//        let user = await getSingleUser(id)
//        renderHtml(user)
// }
// getinfo(2)


//....................................................................

// Promise.all()
// async function PromiseAny() {
//     let users = await Promise.all([
//         Promise.resolve('hello'),
//         Promise.reject('hello2'),
//         Promise.resolve('hello3')
//     ])
//     console.log(users)
// }


// PromiseAny()


// // // Program 2
// function addTime() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve('hello')
//         }, 3000)
//     })
// }
// function addTime2() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve('Bye')
//         }, 2000)
//     })
// }

// async function PromiseRace(){
//     let c = await Promise.race([
//         addTime(),
//         addTime2()
//     ])
//     console.log(c)
// }
// PromiseRace()

// // Promise.any()
// // share - 1 second -------> 3 second
// async function PromiseAny(){
//     let a = await Promise.any([
//         Promise.reject("bye"),
//         Promise.resolve("hello"),
//         Promise.reject("hello")
//     ])
//     console.log(a)
// }
// PromiseAny()


// Promise.allSettled()
async function PromiseAllSettled() {
    let a = await Promise.allSettled([
        Promise.reject("bye"),
        Promise.resolve("hello"),
        Promise.resolve("hello")
    ])
    console.log(a)
}
PromiseAllSettled()