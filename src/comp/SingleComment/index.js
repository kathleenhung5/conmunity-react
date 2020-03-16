import React from 'react';


function SingleComment({username, comment, stamp}){
    return(
        <div className="singleComment">
           <h4>{username} / {stamp}</h4> 
           <p>{comment}</p>
           
        </div>
    )
}

SingleComment.defaultProps = {
    username:'Username',
    comment: 'Some comment',
    stamp: 'Date/time'
}

export default SingleComment;

