import React from 'react'
import { useState } from 'react'






 function Signin() {
    const [inputs, setInputs] = useState({
      email: '',
      password: ''
    })

    const submitting = (event)=>{
        event.preventDefault()
    }

    const changing = (event)=>{
        setInputs({
          ...inputs,
          [event.target.name]: event.target.value
        })
    }

  return (
    <form onSubmit={submitting}>
        
        <p>To log in, please type the email <br/>and password associated to you account</p>
        <label>Email address <br/>
            <input
               type="text"
               name='email'
               value={inputs.email}
               onChange={changing}
            />
        </label> <br/><br/>

        <label>password <br/>
            <input
               type="text"
               name='password'
               value={inputs.password}
               onChange={changing}
            />
        </label> <br/><br/>

        <button type='submit'>Signin</button>


    </form>
  )
}

export default Signin;
