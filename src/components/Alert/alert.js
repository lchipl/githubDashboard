import React from "react";
import "./alert.scss";

export const Alert = (props) =>{
     return(
         <div className={`alert`}>
             <p style={{ paddingLeft:"3em"}}>{props.text ||`тут пока пусто`}</p>
         </div>
     );

}