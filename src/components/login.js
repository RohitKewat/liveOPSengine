import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'
function Login() {
  const navigate = useNavigate()
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [message , setmessage] =useState(null)
  const handleemailChange = (event) => {
    setemail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!email || !password){
        alert(" please Enter email or password")
    }else{

        console.log(email , password);
        

     
    const url = "http://localhost:3001/signin";
    const data = {
      email: email,
      password: password,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    fetch(url, options)
      .then((response) => {
        if (!response.status) {
          throw new Error("Network response was not successfull");
        }

        return response.json();
      })
      .then((data) => {
        if (data.status === "successfull login") {
          navigate("/offer");
        } else if (data.status === "failed")
          setmessage("invalid email or password ");
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        setmessage("invalid email or password ");
      });



        setemail("")
        setPassword("")
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>
        email:
        <input type="text" value={email} onChange={handleemailChange} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} id='pwd'/>
      </label>
      <button type="submit" className='btn'>Login</button>
    {message ? <h3 id='message'> {message}  <button onClick={()=> setmessage("")} > ok</button> </h3> :""}
      <img src='images/login.jpg' alt='login' id='image'/>
    </form>
    </>
  );
}

export default Login;
