import React from 'react';
import {Link} from 'react-router-dom';

export const Cards = ({user}) => {
    return(
    <div >
        <img style={{width:'200px', height:'200px'}} src={user.avatar_url} alt={user.login} className="card-img-top" />
        <div className="card-body">
            <h5 className="card-title">{user.login}</h5>
            <Link to={'./profile/'+user.login} className="btn btn-primary">Открыть</Link>
        </div>
    </div>
    );
}