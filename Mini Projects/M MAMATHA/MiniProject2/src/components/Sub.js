
import React, { useState } from 'react'
export const Sub=()=>{

    const [enteredNumbers,setEnteredNumbers] = useState({first:0,second:0})
    
    const changeFirstNumberHandler=(event)=>{
      
       setEnteredNumbers((prevData)=>({
   
           first:-event.target.value,
           second:prevData.second
       }))
         
    }
   
    const changeSecondNumberHandler=(event)=>{
      
       setEnteredNumbers((prevData)=>({
           first:prevData.first,
           second:-event.target.value,
          
       }))
         
    }
   
    const result= enteredNumbers.first-enteredNumbers.second
   
   return ( 
   
   <>
   <input type='number' onChange={changeFirstNumberHandler} />-{' '}
   <input type='number' onChange={changeSecondNumberHandler} />-{' = '}{result}
   
   </>
       
   )
   
   
   }