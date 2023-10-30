let key=prompt("enter the key")
let value=prompt("enter the value")
localStorage.setItem(key, value)
if(key)
console.log(`the value at ${key} is ${localStorage.getItem(key)}`)
if(key== "red" || key=="blue")
{
    localStorage.removeItem(key)

}
if(key==0)
{
    localStorage.clear()
}
