localStorage.setItem('name','bob')
console.log(localStorage.getItem('name'))
//localStorage.removeItem('name')

console.log(localStorage.key(1));


sessionStorage.setItem('name','John')
console.log(sessionStorage.getItem('name'))
//sessionStorage.removeItem('name')



document.cookie='name=Johnn; expires='+ new Date(2023,8,1).toUTCString()

console.log(document.cookie)

