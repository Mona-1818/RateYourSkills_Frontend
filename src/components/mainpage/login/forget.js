// import React, { useState}  from 'react';
import React from 'react';
import './forget.css';
import Footer from '../footer/footer';
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

export default function Forget () {
    // const navigate = useNavigate();
    // const [ email, setEmail] = useState('')
    // const handlesubmit =() =>{
    //     console.log(email)
    //     axios.post('https://rateyourskills-backend.up.railway.app/otp', {
    //         email: email
    //     })
    //     .then(res=>{
    //         console.log(res.data)
    //         if (res.data.code === 200) {
    //             navigate('/newpassword')
    //             alert('OTP has been send to registered email.');
    //         } else {
    //             alert('Email / Server Error.')
    //         }
    // }).catch(err => {
    //     console.log(err)
    // })
    // }
    return (
        <div className='forget'>
            <div className='forgetContainer'>
                <h1> Forget Your Password </h1>
                <p> To reset your password, enter your email id. </p>

                <div className="forget-container">
                    <label> Email ID </label>
                    <input type="text" name="uname" required />
                    {/* {renderErrorMessage("uname")} */}
                </div>

                <button className="resetBut">
                    <p>Send OTP</p>
                </button>
            </div>

            <div className='forget-footer'>
                <Footer />
            </div>
        </div>
    )
}


