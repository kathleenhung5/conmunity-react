
import React,{useContext} from 'react';
import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io';
import ProgressBar from '../ProgressBar';
import {Contxt} from '../../App';

function PageTitle({title,code,progress}){
    const ctx=useContext(Contxt);
    // console.log('pagetitle, curpage',ctx.appctx.curPage);
    // console.log('pagetitle curproject', ctx.appctx.curProject);
    switch(ctx.appctx.curPage){
        case 'Projects':
            title = "Projects";
            break
        case 'Project':
            title = ctx.appctx.curProject;
            break
        case 'Floor':
            title = "Floor " + ctx.appctx.curFloor;
            break
        case 'Window':
            title = "Window " + ctx.appctx.curWindow;
    }
    return(
        <div className="pageTitle-cont">
            <div className="pageTitle">
                <IoIosArrowBack className="arrow" />
                <h3>{title}</h3>
                <IoIosArrowForward className="arrow"/>
                <p className="proj-code">{code}</p>
            </div>
            <div className="pageTitle-progress">
                <ProgressBar progress={progress}/>   
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