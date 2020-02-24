import React from 'react';
import {FiPlus} from 'react-icons/fi';

function AddButton({text}){
    return(
    <div className="addbutton-cont">
        <div className="addButton">
            <FiPlus className="addButtonIcon"/>
            <p className="addButtonText">{text}</p>
        </div>
    </div>
    )
}

AddButton.defaultProps = {
    text: "Add an item",
}

export default AddButton;