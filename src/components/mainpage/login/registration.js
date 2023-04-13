import React, { useEffect, useState}  from 'react';
import './registration.css';
import Footer from '../footer/footer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import validator from 'validator';
import ErrorMessage from './error';
import { handleregistrationsubmit } from '../../../action/user';

export default function Registration() {
    const [ email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [ password, setPassword ] = useState('');
    const [errorMessage, setErrorMessage] = useState('')
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userregister = useSelector((state) => state.USERREGISTER); 
    const { error, userInfo } = userregister;

    useEffect(()=>{
        const token = localStorage.getItem("TOKEN")
        if(token){
            navigate('/home');
        }
    },[navigate,userInfo]);

    const validateEmail = (e) => {
        var email = e.target.value
        if (validator.isEmail(email)) {
            setEmailError('');
        } else {
          setEmailError('Enter valid email.');
        }
    }
    const validate = (value) => {
        if (validator.isStrongPassword(value, {
          minLength: 8, minLowercase: 1,
          minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
          setErrorMessage('');
        } else {
          setErrorMessage('Password must be at least eight characters long, one lowercase, uppercase, numeric and special character.');
        }
    }
    const handlesubmit = async (e) =>{
        e.preventDefault();
        dispatch(handleregistrationsubmit(email, password));
    };
    return (
        <div className='register'>
            <div className='registerContainer'>
                <h1> Sign In </h1>
                <p> Start Journey With Us! </p>
                { error && <ErrorMessage variant="danger">{ error }</ErrorMessage>}
                <div className="register-container">
                    <label > Email ID </label>
                    <input type="email"
                        onChange ={(e)=>{
                            validateEmail(e)
                            setEmail(e.target.value)
                        }}
                        value={email}   required /> 
                    <span style={{width:'300px',textAlign:'center',color: 'red',}}>{emailError}</span>
                    {/* {renderErrorMessage("uname")} */}
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input 
                        onChange ={(e)=>{
                            validate(e.target.value)
                            setPassword(e.target.value)
                        }}
                        value={password}
                        type="password" name="pass" required />
                    <span style={{width:'300px',textAlign:'center',color: 'red'}}>{errorMessage}</span>
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
};