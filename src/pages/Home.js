import React,{useContext} from 'react';
import {Cards} from '../components/Cards/Cards'
import { GithubContext } from '../context/github/githubContext';
import './Home/Home.css'
export const Home = () =>{
    const {loading,users} = useContext(GithubContext);
 const array = new Array(9)
 .fill('');
    return(
        <div className="mainHome">
            {
            users.map((user)=><div key={user.id}><Cards user={user}/></div>)}

            
        
        </div>
    )

}