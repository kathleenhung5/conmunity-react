import React from 'react';
import {Link} from 'react-router-dom';

function Project({name, progress, code, onClick}){
    return(
        <Link to="/projectpage" className="project" onClick={onClick}>
           <div>{progress}%</div>
           <h3>{name}</h3>
           <h4>{code}</h4>
        </Link>
    )
}

Project.defaultProps = {
    name: 'Project Name',
    progress: 0,
    code: "ABC123"
}

export default Project;

