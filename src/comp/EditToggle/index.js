import React,{useState} from 'react';
import {MdDelete} from 'react-icons/md';
import {FaEdit} from 'react-icons/fa';

function EditToggle({editMode,onClick}){
    // const [view, setView] = useState(false);
    
    // Which mode to show 
    var toggle= null;
    // if it's not edit mode, show edit icon.
    // if it's edit mode, show delete icon.
    if(!editMode){
    // if(view){
        toggle = <FaEdit id="editIcon"/>
    } else {
        toggle = <MdDelete className="deleteIcon"/> 
    }
    

    return (
        <div className="editToggle">
            <div className="toggleIcon">{toggle}</div>
        </div>
    )

}

EditToggle.defaultProps = {
    editMode: false,
    onClick:()=>{}
}

export default EditToggle;