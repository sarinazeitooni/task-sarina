import React, {useState} from 'react';
import texts from "../navigation/texts/texts";
import Navigation from "../navigation/Navigation";
import style from './scss/login.module.scss';
import axios from 'axios';
import Profile from "../profile/profile";
const LoginPage = ()=>{
    const [userName , setUserName] = useState("");
    const [password , setPassword] = useState("");
    const handleChangeName =(event) =>{
        setUserName(event.target.value);
    };
    const handleChangePassword =(event)=>{
        setPassword(event.target.value);
    };
    const submit = (event)=>{
        event.preventDefault();
        const userName = userName;
        const userPassword = password;
        axios.get("https://60dc7017c2b6280017feb9d9.mockapi.io/user/users" , {params : {
                name : userName,
                password: userPassword
            }}).then(res=>{
                if(res.data!== []) {
                    console.log("error");
                }else{
                    return(
                        <Profile FirstName={userName} LastName={password}/>
                    )
                }
            console.log(res.data);
        });
    };
    return(
        <>
            <Navigation texts={texts}/>
            <div className={style['login-container']}>
                <h1 className={style['login-header']}>Login Form</h1>
                <input type='text' onChange={handleChangeName} placeholder='username' className={style['username-input']}/>
                <input type='text' onChange={handleChangePassword} placeholder='password' className={style['password-input']}/>
                <button onClick={submit} className={style['btn']}>login</button>
            </div>
        </>
    )
};
export default LoginPage;