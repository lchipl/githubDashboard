import React,{useContext,useState} from 'react'
import { AlertContext } from '../../context/alertContext';
//import './Search.scss'
export const Search = () => {
    const [valueState,SetValue] = useState('');

    const {alert,show} = useContext(AlertContext)
    const handleSearch = (evt) =>{
        if(evt.key ==="Enter"){
            if(valueState.trim()){
                show(`отправлено ${valueState}`)
                SetValue('')
            }else{
                show('введите запрос')
            }
        }
    }
    return(
        <input value={valueState} onChange={e =>SetValue(e.target.value)} onKeyPress={handleSearch} type="text" placeholder="поищи что-нибудь ,)" />
    );
}