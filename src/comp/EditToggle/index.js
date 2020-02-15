import React,{useState} from 'react';
import {MdDelete} from 'react-icons/md';
import {FaEdit} from 'react-icons/fa';

function EditToggle({onClick}){
    const [view, setView] = useState(false);
    
    // Which mode to show 
    var toggle= null;
    if(view){
        toggle = <MdDelete className="deleteIcon"/>
    } else {
        toggle = <FaEdit id="editIcon"/>
    }
    

    return (
        <div className="editToggle" onClick={()=>setView(!view)}>
            <div className="toggleIcon">{toggle}</div>
        </div>
    )

}

EditToggle.defaultProps = {
    //onClick:()=>{}
}

export default EditToggle;