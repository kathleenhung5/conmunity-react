import React, {useState} from 'react';

function ProgressBar({percent, progbar}){


    return(
        <div className="progress">
            <div className="bar-cont">
            <div className="prog-bar">{progbar}</div>
            </div>
            <h4 className="prog-pct">{percent}%</h4>
        </div>
    )
}


ProgressBar.defaultProps = {
    percent: 50,
    progbar: ''
}

export default ProgressBar;