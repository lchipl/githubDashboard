import React,{useReducer} from 'react';
import {AlertContext} from './alertContext';
import {AlertReducer} from './alertReducer'
import { HIDE_ALERT, SHOW_ALERT } from './types';
export const AlertState =({children}) =>{

    const [state,dispatch] = useReducer(AlertReducer);

    const show = (text,type='secondary')=>{
        dispatch({
            type:SHOW_ALERT,
            payload:{text,type}
        })
        
    }
    const  hide = () =>{
        dispatch({type:HIDE_ALERT})
    }
    return(
        <AlertContext.Provider value={{
            alert:state,
            show,
            hide
        }}>
            {children}
        </AlertContext.Provider>
    );
}