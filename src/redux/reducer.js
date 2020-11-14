
const initialState = {
      q:"not today"
}


export const Reducer = (state=initialState,action) =>{

    switch(action.type){

        case 'SHOW_ALERT':
            return{
              q: state.q + action.payload
            }
        case 'HIDE_ALERT':
            return{
                q: null
            }

        default:
            return state
    }





}