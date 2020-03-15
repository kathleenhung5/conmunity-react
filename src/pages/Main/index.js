import React,{useContext, useEffect, useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
//   pages
import Projects from '../Projects';
import ProjectPage from '../ProjectPage';
import Floor from '../Floor';
import Window from '../Window';
import Pay from '../Pay';
import Upgrade from '../Upgrade';
import Template from '../Template';
//   comps
import Profile from '../../comp/Profile';
import BreadCrumbs from '../../comp/BreadCrumbs';
import PageTitle from '../../comp/PageTitle';
// context
import {Contxt} from '../../App';
import {Data} from '../../comp/Data/Data';

function Main(){
    const ctx = useContext(Contxt);
    const [paid,setPaid] = useState(false);
    useEffect(()=>{
        // store the context in local storage
        localStorage.setItem('ctx', JSON.stringify(ctx.appctx));
        setPaid(localStorage.getItem('paid'));
    },[ctx.appctx.curPage,ctx.appctx.curFloor,ctx.appctx.curWindow,ctx.appctx.upgrade]);


// console.log('paid',paid);
    return(
    <div className="main-cont">
        <Router >
            {/* Header */}
            <header>
                <Profile username={ctx.appctx.curUser} companyName={ctx.appctx.curCompany} />
                <BreadCrumbs page={ctx.appctx.curPage} />
                <Link 
                to={paid?"/template":"/upgrade"}
                className="create-template"
                onClick={()=>{paid?ctx.dispatch({type:'Project',curProject: ctx.appctx.curProject}):ctx.dispatch({type:'Upgrade'})}}
                >Create a template</Link>
            </header>
            {/* Page title */}
            <div>
                <PageTitle />
            </div>
            {/* Content */}
            <Switch >
                <Route exact path="/">
                    <Projects />
                </Route>
                <Route path="/projectpage">
                    <ProjectPage />
                </Route>
                <Route path="/floor">
                    <Floor />
                </Route>
                <Route path="/window">
                    <Window />
                </Route>
                <Route path="/pay">
                    <Pay />
                </Route>
                <Route path="/upgrade">
                    <Upgrade />
                </Route>
                <Route path="/template">
                    <Template />
                </Route>
            </Switch>
        </Router>
    </div>
    )
}


export default Main;