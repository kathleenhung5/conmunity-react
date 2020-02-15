import React,{useState} from 'react';

function Tag({text}){
    // Which tag to show 
    // var tagText = null;
    // if(view){
    //     tagText = "Approved";
    // } else {
    //     tagText = "Pending";
    // }
    
//having difficulty trying to style the two states separtely


    // You want to change the bg color based on what the tag text is. You can use class to achieve that. 
    var tagClass = "tagCont";
    if(text=="Pending"){
        tagClass = "tagCont yellow";
    } else if(text=="Approved"){
        tagClass = "tagCont green";
    } else {
        tagClass = "hidden";
    } 

    return (
        <div className={tagClass}>
            <div className="tagtext">{text}</div>
        </div>
    )

}

Tag.defaultProps = {
    text: "Pending"
}

export default Tag;