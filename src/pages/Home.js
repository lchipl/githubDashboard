import React from 'react';
import {Cards} from '../components/Cards/Cards'
import './Home/Home.css'
export const Home = () =>{
 const array = new Array(9)
 .fill('');
    return(
        <div className="mainHome">
            {array.map((item)=><div key={item}><Cards /></div>)}
        
        </div>
    )

}