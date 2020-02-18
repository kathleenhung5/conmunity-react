import React from 'react';
import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io';

function PageTitle(){
    return(
        <div>
            <div>
                <IoIosArrowBack />
                <h3>Page</h3>
                <IoIosArrowForward />
            </div>
            <div>Progress</div>
        </div>
    )
}

PageTitle.defaultProps = {
    page: "Window"
}

export default PageTitle;