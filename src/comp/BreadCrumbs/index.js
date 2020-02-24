import React, { useContext } from 'react';
import BreadCrumbItem from './BreadCrumbsItem';
import {Contxt} from '../../App';

function BreadCrumbs({page}){
    const ctx = useContext(Contxt);
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
            <span className={bc1}>
                <BreadCrumbItem  
                page="Projects" 
                active={page==="Projects"}
                topage="/"
                onClick={()=>ctx.dispatch({type:'Projects'})}
                 />
            </span>
            <span className={bc1}>>
                <BreadCrumbItem 
                page="Project" 
                active={page==="Project"} 
                topage="/projectpage"
                onClick={()=>ctx.dispatch({type:'Project', text:ctx.appctx.curProject})}
                />
            </span>
            <span className={bc2}>>
                <BreadCrumbItem 
                page="Floor" 
                active={page==="Floor"} 
                topage="/floor"
                onClick={()=>ctx.dispatch({type:'Floor', text:ctx.appctx.curFloor})}
                />
            </span>
            <span className={bc3}>>
                <BreadCrumbItem 
                page="Window" 
                active={page==="Window"} 
                topage="/window"
                />
            </span>
        </div>
    )
}

BreadCrumbs.defaultProps = {
    page : 'Window'
}

export default BreadCrumbs;