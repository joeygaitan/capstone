
let info = JSON.parse(sessionStorage.getItem('userInformation'));

console.log(info)

document.addEventListener('onclick', signOut = ()=>{
    sessionStorage.removeItem('userInformation');
    window.location = "/index.html"
})