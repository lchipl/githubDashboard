import React,{useContext} from "react";
import { AlertContext } from "../../context/alertContext";
import "./alert.scss";

export const Alert = () =>{
    const {alert,hide} = useContext(AlertContext);
    if(!alert) return null
     return(
         <div className={`alert`}>
             <p style={{ paddingLeft:"3em"}}> {alert.text ||`тут пока пусто`} </p>
             <button  onClick={hide} style={{width:'60px',height:'30px'}}>close</button>
         </div>
     );

}