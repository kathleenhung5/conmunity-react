import React,{useContext} from 'react';
import {FiAlertCircle} from 'react-icons/fi';
import ProgressBar from '../ProgressBar';
import CheckBox from '@material-ui/core/Checkbox';
import {Link} from 'react-router-dom';
import {Contxt} from '../../App';


function Item({itemName, alert, editMode, progress}){
    const ctx=useContext(Contxt);

        // Show and hide Alert
        var itemAlertClass = "";
        if(alert){
            itemAlertClass = "itemAlert";
        } else {
            itemAlertClass = "itemAlert invisible";
        }

    return (
        <Link 
        to={ctx.appctx.curPage=='Project'?"/floor":"/window"} 
        className="item-cont"
        onClick={()=>ctx.dispatch({type: ctx.appctx.curPage=='Project'?'Floor':'Window',text:`${itemName}`})}
        >
            <div className="item" >
            <h3>{ctx.appctx.curPage=='Project'?"Floor ":"Window "}{itemName}</h3>
                <ProgressBar progress={progress} />
                <div className={itemAlertClass}><FiAlertCircle /></div>
            </div>
            <CheckBox style={{visibility: editMode? "visible":"hidden"}} />
        </Link>
    )

}

Item.defaultProps = {
    itemName: 'Floor 1',
    progress: 0,
    alert: false,
    editMode:false, 
    editSelected:false, 
    complete: false
    // onClick:()=>{}
}

export default Item;