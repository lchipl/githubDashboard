import React,{useReducer} from 'react'
import {githubContext} from './githubContext';
import { GithubReducer } from './githubReducer';

export const GithubState = ({children}) =>{
    const initialState = {
        user: '',
        users:[],
        loading:false,
        repos:[]
    }
    const [state,dispatch] =useReducer(GithubReducer,initialState)

    return(
        <githubContext.Provider value={{

        }}>
            {children}
        </githubContext.Provider>
    )
}