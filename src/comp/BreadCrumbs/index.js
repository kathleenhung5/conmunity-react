import React, { useContext } from 'react';
import BreadCrumbItem from './BreadCrumbsItem';
import {Contxt} from '../../App';
import {Data} from '../Data/Data';

function BreadCrumbs({page}){
    const ctx = useContext(Contxt);
    var bc1 = '';
    var bc2 = '';
    var bc3 = '';

    // var prog = 0;
    // // find the right progress to show on current page
    // for(var i=0;i<Data[0].projects.length;i++){
    //     if(ctx.appctx.curProject!=="" && Data[0].projects[i].name==ctx.appctx.curProject){
    //         var floors = Data[0].projects[i].floors;
    //         prog = Data[0].projects[i].progress;
    //         console.log('1');
    //         for (var i=0;i<floors.length;i++){
    //             if(ctx.appctx.curFloor!==0 && floors[i].num==ctx.appctx.curFloor){
    //                 var windows = floors[i].windows;
    //                 prog = floors[i].progress;
    //                 console.log('2',i);
    //                 for(var i=0;i<windows.length;i++){
    //                     if(ctx.appctx.curWindow!==0 && windows[i].num==ctx.appctx.curWindow){
    //                         prog = windows[i].progress;
    //                         console.log('3');
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // }
    // Based on current page, show/hide breadcrumb item
    switch(page){
        case "Projects":
            bc1="hidden";
            bc2="hidden";
            bc3="hidden";
            break
        case "Project":
            bc2="hidden";
            bc3="hidden";
            break
        case "Floor":
            bc3="hidden";
            break;
    }

    return(
        <div>
            <span className={bc1}>
                <BreadCrumbItem  
                page="Projects" 
                active={page==="Projects"}
                topage="/"
                onClick={()=>{
                    ctx.dispatch({type:'Projects'});
                }}
                 />
            </span>
            <span className={bc1}>>
                <BreadCrumbItem 
                page="Project" 
                active={page==="Project"} 
                topage="/projectpage"
                onClick={()=>{
                    ctx.dispatch({type:'Project', text:ctx.appctx.curProject});
                }}
                />
            </span>
            <span className={bc2}>>
                <BreadCrumbItem 
                page="Floor" 
                active={page==="Floor"} 
                topage="/floor"
                onClick={()=>{
                    ctx.dispatch({type:'Floor', text:ctx.appctx.curFloor});
                }}
                />
            </span>
            <span className={bc3}>>
                <BreadCrumbItem 
                page="Window" 
                active={page==="Window"} 
                topage="/window"
                />
            </span>
        </div>
    )
}

BreadCrumbs.defaultProps = {
    page : 'Window'
}

export default BreadCrumbs;