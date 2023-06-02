import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { listskill } from '../../action/skill';
import ErrorMessage from '../mainpage/login/error';
import { useNavigate } from "react-router-dom";

export default function Version () {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const skills = useSelector((state) => state.SKILLS); 
    const { error, skill } = skills;
    useEffect(()=>{
        dispatch(listskill());
    },[dispatch, navigate]);

    return (
        <div>
            <div>mammal</div>
            {error && <ErrorMessage>{ error }</ErrorMessage>}
            <div>mammal</div>
            <div> { skill }</div>
            <span> </span>
        </div>
    )
};
