import React from 'react';

function Project({name, progress, code, onClick}){
    return(
        <div className="project" onClick={onClick}>
           <div>{progress}%</div>
           <h3>{name}</h3>
           <h4>{code}</h4>
        </div>
    )
}

Project.defaultProps = {
    name: 'Project Name',
    progress: 0,
    code: "ABC123",
    onClick: ()=>{}
}

export default Project;

