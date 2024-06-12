
function getUserPageWise(pagenumber) {
    return fetch(`https://reqres.in/api/users?page=${pagenumber}`)
        .then(function (response) {
            return response.json()
        })
        .then(function (response) {
            console.log(response.data)
            return response.data
        })
}
getUserPageWise(2)

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

getSingleUser(2)

