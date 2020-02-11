import React,{useState} from 'react';
import {FiAlertCircle} from 'react-icons/fi';
import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io';

function TaskListItem({name, tag, alert, onClick}){
    const [view, setView] = useState(false);
    
    // Which arrow to show 
    var arrow = null;
    if(view){
        arrow = <IoIosArrowBack />
    } else {
        arrow = <IoIosArrowForward />
    }
    
    // Show and hide Alert
    var taskAlertClass = "";
    if(alert){
        taskAlertClass = "taskAlert";
    } else {
        taskAlertClass = "taskAlert invisible";
    }

    // Show and hide tag
    var taskTagClass="";
    if(tag==""){
        taskTagClass="taskTag invisible";
    } else {
        taskTagClass="taskTag";
    }

    return (
        <div className="TaskListItem" onClick={()=>setView(!view)}>
            <h3>{name}</h3>
            {/* <Tag tag={tag} /> */}
            <div className={taskTagClass}>{tag}</div>
            <div className={taskAlertClass}><FiAlertCircle /></div>
            <div className="taskArrow">{arrow}</div>
        </div>
    )

}

TaskListItem.defaultProps = {
    name: 'Task Name',
    tag: 'Tag Name',
    alert: false,
    // onClick:()=>{}
}

export default TaskListItem;