document.addEventListener("onclick", function(){
    first = document.querySelector('')
    last = document.querySelector('')
    email = document.querySelector('')
    user = document.querySelector('')
    password = document.querySelector('')

    let userInfo = {
        firstName: first,
        lastName: last,
        email,
        userName: user,
        password
    }

    sessionStorage.setItem('userInformation', userInfo);
})

const signUp = () =>{

}