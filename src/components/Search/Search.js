import React,{useContext,useState} from 'react'
import { AlertContext } from '../../context/alertContext';
import { GithubContext } from '../../context/github/githubContext';
//import './Search.scss'
export const Search = () => {
    const [valueState,SetValue] = useState('');

    const {alert,show,hide} = useContext(AlertContext)
    const {search,clearUsers} =useContext(GithubContext)
    const handleSearch = (evt) =>{
        if(evt.key ==="Enter"){
            clearUsers()
            if(valueState.trim()){
                hide()
                
                SetValue('')
                search(valueState.trim())
            }else{
                show('введите запрос')
            }
        }
    }
    return(
        <input value={valueState} onChange={e =>SetValue(e.target.value)} onKeyPress={handleSearch} type="text" placeholder="поищи что-нибудь ,)" />
    );
}