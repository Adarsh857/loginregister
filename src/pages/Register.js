import React ,{useState}from 'react'
import './style.css'
function Register() {
  const [firstname,setfirstname]=useState("")
  const [lastname,setlastname]=useState("")
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")


  async function signUp()
  {
    let item={firstname,lastname,email,password}
    console.warn(item)
    let result = await fetch("http://13.127.127.40/api/user/",{
      method:'POST',
      body:JSON.stringify(item),
      headers:{
        "Content-Type":'application/json',
        "Accept":'application/json'
      },

    })
    result =  await result.json()
    localStorage.setItem("user-info",JSON.stringify(result))

  }

  return (
    <>
   
    <div className="col-sm-6 offset-sm-3">
  <h1>Register</h1>

  <label>
       First Name:
  <input type="text" onChange={(e)=>setfirstname(e.target.value)} className="form-control" placeholder=" First Name"/>
  </label>
  <br/>
  <label>
        Last Name:
  <input type="text" onChange={(e)=>setlastname(e.target.value)} className="form-control" placeholder=" Last Name"/>
  </label>
  <br/>
  <label>
        Email:
  <input type="text"onChange={(e)=>setemail(e.target.value)}  className="form-control" placeholder="Email"/>
  </label>
  <br/>
  <label>
        Password:
  <input type="password" onChange={(e)=>setpassword(e.target.value)} className="form-control" placeholder="Password"/>
  </label>
  <br/>
  <button  onClick={signUp} className='btn btn-primary'>Submit</button>
  
  </div>
  </>
  )
}

export default Register