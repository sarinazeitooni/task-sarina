import React from 'react';
import texts from "../navigation/texts/texts";
import Navigation from "../navigation/Navigation";
import style from './scss/profile.module.scss';
import Button from "../button/button";
const Profile =({FirstName , LastName})=>{
    return(
        <>
            <Navigation texts={texts}/>
            <div className={style['profile-container']}>
                <h1>Profile</h1>
                <div className={style['user-info']}>
                    <div className={style['first-name']}>{FirstName}</div>
                    <div className={style['last-name']}>{LastName}</div>
                </div>
                <Button value={'logout'}/>
            </div>
        </>
    )
};
export default Profile;