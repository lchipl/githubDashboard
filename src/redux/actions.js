import {SHOW_ALERT,HIDE_ALERT} from './actinoTypes';


export const show_alert = () => {
    return{
        type:SHOW_ALERT
    }

    
}

export const hide_alert = () => {
    return{
        type:HIDE_ALERT
    }

    
}