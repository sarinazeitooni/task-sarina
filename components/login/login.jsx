import React, {useState} from 'react';
import texts from "../navigation/texts/texts";
import Navigation from "../navigation/Navigation";
import style from './scss/login.module.scss';
import axios from 'axios';
const LoginPage = ()=>{
    const [userName , setUserName] = useState("");
    const [userLastName , setuseLastName] = useState("");
    const handleChangeName =(event) =>{
        setUserName(event.target.value);
    };
    const handleChangeLastName =(event)=>{
        setuseLastName(event.target.value);
    };
    const submit = (event)=>{
        event.preventDefault();
        const user = userName;
        axios.get("https://60dc7017c2b6280017feb9d9.mockapi.io/user/users" , {user}).then(res=>{
            console.log(res);
        });
    };

    return(
        <>
            <Navigation texts={texts}/>
            <div className={style['login-container']}>
                <h1 className={style['login-header']}>Login Form</h1>
                <input type='text' onChange={handleChangeName} placeholder='username' className={style['username-input']}/>
                <input type='text' onChange={handleChangeLastName} placeholder='password' className={style['password-input']}/>
                <button onClick={submit} className={style['btn']}>login</button>
            </div>
        </>
    )
};
export default LoginPage;