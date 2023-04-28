import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

function Singup() {
  
  useEffect(() => {
    data()
  }, [])
  
  let [user,setuser]=useState('')
  let [email,setemail]=useState('')
  let [pass,setpass]=useState('')
  let [cpass,setcpass]=useState('')
  let fdata = []
  console.log(user)
  console.log(email)
  console.log(pass)
  let set = {
    user : user,
    email : email,
    pass : pass,
    cpass : cpass
  }
  let data = ()=>{
    fdata.push(set)
    JSON.parse(localStorage.getItem('data'))
    let data1 = localStorage.setItem('data',JSON.stringify(fdata))
  }
  // var user;
  // var email;
  // var pass;
  // var cpass;
  return (
    <div>
      <Header />
      <div className="container">
        <div className="signup-box">
          <div className="box">
            <h2>Sign up</h2>

            <input type="text" placeholder="enter your user name"  onChange={(e)=>setuser(e.target.value)} value={user}/>
            <input type="email" placeholder="enter your Email" onChange={(e)=>setemail(e.target.value)}/>
            <input type="password" placeholder="create password" onChange={(e)=>setpass(e.target.value)}/>
            <input type="password" placeholder="confirm password" onChange={(e)=>setcpass(e.target.value)}/>
            <button onClick={()=>data()}>sign up</button>
            <h6>already have an account? <Link to='/login' className="white">login now</Link></h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Singup;
