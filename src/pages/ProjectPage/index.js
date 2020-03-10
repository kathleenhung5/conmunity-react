import React,{useContext,useEffect,useState} from 'react';
import Item from '../../comp/Item';
import Search from '../../comp/Search';
import {Contxt} from '../../App';
import {Data} from '../../comp/Data/Data';
import {FaEdit} from 'react-icons/fa';
import {MdDelete} from 'react-icons/md';

function ProjectPage(){
    const ctx=useContext(Contxt);
    const [floors, setFloors] = useState([]);
    const [skey,setSkey] = useState('');
    const [editMode, setEditMode] =useState(false);

    const filtered = floors.filter((obj)=>{
        return JSON.stringify(obj.num).indexOf(skey) >= 0 
    });

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
                <Search 
                searchItem="floor number" 
                onChange={(skey)=>{setSkey(skey.target.value)}}
                val={skey}
                />
            </div>
            <div className="projectpage-list">
                <div 
                    className={editMode?"dis-none":'edit-button'}
                    onClick={()=>{setEditMode(true)}}
                    >
                        <FaEdit />
                        <p>Edit</p>
                    </div>
                    <div 
                    className={editMode?'edit-button':'dis-none'}
                    onClick={()=>{setEditMode(false)}}
                    >
                        <MdDelete />
                        <p>Delete</p>
                </div>    
            {
                filtered.map((obj,ind)=>{
                    return <Item 
                        itemName={obj.num}
                        progress={obj.progress}
                        editMode={editMode}
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