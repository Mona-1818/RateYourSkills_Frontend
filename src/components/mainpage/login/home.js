import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Home (){
    const navigate = useNavigate();
    useEffect(()=>{
        const token = localStorage.getItem("TOKEN")
        if(!token){
            navigate('/login')
        }
    })
    const container = document.getElementById('input-cont');
    const addInput = () => {
        let input = document.createElement('input');
        input.placeholder = 'Type something';
        container.appendChild(input);
    }
    return (
        <div>
            <div>Mammal</div>
            <span> {localStorage.getItem('EMAIL')} </span>
            <span> {localStorage.getItem('USERNAME')} </span>
            <div id='input-cont'><input /></div>
            <button onClick={addInput}>+Add input</button>
            <span> {localStorage.getItem('NAME')} </span>
            <span> {localStorage.getItem('DATEOFBIRTH')} </span>
            <span> {localStorage.getItem('ABOUT')} </span>
            <span> {localStorage.getItem('LOCATION')} </span>
            <span> {localStorage.getItem('EMAIL')} </span>
            <button onClick={()=>{
                localStorage.clear()
                navigate('/')
            }} >Logout</button>
        </div>
    );
}