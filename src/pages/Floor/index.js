import React,{useContext,useEffect,useState} from 'react';
import Item from '../../comp/Item';
import {Contxt} from '../../App';
import AddButton from '../../comp/AddButton';
import Search from '../../comp/Search';
import floorimg from '../../img/floorplan.png';
import {Data} from '../../comp/Data/Data';

function Floor(){
    const ctx=useContext(Contxt);
    const [windows, setWindows] = useState([]);
    const [skey,setSkey] = useState('');

    const filtered = windows.filter((obj)=>{
        return JSON.stringify(obj.num).indexOf(skey) >= 0 
    });

    useEffect(()=>{
       // find the current floor in Data to display windows
        for(var i=0;i<Data[0].projects.length;i++){
            if(Data[0].projects[i].name==ctx.appctx.curProject){
                 var floors = Data[0].projects[i].floors;
                for (var i=0;i<floors.length;i++){
                     if(floors[i].num==ctx.appctx.curFloor){
                        //display windows
                        setWindows(floors[i].windows);
                        // set progress
                        ctx.dispatch({type:'Progress',progress:floors[i].progress});
                    }
                }
            }
        }
    },[])
    
    return(
        <div className='floor-cont'>
            <div className="search-area">
                <Search searchItem="window number" 
                onChange={(skey)=>{setSkey(skey.target.value)}}
                val={skey}
                />
            </div>

            <div className="floor-lower">
                <div className="floorplan-cont">
                    <div>
                        <p>Floor plan</p> 
                        <AddButton text="upload floorplan"/>
                    </div>
                    <div className="floorplan">
                        <img src={floorimg} />
                    </div>
                </div>
                <div className="floor-list">
                {
                    filtered.map((obj,ind)=>{
                        return <Item 
                            itemName={obj.num}
                            progress={obj.progress}
                        />
                    })
                }
                </div>
            </div>
            
        </div>
    )
}

Floor.defaultProps = {
    
}

export default Floor;