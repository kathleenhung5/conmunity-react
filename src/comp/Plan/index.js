import React,{useContext} from 'react';
import {MdCheck} from 'react-icons/md';
import Button from '../Button';
import {Link} from "react-router-dom";
import {Contxt} from '../../App';


function Plan({current, name, price, feature}){
    const ctx = useContext(Contxt);
    return(
        <div className="plan-cont">
            <p className={current?'plan-current':'plan-current hidden'}>Your current plan</p>
            <h2>{name}</h2>
            <h3>{price}</h3>
            <div className='feature-list'>
            {
                feature.map((obj,ind)=>{
                    return <Feature 
                    text={obj.feat} />
                })
            }
            </div>
            {current?null:<Link to="/pay" onClick={()=>{ctx.dispatch({type:'Pay'})}}><Button 
            text='UPGRADE'/></Link>}
        </div>
    )
}

function Feature({text}){
    return (
        <div className="plan-feature">
            <MdCheck />
            <h5>{text}</h5>
        </div>
    )
}

Plan.defaultProps = {
    current: false,
    name: 'Plan Name',
    price: '$Moneeeey',
    feature: [
        {feat:'Super Cool'},
        {feat:'Super Fast'}
    ]
}

export default Plan;