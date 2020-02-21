import React,{useContext} from 'react';
import Profile from '../../comp/Profile';
import BreadCrumbs from '../../comp/BreadCrumbs';


function Main(){
    const ctx = useContext(Contxt);
    return(
        <div className="main-cont">
            {/* Header */}
            <header>
            <Profile />
                <BreadCrumbs />
            </header>
            
        </div>
    )
}


export default Main;