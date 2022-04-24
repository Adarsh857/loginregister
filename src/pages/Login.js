import React ,{useState}from 'react'

function Login() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("")
   async function login()
  {
    console.warn(email,password)
    let item ={email,password};
    let result = await fetch("http://13.127.127.40/api/token/",{
      method:'POST',
      headers:{
        "Content-Type":'application/json',
        "Accept":'application/json'
      },
      body:JSON.stringify(item),
    });
    result =  await result.json()
    localStorage.setItem("user-info",JSON.stringify(result))

  }
  return (
    <div className="col-sm-6 offset-sm-3">
    <h1> Login</h1>
    <label>
        Email:
  <input type="text"onChange={(e)=>setEmail(e.target.value)}  className="form-control" placeholder="Email"/>
  </label>
  <br/>
  <label>
        Password:
  <input type="password" onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Password"/>
  </label>
  <br/>
<br/>
<button onClick ={login} className='btn btn-primary'>Submit</button>
</div>
  )
}

export default Login