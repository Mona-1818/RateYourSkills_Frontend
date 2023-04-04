import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Home (){
    const navigate = useNavigate();
    useEffect(()=>{
        const token = localStorage.getItem("TOKEN")
        if(!token){
            navigate('/login')
        }
    },[])
    return (
        <div>
            <div>Mammal</div>
            <span> {localStorage.getItem('EMAIL')} </span>
            <button onClick={()=>{
                localStorage.clear()
                navigate('/')
            }} >Logout</button>
        </div>
    );
}