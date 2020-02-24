import React,{useContext} from 'react';
import Item from '../../comp/Item';
import Search from '../../comp/Search';
import AddButton from '../../comp/AddButton';
import {Contxt} from '../../App';

function ProjectPage(){
    const ctx=useContext(Contxt);
    // console.log('project page, curpage',ctx.appctx.curPage);
    // console.log('project page curproject', ctx.appctx.curProject);
    
    const floors = [
        {
            floor: 1,
            progress: 23,
            deleted: 0
        },
        {
            floor: 2,
            progress: 35,
            deleted: 0
        },
        {
            floor: 3,
            progress: 49, 
            deleted: 0
        }
    ];

    return(
        <div className="projectpage-cont">
            <div className="search-area">
                <p>Total floors: 3</p>
                <Search searchItem="floor" />
            </div>
            <div>
            {
                floors.map((obj,ind)=>{
                    return <Item 
                        itemName={obj.floor}
                        progress={obj.progress}
                    />
                })
            }
            </div>
        </div>
    )
}

ProjectPage.defaultProps = {
    
}

export default ProjectPage;