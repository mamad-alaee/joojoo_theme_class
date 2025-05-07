


// dbResponse = ""

// const deleteUser = new Promise((resolve)=>{
//     setTimeout(()=>{
//         dbResponse = "selected User deleted"
//         resolve()
//     },5000)
// })


// deleteUser.then(()=>{
//     console.log(dbResponse)
// })


let userList = []

function serverResponse() {
    return new Promise((resolve) => {
        setTimeout(()=>{
            userList = ["hasan","naqi","mamad","hosein"]
            resolve("Age updated")
        },3000)
    })
}




const getUserList = async ()=>{
    console.log("Start getting user list")
    console.log(userList)
    await serverResponse()
    console.log(userList)
    console.log("End getting user list")
}

getUserList()






