import React,{useEffect,useContext, useState} from 'react';
import Project from '../../comp/Project';
import Search from '../../comp/Search';
import AddButton from '../../comp/AddButton';
import {Contxt} from '../../App';
import {Data} from '../../comp/Data/Data';


function Projects(){
    const ctx=useContext(Contxt);
    const [projects,setProjects] = useState([]);

    useEffect(()=>{ 
        // find the right account      
        if(Data[0].username==ctx.appctx.curUser){
            // set/display projects 
            setProjects(Data[0].projects);
            // set progress
            ctx.dispatch({type:'Progress', progress:0});
        }
    },[])

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