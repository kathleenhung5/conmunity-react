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

// You also want to have some default props for a component, so that it's not empty when you view it in the storybook
ProgressBar.defaultProps = {
    progress: 20
}

export default ProgressBar;