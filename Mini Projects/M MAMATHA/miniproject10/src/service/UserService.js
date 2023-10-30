let url="https://jsonplaceholder.typicode.com/users"

export async function getusers(){

        const response = await fetch(url)
        const users=   await response.json()
        console.log(users)
        return users;

}

export async function addusers(){}

export async function updateusers(){}
export async function deleteusers(){}