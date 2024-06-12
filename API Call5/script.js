async function getInfo(id) {
    const response = await fetch(`https://reqres.in/api/${id}`);
    // console.log(response)

    if (!response.ok) {
        throw new error(`HTTP erroe! Status: ${response.status}`);

    }

    return response.json();

};

function getTimer(s) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('hello')

        }, s)
    })
}

// async function getResolved() {
//     let users = await Promise.any([
// Promise.reject("bye"),
//         getTimer(1),
//         getInfo(1)
//     ])
//     console.log(users)
// }
// getResolved()


// promise.any([
//     Promise.reject("bye"),
//     getTimer(10000),
//     getInfo(1)

// ])
//     .then(function (res) {
//         console.log(res)

//     })


//     async function allvalues() {
//         let q1 = await Promise.allSettled([
//             promise.reject("bye"),
//             getTimer(1),
//             getInfo(1)
//         ])
//         console.log(q1)
//     }
// allvalues()



Promise.allSettled([
    getTimer(1),
    getInfo(1),
    Promise.reject("bye")
])
    .then(function (response) {
        console.log(response)
    })


// async function getResult() {
//     try {
//         let i = await Promise.race([
//             getTimer(1),
//             getInfo(1)
//         ])
//         console.log(i)
//     }
//     catch {
//         console.log("error found")
//     }
// }

// getResult()



// Promise.race([
//     getInfo(1),
//     getTimer()
// ])
//     .then(function (response) {
//         console.log(response)
//     })
//     .catch(function (str) {
//         console.log(str)
//     })

//     async function getUsers() {
//         try {
//             let users = await Promise.all([
//                 getInfo(1),
//                 getInfo(288),
//                 getInfo(3)
//             ])
//             console.log(users)
//         }
//         catch {
//             console.log("error found")
//         }
//     }


// getUsers()



// Promise.all([
//     getInfo(1),
//     getInfo(28888),
//     getInfo(3)
// ])
//     .then(function (response) {
//         console.log(response)
//     })
//     .catch(function (str) {
//         console.log(str)
//     })




















