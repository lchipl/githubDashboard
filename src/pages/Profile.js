import React from 'react';
import icon from './icon-default.jpg'
import './Profile/Profile.css'


export const Profile = () =>{

    return(
        <div className="main">
            <div ><img className="img" src={icon} alt="icon" /></div>
            <div>Profile</div>
            <div>Information</div>
        </div>
    )

}