import React from 'react';
import {NavLink} from 'react-router-dom';
import './Nav.css';
import {Search} from '../Search/Search';


export const Navigation = () =>{
    return(
      <nav>
      <ul>
        <li className="nav-item">
          <NavLink exact to="/" className="nav-link">Главная</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink to="/profile" className="nav-link">Профиль</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link">Информация</NavLink>
        </li>
        <li >
        <Search />
        </li>
      </ul>
    </nav>
    );
}