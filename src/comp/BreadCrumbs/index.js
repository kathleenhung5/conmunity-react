import React from 'react';
import BreadCrumbItem from './BreadCrumbsItem';

function BreadCrumbs({page}){
    var bc1 = '';
    var bc2 = '';
    var bc3 = '';
    // Based on current page, show/hide breadcrumb item
    switch(page){
        case "Projects":
            bc1="hidden";
            bc2="hidden";
            bc3="hidden";
            break
        case "Project":
            bc2="hidden";
            bc3="hidden";
            break
        case "Floor":
            bc3="hidden";
            break
    }

    return(
        <div>
            <span className={bc1}><BreadCrumbItem  page="Projects" active={page==="Projects"} /></span>
            <span className={bc1}>><BreadCrumbItem page="Project" active={page==="Project"} /></span>
            <span className={bc2}>><BreadCrumbItem page="Floor" active={page==="Floor"} /></span>
            <span className={bc3}>><BreadCrumbItem page="Window" active={page==="Window"} /></span>
        </div>
    )
}

BreadCrumbs.defaultProps = {
    page : 'Window'
}

export default BreadCrumbs;