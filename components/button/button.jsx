import React from 'react';
import style from './scss/button.module.scss';
const Button = ({value})=>{
    return(
        <button className={style['btn']}>{value}</button>
    )
}
export default Button;