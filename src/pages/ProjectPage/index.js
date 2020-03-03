import React,{useContext} from 'react';
import Item from '../../comp/Item';
import Search from '../../comp/Search';
import AddButton from '../../comp/AddButton';
import {Contxt} from '../../App';
import {Data} from '../../comp/Data/Data';

function ProjectPage(){
    const ctx=useContext(Contxt);

    var floors = [];
    // find the right project and display floors
    for(var i=0;i<Data[0].projects.length;i++){
        if(Data[0].projects[i].name==ctx.appctx.curProject){
            floors = Data[0].projects[i].floors;
        }
    }

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
                        itemName={obj.num}
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