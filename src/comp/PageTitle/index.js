
import React,{useContext} from 'react';
import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io';
import ProgressBar from '../ProgressBar';
import {Contxt} from '../../App';

function PageTitle({title,code,progress}){
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
    }
    return(
        <div className="pageTitle-cont">
            <div className="pageTitle">
                <IoIosArrowBack className={arrowclass} />
                <h3>{title}</h3>
                <IoIosArrowForward className={arrowclass}/>
                <p className={codeclass}>{code}</p>
            </div>
            <div className={progressclass}>
                <ProgressBar progress={ctx.appctx.curProgress}/>   
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