import React, {useState} from 'react';
import {IoIosArrowBack} from 'react-icons/io';
import {IoIosArrowForward} from 'react-icons/io';

function PageTitle({title, code}){
    return(
        <div className="pagetitle">
            <IoIosArrowBack className="back-arrow" />
            <h1 className="title-text">{title}Project A</h1>
            <IoIosArrowForward className="next-arrow" />
            <h4 className="proj-code">{code}Q2K3S5</h4>
        </div>
    )
}


PageTitle.defaultProps = {
    title: "",
    code: "",
    arrows: true,
    progress: 50
}

export default PageTitle;