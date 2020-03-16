import React from 'react';
import Plan from '../../comp/Plan';

function Upgrade(){
    return(
        <div className="upgrade-cont">
            <Plan 
            current={true}
            name='FREE' 
            price='$0' 
            feature={[
                {feat:'1 Project'},
                {feat:'4 Contributors'}
            ]}
            />
            <Plan 
            current={false}
            name='PREMIUM' 
            price="$200/month"
            feature={[
                {feat:'Unlimited Projects'},
                {feat:'Unlimited Contributors'},
                {feat:'Project Analytics'},
                {feat:'Customizable Templates'}
            ]}/>
        </div>
    )
}

export default Upgrade;