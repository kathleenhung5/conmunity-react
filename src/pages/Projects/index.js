import React from 'react';
import Project from '../../comp/Project';
import Search from '../../comp/Search';
import AddButton from '../../comp/AddButton';

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
            <div className="search-area">
                <AddButton text="Add / Join a project"/>
                <Search searchItem="project" />
            </div>
            <div className="projects-projects">
            {
                projects.map((obj,ind)=>{
                   return <Project {...obj} />
                })
            }
            </div>
        </div>
    )
}

Projects.defaultProps = {
    
}

export default Projects;