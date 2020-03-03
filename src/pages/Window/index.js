import React,{useContext,useState} from 'react';
import TaskListItem from '../../comp/TaskListItem';
import {Contxt} from '../../App';
import Button from '../../comp/Button';
import SingleComment from '../../comp/SingleComment';
import {Data} from '../../comp/Data/Data';

function Window(){
    const ctx=useContext(Contxt);
    var tasks = [];
    // find the current Window in Data to display tasks
    for(var i=0;i<Data[0].projects.length;i++){
        if(Data[0].projects[i].name==ctx.appctx.curProject){
            var floors = Data[0].projects[i].floors;
            for (var i=0;i<floors.length;i++){
                if(floors[i].num==ctx.appctx.curFloor){
                    var windows = floors[i].windows;
                    for(var i=0;i<windows.length;i++){
                        if(windows[i].num==ctx.appctx.curWindow){
                            tasks = windows[i].tasks;
                        }
                    }
                }
            }
        }
    }

    var task = {};
    const [curTask, setCurTask] = useState({});
    const [comments, setComments] = useState([]);
    console.log('curTask comment',curTask.comments);
    return(
        <div className="window-cont">
            <div className="add-task-cont">
                 <input type="number" placeholder="0"/>
                 <p>task</p>
                 <Button text="add"/>
            </div>
            <div className="window-lower">
                <div className="tasklist-cont">
                    {
                    tasks.map((obj,ind)=>{
                        return <TaskListItem 
                        onClick={()=>{
                            setCurTask(tasks[ind]);
                            setComments(tasks[ind].comments)
                        }} 
                        username={obj.username}
                        comment={obj.comment}
                        stamp={obj.stamp}
                        />
                    })
                    }
                </div>
                <div className="task-card-cont">
                    <div className="task-des">
                        <h3>{curTask.name}</h3>
                        <p>{curTask.des}</p>
                        <Button type="blue-outline" text="Edit task"/>
                    </div>
                    <div className="task-comments">
                        <h2>Comments</h2>
                        {
                            comments.map((obj,ind)=>{
                                return <SingleComment {...obj}/>
                            })
                        }
                        <div className="task-comments-button">  
                            <Button text="Comment" type="blue-outline" />
                            <Button text="Approve" />
                        </div>
                       
                    </div>
                    <div className="comment-cont">
                        <p>{ctx.appctx.curUser}</p>
                        <textarea />
                        <Button type="blue-fill" text="Post comment"/>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

Window.defaultProps = {
    
}

export default Window;