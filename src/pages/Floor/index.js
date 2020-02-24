import React,{useContext} from 'react';
import Item from '../../comp/Item';
import {Contxt} from '../../App';

function Floor(){
    const ctx=useContext(Contxt);

    const windows = [
        {
            window: 1,
            progress: 43,
            deleted: 0
        },
        {
            window: 2,
            progress: 78,
            deleted: 0
        },
        {
            window: 3,
            progress: 86, 
            deleted: 0
        }
    ];

    return(
        <div className='floor-cont'>
            {
                windows.map((obj,ind)=>{
                    return <Item 
                        itemName={obj.window}
                        progress={obj.progress}
                    />
                })
            }
        </div>
    )
}

Floor.defaultProps = {
    
}

export default Floor;