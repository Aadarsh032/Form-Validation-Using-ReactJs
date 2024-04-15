import React, { useState } from 'react'
import './style.css'

function FormValid (){
    
    const [name,setName] =useState('');
    const [email,setEmail] =useState('');
    const [password,setPassword] =useState('');
    const [confirmpassword,setConfirmPassword] =useState('');
    const [age,setAge] =useState('');
    const [gender,setGender] =useState('');
    const [error,setError] =useState({});


    var validation = ()=>
    {
        const errorvar ={};

        if(!name)
        {
            errorvar.name="Name Required"
        }
       
        if(!email)
        {
            errorvar.email="Email Required"
        }
        if(!password)
        {
            errorvar.password="Password is Required"
        }
        else if(password.length<6)
        {
            errorvar.password="Minimum 6 characters Required"
        }
        if(password != confirmpassword)
        {
            errorvar.confirmpassword="Passwords do not match"
        }
        if(!gender)
        {
            errorvar.gender ="Gender is Required"
        }
        if(!age)
        {
            errorvar.age="Age is Required"
        }
        else if(age<18)
        {
            errorvar.age="Age must be Above 18"
        }

        return errorvar;

        
    }
   
  
 
   function handleSubmit(event)
   {
       event.preventDefault();
         
       var validationerror = validation();
       setError(validationerror);

       if(Object.keys(validationerror).length >0)
       {
        setError(validationerror)
       }
       else{
           alert("Form Submitted");
       }
   }

  return (
    <div className='bigbox'>
        <h1>Form Validation App</h1>
         <form className='content' onSubmit={handleSubmit}>
              <label >Name : </label><input type='text' value={name} onChange={(event)=>setName(event.target.value)}></input>{error.name}
              <br/><br/>
              <label >Email-Id : </label><input type='email' value={email} onChange={(event)=>setEmail(event.target.value)}></input>{error.email}
              <br/><br/>
              <label >Password : </label><input type='password' value={password} onChange={(event)=>setPassword(event.target.value)}></input>{error.password}
              <br/><br/>
              <label >Confirm Password : </label><input type='password' value={confirmpassword} onChange={(event)=>setConfirmPassword(event.target.value)}></input> {error.confirmpassword}
              <br/><br/>
              <label >Age : </label><input type='number' value={age} onChange={(event)=>setAge(event.target.value)}></input>{error.age}
              <br/><br/>
              <label >Gender : </label>
              <select value={gender} onChange={(event)=>setGender(event.target.value)}>
              <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select> {error.gender}
              <br/>
              <br/>
              <button>Submit</button>
         </form>
    </div>
  )
}

export default FormValid