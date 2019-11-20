document.addEventListener("onclick", signUp =() => {
    first = document.querySelector('#firstName').value
    last = document.querySelector('#lastName').value
    email = document.querySelector('#email').value
    user = document.querySelector('#userName').value
    password = document.querySelector('#password').value

    let userInfo = {
        firstName: first,
        lastName: last,
        email,
        userName: user,
        password
    }

    console.log(userInfo)

    sessionStorage.setItem('userInformation', JSON.stringify(userInfo));

    let item = sessionStorage.getItem('userInformation')
    console.log()
    window.location = "user.html"
})