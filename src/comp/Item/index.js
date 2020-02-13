import React,{useState} from 'react';
import {FiAlertCircle} from 'react-icons/fi';


function Item({itemName, onClick, alert, editMode, editSelected, complete, progress}){
    const [view, setView] = useState(false);

        // Show and hide Alert
        var itemAlertClass = "";
        if(alert){
            itemAlertClass = "itemAlert";
        } else {
            itemAlertClass = "itemAlert invisible";
        }

        // Show and hide editMode
        var editModeClass = "";
        if(editMode){
            editModeClass = "editMode";
        } else {
            editModeClass = "editMode invisible";
        }

    return (
        <div className="Item" onClick={()=>setView(!view)}>
            <h3>{itemName}</h3>
            <div className={itemAlertClass}><FiAlertCircle /></div>
            <div className={editModeClass}>{editMode}</div>
        </div>
    )

}

Item.defaultProps = {
    itemName: 'Floor 1',
    progress: 0,
    alert: false,
    editMode:false, 
    editSelected:false, 
    complete: false
    // onClick:()=>{}
}

export default Item;