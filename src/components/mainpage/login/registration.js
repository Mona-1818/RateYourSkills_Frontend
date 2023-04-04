import React, { useState}  from 'react';
import './registration.css';
import Footer from '../footer/footer';
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Registration() {
    const navigate = useNavigate();
    const [ email, setEmail] = useState('')
    const [ password, setPassword ] = useState('')
    const handlesubmit =() =>{
        console.log(email,password)
        axios.post('http://localhost:5000/register', {
            email: email,
            password: password
        })
        .then(res=>{
            console.log(res.data)
            if (res.data.code === 200){
                alert('user create');
                navigate('/login')
            }
            if (res.data.code === 500){
                alert('server error try again.');
            }
        }).catch(err=>{
            console.log(err)
        })
    }

    return (
        <div className='register'>
            <div className='registerContainer'>
                <h1> Sign In </h1>
                <p> Start Journey With Us! </p>

                <div className="register-container">
                    <label> Email ID </label>
                    <input 
                        onChange ={(e)=>{
                            setEmail(e.target.value)
                        }}
                        value={email} 
                        type="email" name="email" required />
                    {/* {renderErrorMessage("uname")} */}
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input 
                        onChange ={(e)=>{
                            setPassword(e.target.value)
                        }}
                        value={password}
                        type="password" name="pass" required />
                    {/* {renderErrorMessage("pass")} */}
                </div>

                <button onClick={handlesubmit} className="registerBut">
                    <p> Register </p>
                </button>

                <button className="reg-siG">
                    <img
                        src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
                        alt="Trees"
                        height="30"
                    />
                    <p> Register with Google </p>
                </button>
            </div>



            <div className='register-footer'>
                <Footer />
            </div>
        </div>
    )
}


