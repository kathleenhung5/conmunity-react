import React from 'react';
import Project from '../../comp/Project';

const projects = [
    {
        name: "Skyscraper",
        progress: 31,
        code: "3JK1JH",
    },
    {
        name: "Office Building",
        progress: 67,
        code: "2J9LL2"
    }
]

function Projects(){
    return(
        <div className="projects-cont">
            {
                projects.map((obj,ind)=>{
                   return <Project {...obj} />
                })
            }
        </div>
    )
}

Projects.defaultProps = {
    
}

export default Projects;