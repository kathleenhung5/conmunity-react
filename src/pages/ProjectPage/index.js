import React,{useContext,useEffect,useState} from 'react';
import Item from '../../comp/Item';
import Search from '../../comp/Search';
import AddButton from '../../comp/AddButton';
import {Contxt} from '../../App';
import {Data} from '../../comp/Data/Data';

function ProjectPage(){
    const ctx=useContext(Contxt);
    const [floors, setFloors] = useState([]);
    useEffect(()=>{
        // find the right project   
        for(var i=0;i<Data[0].projects.length;i++){
            if(Data[0].projects[i].name==ctx.appctx.curProject){
                // set/display floors
                 setFloors(Data[0].projects[i].floors);
                // set progress
                ctx.dispatch({type:'Progress', progress: Data[0].projects[i].progress});
            }
         }
        
    },[])

   

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