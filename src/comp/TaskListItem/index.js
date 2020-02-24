import React,{useState} from 'react';
import {FiAlertCircle} from 'react-icons/fi';
import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io';
import CheckBox from '@material-ui/core/Checkbox';
import Tag from '../Tag';

function TaskListItem({name, tag, alert, onClick, editMode}){
    const [view, setView] = useState(false);
    
    // Which Arrow to show 
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

    // Show and hide Tag
    var taskTagClass="";
    if(tag==""){
        taskTagClass="taskTag invisible";
    } else {
        taskTagClass="taskTag";
    }

    return (
    <div className="taskListItem-cont">
        <div className="taskListItem" onClick={()=>setView(!view)}>
            <h3>{name}</h3>
            {/* <Tag tag={tag} /> */}
            <div className={taskTagClass}><Tag text={tag}/></div>
            <div className={taskAlertClass}><FiAlertCircle /></div>
            <div className="taskArrow">{arrow}</div>
        </div>
        <CheckBox style={{visibility: editMode?"visible":"hidden"}} color="primary"/>
    </div>
    )

}

TaskListItem.defaultProps = {
    editMode: false,
    name: 'Task Name',
    tag: 'Tag Name',
    alert: false,
    // onClick:()=>{}
}

export default TaskListItem;