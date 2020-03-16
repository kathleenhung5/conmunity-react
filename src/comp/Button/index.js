import React from 'react';

function Button({text,type,onClick}){
var cn = 'button-cont';
var txt = 'white';
switch(type){ 
    case 'blue-fill':
        cn = 'button-cont blue-fill';
        break;
    case 'red-fill':
        cn = 'button-cont red-fill';
        break;
    case 'blue-outline':
        cn = 'button-cont blue-outline';
        txt = 'blue';
        break;
    case 'grey-outline':
        cn = 'button-cont grey-outline';
        txt = 'grey';
        break;
}

    return (
        <div className={cn} onClick={onClick}>
            <h4 className={txt}>{text}</h4>
        </div>
    )
}

Button.defaultProps = {
    text: 'Button',
    type: 'blue-fill',
    onClick: ()=>{}
}

export default Button;