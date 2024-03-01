const users = [
    {
        email: "yeeeeees@xyz.com",
        password: "yoeeeees123"
    },
    {
        email: "saaaa@xyz.com",
        password: "saaaaa23"
    },
    {
        email: "aaaaar@xyz.com",
        password: "aaaaar123"
    },
    {
        email: "heeeee@xyz.com",
        password: "hoeeem123"
    },
    {
        email: "aaaaa@xyz.com",
        password: "aaaaaa1"
    },
    {
        email: "seeeem@xyz.com",
        password: "seeeem123"
    },
]
function checkpass(email,password){
    let passwordiscorrect = false
    users.forEach(element => {
        if (element.email === email){
            if (element.password === password) {
               passwordiscorrect = true  
            }
        } 
    }
     )   
   return passwordiscorrect
}
// console.log(checkpass("azaaaaaaaaaaaaaa@xyz.com" , "aaaa123"));

const email = document.getElementById("email")
const password = document.getElementById("password")
const login = document.getElementById("login")

function verifyCredentials (){
    const email_entree = email.value
    const password_entree = password.value
    console.log(checkpass(email_entree,password_entree));
    // if (checkpass (email_entree , password_entree) == true){
    //     alert( "login succefull ")
    // }
    // else {
    //     alert("email or password  incorrect")
    // }
    checkpass (email_entree , password_entree) == true ? alert("login succesfull") : alert("email or password incorect ")
}

login.onclick = verifyCredentials


