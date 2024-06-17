import React, { useState } from 'react'
import "../css/contacts.css"
import { useForm } from 'react-hook-form'



function Contacts() {
  let [input,settinput]=useState({name:"",email:"",message:""})
  let {register,reset,formState:{errors},handleSubmit}=useForm()

  let takeInput=({target:{value,name}})=>{
    settinput({...input,[name]:value})
  }

  let storeData=()=>{
    
  }
  console.log(input);
  return (
    <div id='contact-container'>
        <div id='contact-desc'>
          <h1>CONTACT ME</h1>
          <p>sanasamtwinkle@gmail.com</p>
        </div>
        <div id='contact-inputs'>
          <input onChange={takeInput} name='name' type="text" placeholder='name'/>
          <input onChange={takeInput} name='email' type="text" placeholder='email' />
          <input onChange={takeInput} name='message' type="textarea" placeholder='message'/>
          <button onSubmit={handleSubmit((data)=>{reset()})} >HIT ME UP</button>
        </div>
    </div>
  )
}

export default Contacts