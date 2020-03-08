import React, { useContext} from 'react';
import {Link} from 'react-router-dom';
import {Contxt} from '../../App';
import {Data} from '../Data/Data';

function Project({name, progress, code}){

    const ctx=useContext(Contxt);

    return(
        <Link to="/projectpage" className="project" 
        onClick={()=>{
            ctx.dispatch({type:'Project',text:`${name}`});
            }}
        >
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

