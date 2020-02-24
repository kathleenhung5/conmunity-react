import React,{useContext} from 'react';
import TaskListItem from '../../comp/TaskListItem';
import {Contxt} from '../../App';

function Window(){
    const ctx=useContext(Contxt);

    const tasks = [
        {
            name: 'Install Window',
            tag: 'Approved',
            alert: false
        },
        {
            name: "Painting",
            tag: 'Pending',
            alert: true
        },
        {
            name: "Inspection",
            tag: '',
            alert: false
        } 
    ];


    return(
        <div className="window-cont">
             {
                tasks.map((obj,ind)=>{
                    return <TaskListItem {...obj}
                    />
                })
            }
        </div>
    )
}

Window.defaultProps = {
    
}

export default Window;