import React,{useContext} from 'react';
import Button from '../../comp/Button';
import {Link} from 'react-router-dom';
import {Contxt} from '../../App';

function Template(){
    const ctx = useContext(Contxt);
    return(
        <div className="template-cont">
            <h2>Create Template</h2>
            <div className="template-inputs">
                <p><span>First</span>, add the number of floors for your project</p>
                <input type="number" />
            </div>
            <div className="template-inputs">
                <p><span>Second</span>, add the number of windows on each floor</p>
                    <input type="number" />
            </div>
            <Link to="/" onClick={()=>{ctx.dispatch({type:'Projects'})}}><Button text="Create" /></Link>
        </div>
    )
}

export default Template;
