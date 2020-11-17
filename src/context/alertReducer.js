import {SHOW_ALERT, HIDE_ALERT} from './types';

const handlers ={
    [SHOW_ALERT]: (state,action)=> action.payload,
    [HIDE_ALERT]: () =>  null,
    DEFAULT: state => state
}


export const AlertReducer = (state,action) =>{
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state,action)
}