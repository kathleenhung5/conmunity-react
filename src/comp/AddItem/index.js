import React,{useState} from 'react';
import Button from '../Button';

function AddItem({item}){
    const [num, setNum] = useState('');
    console.log(num,"num");
    return (
        <div className="addItem-cont">
            <h3>Add {item}</h3>
            <p>Add the required number of {item}</p>
            <div>
                <input 
                type={Number}
                value={num} 
                onChange={(n)=>{setNum(n.target.value)}}
                />
                <Button text="Add" type='blue-fill' />
            </div>
        </div>
    )
}

AddItem.defaultProps = {
    item: 'floors'
}

export default AddItem;