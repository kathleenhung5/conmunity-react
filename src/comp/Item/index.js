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
        <div className="item-cont">
            <Link 
            to={ctx.appctx.curPage=='Project'?"/floor":"/window"} 
            className="item"
            onClick={()=>{
                ctx.dispatch({type: ctx.appctx.curPage=='Project'?'Floor':'Window',text:`${itemName}`});
            }}
            >
              
                <h3>{ctx.appctx.curPage=='Project'?"Floor ":"Window "}{itemName}</h3>
                    <ProgressBar progress={progress} />
                    <div className={itemAlertClass}><FiAlertCircle /></div>
            
            
            </Link>
            <CheckBox style={{visibility: editMode? "visible":"hidden"}} />
         </div>
    )

}

Item.defaultProps = {
    itemName: '',
    progress: 0,
    alert: false,
    editMode:false, 
    editSelected:false, 
    complete: false
    // onClick:()=>{}
}

export default Item;