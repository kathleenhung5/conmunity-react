import React from 'react';
import BreadCrumbItem from './BreadCrumbsItem';

function BreadCrumbs(curPage){
var curPage = "Window";
    return(
        <div>
            <BreadCrumbItem page="Projects" active={curPage==="Projects"} />
            <span>><BreadCrumbItem page="Project" active={curPage==="Project"} /></span>
            <span>><BreadCrumbItem page="Floor" active={curPage==="Floor"} /></span>
            <span>><BreadCrumbItem page="Window" active={curPage==="Window"} /></span>
        </div>
    )
}

BreadCrumbs.defaultProps = {
    
}

export default BreadCrumbs;