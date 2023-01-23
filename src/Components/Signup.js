import React, { useState } from 'react'




export default function Signup() {

  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
  })

  const handleSubmit = (event)=>{
    event.preventDefault()
  }

  const handleChange = (event)=>{
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Welcome!</h2>
      <p>Let's get to know you</p> <br/>

         <label>Username:<br/>
            <input
               type="text"
               name="username"
               value={inputs.username}
               onChange={handleChange}          
              required
            />
         </label> <br/><br/><br/>

         <label>Email:<br/>
            <input
               type='text'
               name='email'
               value={inputs.email}
               onChange={handleChange}
            />
         </label><br/><br/><br/>

         <label>password:<br/>
            <input
               type='text'
               name='password'
               value={inputs.password}
               onChange={handleChange}
            />
         </label><br/><br/><br/>

         <button type='submit'>Signup</button>

    </form>
      
    
  )
}
