import React, {useState} from 'react';

function ProgressBar({progress}){
    return(
        <div className="progress">
            <div className="bar-cont">
              <div className="prog-bar"></div>
            </div>
            <h4 className="prog-pct">{progress}%</h4>
        </div>
    )
}

export default ProgressBar;