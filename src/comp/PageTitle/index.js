
import React from 'react';
import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io';
// import ProgressBar from '../Progress';
import ProgressBar from 'react-bootstrap/ProgressBar';

function PageTitle({title,code,progress}){

    return(
        <div className="pageTitle-cont">
            <div className="pageTitle">
                <IoIosArrowBack className="arrow" />
                <h3>{title}</h3>
                <IoIosArrowForward className="arrow"/>
                <p>{code}</p>
            </div>
            <div className="prog">
                <ProgressBar now={progress}/>   
                <h4>{progress}%</h4>
            </div>
            
        </div>
    )
}


PageTitle.defaultProps = {
    title: "Window",
    code: "X7KJ2L",
    progress: 30
}

export default PageTitle;