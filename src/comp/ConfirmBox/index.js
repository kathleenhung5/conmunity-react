import React from 'react';

function ConfirmBox(){
    return(
        <div className="confirm-box">
            <div className="modal-text">
              <h2 className="modal-ask">Are you sure?</h2>
              <h4 className="modal-body">Do you really want to delete the task(s)?<br></br>
              You will not be able to undo this action.</h4>
            </div>
            <div className="modal-btns">
            <div className="cancel-btn">Cancel</div>
            <div className="delete-btn">Delete</div>
            </div>
        </div>
    )
}


export default ConfirmBox;