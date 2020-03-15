
import React,{useContext, useState, useEffect} from 'react';
import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io';
import ProgressBar from '../ProgressBar';
import {Contxt} from '../../App';
import {Data} from '../../comp/Data/Data';

function PageTitle({title,code}){
    const ctx=useContext(Contxt);
    var codeclass = '';
    var progressclass = '';
    var arrowclass = '';
    switch(ctx.appctx.curPage){
        case 'Projects':
            title = "Projects";
            arrowclass = 'hidden';
            codeclass="proj-code";
            progressclass = "hidden";
            break
        case 'Project':
            title = ctx.appctx.curProject;
            arrowclass = 'hidden';
            codeclass="hidden";
            progressclass = "pageTitle-progress";
            break
        case 'Floor':
            title = "Floor " + ctx.appctx.curFloor;
            arrowclass = 'arrow';
            codeclass="hidden";
            progressclass = "pageTitle-progress";
            break
        case 'Window':
            title = "Window " + ctx.appctx.curWindow;
            arrowclass = 'arrow';
            codeclass="hidden";
            progressclass = "pageTitle-progress";
            break
        // case 'Upgrade':
        //     title = "Upgrade to Premium";
        //     arrowclass = 'none';
        //     codeclass = 'hidden';
        //     progressclass = 'hidden';
        //     break
        // case 'Pay':
        //     title = "Payment";
        //     arrowclass = 'none';
        //     codeclass = 'hidden';
        //     progressclass = 'hidden';
    }

    // if the user is on upgrade or pay page
   if (ctx.appctx.upgrade==1){
        title = "Upgrade to Premium";
        arrowclass = 'hidden';
        codeclass = 'hidden';
        progressclass = 'hidden';
   } else if (ctx.appctx.upgrade==2){
        title = "Payment";
        arrowclass = 'hidden';
        codeclass = 'hidden';
        progressclass = 'hidden'; 
   }
            
   

    const [prog,setProg] = useState(0);
    // find the right progress to show on current page
    useEffect(()=>{
        for(var i=0;i<Data[0].projects.length;i++){
            if(ctx.appctx.curProject!=="" && Data[0].projects[i].name==ctx.appctx.curProject){
                var floors = Data[0].projects[i].floors;
                setProg(Data[0].projects[i].progress);
                console.log('set project progress');
                for (var i=0;i<floors.length;i++){
                    if(ctx.appctx.curFloor!==0 && floors[i].num==ctx.appctx.curFloor){
                        var windows = floors[i].windows;
                        setProg(floors[i].progress);
                        console.log('set floor progress');
                        for(var i=0;i<windows.length;i++){
                            if(ctx.appctx.curWindow!==0 && windows[i].num==ctx.appctx.curWindow){
                                setProg(windows[i].progress);
                                console.log('set window progress');
                            }
                        }
                    }
                }
            }
        }
    },[ctx.appctx.curPage,ctx.appctx.curFloor,ctx.appctx.curWindow]);
    

    return(
        <div className="pageTitle-cont">
            <div className="pageTitle">
                <div 
                className={arrowclass} 
                onClick={()=>{
                        ctx.appctx.curPage=='Floor'?
                        ctx.dispatch({type:'Floor',text:Number(ctx.appctx.curFloor)-1}):ctx.dispatch({type:'Window',text:Number(ctx.appctx.curWindow)-1});
                        
                }}>
                    <IoIosArrowBack />
                </div>
                <h3>{title}</h3>
                <div
                className={arrowclass}
                onClick={()=>{
                    ctx.appctx.curPage=='Floor'?
                    ctx.dispatch({type:'Floor',text:Number(ctx.appctx.curFloor)+1}):ctx.dispatch({type:'Window',text:Number(ctx.appctx.curWindow)+1})
                }}>   
                    <IoIosArrowForward />
                </div>
                <p className={codeclass}>{code}</p>
            </div>
            <div className={progressclass}>
                <ProgressBar progress={prog}/>   
            </div>
            
        </div>
    )
}


PageTitle.defaultProps = {
    title: "Window",
    code: "X7KJ2L",
    progress: 30
}

export default PageTitle;