import React, { useState} from 'react';
import './login.css';
import Footer from '../footer/footer';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Log () {

    const [ email, setEmail] = useState('');
    const [ password, setPassword ] = useState('');
    const navigate = useNavigate();
    const handlesubmit =() =>{
        console.log(email,password)
        axios.post('http://localhost:5000/login', {
            email: email,
            password: password
        })
        .then(res=>{
            console.log(res.data)
            if (res.data.code === 404){
                alert('user not found');
            }
            if (res.data.code === 303){
                alert('wrong password');
            }
            if (res.data.code === 300){
                navigate('/home')
                localStorage.setItem("TOKEN", res.data.token)
                localStorage.setItem("EMAIL", res.data.email)
            }
        }).catch(err=>{
            console.log(err);
        })
    }

    return (<>
        <div className='login'>
            <div className="loginContainer">
                <h1> Welcome Back! </h1>
                <div className="input-container">
                    <label> Email ID </label>
                    <input 
                        onChange ={(e)=>{
                            setEmail(e.target.value)
                        }}
                        value={email} 
                        type="email" name="uname" required />
                    {/* {renderErrorMessage("uname")} */}
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input 
                        onChange ={(e)=>{
                            setPassword(e.target.value)
                        }}
                        value={password} 
                        type="password" />
                    
                </div>

                <div className='forget-password'>
                    <Link to="/forget"> Forget password? </Link>
                    <Link to="/register"> Create a new account </Link>
                </div>

                <button onClick={handlesubmit} className="loginBut">
                    <p>Login</p>
                </button>

                <button className="siG">
                    <img
                        src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
                        alt="Trees"
                        height="30"
                    />
                    <p> Sign in with Google </p>
                </button>
            </div>

            <div className='login-footer'>
                <Footer />
            </div>

        </div>
        </>)
}

