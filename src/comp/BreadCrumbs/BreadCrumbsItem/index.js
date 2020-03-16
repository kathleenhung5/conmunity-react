import React, { useContext } from 'react';
import {Contxt} from '../../../App';
import {Link} from 'react-router-dom';


function BreadCrumbItem({page,active,topage,onClick}){
    const ctx=useContext(Contxt);
    var pageName = "";
    switch(page){
        case "Projects":
            pageName = "Projects";
            break
        case "Project":
            pageName = ctx.appctx.curProject;
            break
        case "Floor":
            pageName = "Floor " + ctx.appctx.curFloor;
            break
        case "Window":
            pageName = "Window " + ctx.appctx.curWindow;
            break
    }


    return(
        <Link className="BCItem-cont" to={topage} onClick={onClick}>
            <div className={active?"BCItem active":"BCItem inactive"}>{pageName}</div>
        </Link>
    )
}

BreadCrumbItem.defaultProps = {
    page:"Projects", // Project(Floors), Floor, Window
    // index:1,
    active: false,
    topage: '',
    onClick:()=>{}
}

export default BreadCrumbItem;