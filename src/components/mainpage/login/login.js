import React, { useEffect, useState} from 'react';
import validator from 'validator';
import './login.css';
import Footer from '../footer/footer';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ErrorMessage from './error';

export default function Log () {

    const [ email, setEmail ] = useState('');
    const [ emailError, setEmailError] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        const token = localStorage.getItem("TOKEN")
        if(token){
            navigate('/home');
        }
    });

    const validateEmail = (e) => {
        var email = e.target.value
        if (validator.isEmail(email)) {
            setEmailError('');
        } else {
          setEmailError('Enter valid Email!');
        }
    }
    
    const handlesubmit = async (e) =>{
        e.preventDefault();
        try{
            const config = {
                headers:{
                    "Content-type":"application/json"
                }
            };
            await axios.post('http://localhost:5000/login',{
                email: email,
                password: password
            }, config).then(res=>{
                localStorage.setItem("TOKEN", res.data.token);
                localStorage.setItem("EMAIL", res.data.email); 
            }).catch(error =>{
                setError(error.response.data.message);
            });
        } catch(error){
            setError(error.response.data.message);
        };
    };    
    return (<>
        <div className='login'>
            <div className="loginContainer">
                { error && <ErrorMessage variant="danger">{ error }</ErrorMessage>}
                <h1> Welcome Back! </h1>
                <div className="input-container">

                    <label> Email ID </label>
                    <input type="email" id="email" name="email" value={ email } 
                        onChange ={(e)=>{
                            validateEmail(e)
                            setEmail(e.target.value)
                        }} required /> 
                    <span style={{width:'300px',textAlign:'center',color: 'red'}}>{emailError}</span>   
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

                <button type="submit" onClick={handlesubmit} className="loginBut">
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
};