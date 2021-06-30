import React from 'react';
import style from './scss/navigation.module.scss';
import Link from 'next/link';
// interface props{
//     texts : array
// }
const Navigation = ({texts})=>{
    return(
        <div className={style['navigation']}>
            {
                texts.map((item)=>{
                    return(
                        <Link href={
                            (item == "Home") ? '/' : item}>
                            <a><button className={style['navigation-items']}>{item}</button></a>
                        </Link>
                    )
                })
            }
        </div>
    )
}
export default Navigation;