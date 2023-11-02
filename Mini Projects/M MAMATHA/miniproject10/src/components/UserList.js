import React,{useState,useEffect} from "react";

import { getusers } from "../service/UserService";

export const UsersList=()=>{

    const [users,setusers] = useState([])

    
    useEffect(()=>{
       
        getusers().then(data=>setusers(data))
    },[])

    return (
      <>
       {
       users.length &&(
        users.map(users=> (
            <li key={users.id}>
                <h1>{users.id}{users.username}{users.phone}</h1>
            </li>
        ))

       )

       }
     </>
    )





}