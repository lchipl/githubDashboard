import React,{useContext} from 'react';
import {Cards} from '../components/Cards/Cards'
import { GithubContext } from '../context/github/githubContext';
import './Home/Home.css'
import Icon from './2568.jpg';

export const Home = () =>{
    const {loading,users} = useContext(GithubContext);
 
    return(
        <div className="mainHome">
            <img src={Icon} style={{width:250,height:250}}/>
            {loading?<div><p className="text-center">Загружаю....</p></div>:
            users.map((user)=><div key={user.id}><Cards user={user}/></div>)}

            
        
        </div>
    )

}