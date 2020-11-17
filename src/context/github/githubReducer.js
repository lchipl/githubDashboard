import { CLEAR_USERS } from "../types"
const handlers = {
    [CLEAR_USERS]:'',
    DEFAULT: (state) => state
}



export const GithubReducer= (state,action)=>{
    const handler = handlers[action.type] ||handler.DEFAULT
    return handler(state,action)
}