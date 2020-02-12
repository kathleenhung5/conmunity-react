import React from 'react';


function SingleComment({userName, comment, timestamp}){
    return(
        <div className="singleComment">
           <h4>{userName}</h4> 
           <p>{comment}</p>
           <h5>{timestamp}</h5>
        </div>
    )
}

SingleComment.defaultProps = {
    userName:'Username',
    comment: 'Some comment',
    timestamp: 'Date/time'
}

export default SingleComment;

