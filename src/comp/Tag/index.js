import React,{useState} from 'react';

function Tag(){
    const [view, setView] = useState(false);
    
    // Which tag to show 
    var tagText = null;
    if(view){
        tagText = "Approved";
    } else {
        tagText = "Pending";
    }
    
//having difficulty trying to style the two states separtely

    return (
        <div className="tagCont" onClick={()=>setView(!view)}>
            <div className="tagClass">{tagText}</div>
        </div>
    )

}

Tag.defaultProps = {
}

export default Tag;