
// function getmultipleuser() {
//     fetch(`https://reqres.in/api/users?page=1`)
//         .then(function (res) {
//             // console.log(res)   ....output is not in readable format
//             // console.log(res.json())   ....json method returns promise
//             return res.json()
//         })
//         .then(function (res) {
//             // console.log(res)
//             // console.log(res.data)
//             res.data.forEach(function (el) {
//                 document.write(`<h1>${el.first_name}</h1>`)
//                 document.write(`<h1>${el.last_name}</h1>`)
//                 document.write(`<h1>${el.email}</h1>`)
//                 document.write(`<h1>${el.id}</h1>`)
//                 document.write(`<img src = ${el.avatar}>`)
//             })

//         })
// }
// // getmultipleuser()

// let btn = document.querySelector('button')
// btn.addEventListener('click', function () {
//     getmultipleuser()
// })


//============================================================


//asynch==> synch => dependancy
//GetUser => getId => showInfo

//GetUser
function getmultipleUser(pagenumber) {
    return fetch(`https://reqres.in/api/users?page=${pagenumber}`)
        .then(function (res) {
            // console.log(res)
            return res.json()
        })
        .then(function (response) {
            return (response.data)
        })
}
// getmultipleUser()


function getSingleUser(id) {
    return fetch(`https://reqres.in/api/users/${id}`)
        .then(function (res) {
            return res.json()
        })
        .then(function (res) {
            return (res.data)
        })
}
// getSingleUser()


function showinfo(el) {
    document.write(`<h1>${el.first_name}</h1>`)
    document.write(`<h1>${el.last_name}</h1>`)
    document.write(`<h1>${el.id}</h1>`)
    document.write(`<h1>${el.email}</h1>`)
    document.write(`<img src=${el.avatar}>`)
}
// showinfo()
// consumed
// getmultipleUser()
//     .then(function (res) {
//         // console.log(res)
//         let getid = res[3].id
//         return getSingleUser(getid)
//     })
//     .then(function (res) {
//         showinfo(res)
//     })



async function info() {
    let dataArray = await getmultipleUser(1)
    let idUserInfo = await getSingleUser(dataArray[4].id)
    showinfo(idUserInfo)
}
info()
































































