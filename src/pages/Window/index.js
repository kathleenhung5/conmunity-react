import React,{useContext,useState,useEffect} from 'react';
import TaskListItem from '../../comp/TaskListItem';
import {Contxt} from '../../App';
import Button from '../../comp/Button';
import SingleComment from '../../comp/SingleComment';
import {Data} from '../../comp/Data/Data';

function Window(){
    const ctx=useContext(Contxt);
    const [tasks,setTasks] = useState([]);

    useEffect(()=>{
        // find the current Window in Data to display tasks
        for(var i=0;i<Data[0].projects.length;i++){
            if(Data[0].projects[i].name==ctx.appctx.curProject){
                var floors = Data[0].projects[i].floors;
                for (var i=0;i<floors.length;i++){
                    if(floors[i].num==ctx.appctx.curFloor){
                        var windows = floors[i].windows;
                        for(var i=0;i<windows.length;i++){
                            if(windows[i].num==ctx.appctx.curWindow){
                                // set and display tasks
                                setTasks(windows[i].tasks);
                                // set progress
                                ctx.dispatch({type:'Progress',progress:windows[i].progress}); 
                            }
                        }
                    }
                }
            }
        } 
    },[ctx.appctx.curWindow,ctx.appctx.curPage]);
    
    
    const [curTask, setCurTask] = useState({});
    const [curInd, setI] = useState(-1);
    const [comments, setComments] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [commentMode, setCommentMode] = useState(false);
    const [tTitle, setTtitle] = useState('');
    const [tDes,setTdes] = useState('');

    const handleClick = (ind) =>{
        setI(ind);
        setCurTask(tasks[ind]);
        setComments(tasks[ind].comments);
    }

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
                        onClick={handleClick.bind(this, ind)} 
                        name={obj.name}
                        tag={obj.tag}
                        alert={obj.alert}
                        open={curInd === ind}
                        />
                    })
                    }
                </div>
                {/* Card */}
                <div className={curInd<0?'task-card-cont hidden':'task-card-cont'}>
                    {/* Task Name and Description */}
                    <div className={editMode?"task-edit":"dis-none"}>
                        <input 
                        type="text" 
                        value={tTitle} 
                        onChange={(tTitle)=>{setTtitle(tTitle.target.value)
                        }}/>
                        <textarea 
                        type="text" 
                        value={tDes} 
                        onChange={(tDes)=>{setTdes(tDes.target.value)}}/>
                        <Button 
                        text="Save"
                        onClick={()=>{setEditMode(false)}} 
                        />
                    </div>
                    <div className={editMode?"dis-none":"task-des"}>
                        <h3>{curTask.name}</h3>
                        <p>{curTask.des}</p>
                        <Button 
                        type="blue-outline" 
                        text="Edit task"
                        onClick={()=>{
                            setTtitle(curTask.name);
                            setTdes(curTask.des);
                            setEditMode(true);
                        }}/>
                    </div>
                    {/* Comments */}
                    <div className="task-comments">
                        <h2>Comments</h2>
                        {
                            comments.map((obj,ind)=>{
                                return <SingleComment {...obj}/>
                            })
                        }
                        <div className={commentMode?"hidden":"task-comments-button"}>  
                            <Button
                            text="Comment" 
                            type="blue-outline"
                            onClick={()=>setCommentMode(true)}
                            />
                            <Button 
                            text="Approve" 
                            />
                        </div>
                       
                    </div>
                    {/* Comment boxes */}
                    <div className={commentMode?"comment-cont":"dis-none"}>
                        <p>{ctx.appctx.curUser}</p>
                        <textarea />
                        <Button 
                        type="blue-fill" 
                        text="Post comment"
                        onClick={()=>setCommentMode(false)}
                        />
                    </div>
                </div>
            </div>
           
        </div>
    )
}

Window.defaultProps = {
    
}

export default Window;