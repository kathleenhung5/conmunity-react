import React from 'react';

function ProgressBar({progress}){
    return (
        <div className="progressbar-cont">
            <div className="progressbar">
                <div style={{width:`${progress}%`}}>
                </div>  
            </div>
            <h4>{progress}%</h4>
        </div>
    )
}

ProgressBar.defaultProps = {
    progress: 40
}

export default ProgressBar;