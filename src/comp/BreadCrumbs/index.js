import React from 'react';
import BreadCrumbItem from './BreadCrumbsItem';

function BreadCrumbs({page,setCurPage}){

    return(
        <div>
            <BreadCrumbItem page="Projects" active={page==="Projects"} />
            <span>><BreadCrumbItem page="Project" active={page==="Project"} /></span>
            <span>><BreadCrumbItem page="Floor" active={page==="Floor"} /></span>
            <span>><BreadCrumbItem page="Window" active={page==="Window"} /></span>
        </div>
    )
}

BreadCrumbs.defaultProps = {
    
}

export default BreadCrumbs;