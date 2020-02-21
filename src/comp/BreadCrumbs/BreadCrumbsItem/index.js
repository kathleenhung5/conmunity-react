import React from 'react';


function BreadCrumbItem({page,index,active}){
    var pageName = "";
    switch(page){
        case "Projects":
            pageName = "Projects";
            break
        case "Project":
            pageName = "The Project Name";
            break
        case "Floor":
            pageName = "Floor " + index;
            break
        case "Window":
            pageName = "Window " + index;
            break
    }


    return(
        <div className="BCItem-cont" >
            <div className={active?"BCItem active":"BCItem inactive"}>{pageName}</div>
        </div>
    )
}

BreadCrumbItem.defaultProps = {
    page:"Projects", // Project(Floors), Floor, Window
    index:1,
    active: false,
    onClick:()=>{}

}

export default BreadCrumbItem;