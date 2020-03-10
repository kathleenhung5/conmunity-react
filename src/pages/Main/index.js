import React,{useContext, useEffect} from 'react';
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
//   comps
import Profile from '../../comp/Profile';
import BreadCrumbs from '../../comp/BreadCrumbs';
import PageTitle from '../../comp/PageTitle';
// context
import {Contxt} from '../../App';
import {Data} from '../../comp/Data/Data';

function Main(){
    const ctx = useContext(Contxt);
    useEffect(()=>{
        // store the context in local storage
        localStorage.setItem('ctx', JSON.stringify(ctx.appctx));
    },[ctx.appctx.curPage,ctx.appctx.curFloor,ctx.appctx.curWindow]);


    return(
    <div className="main-cont">
        <Router >
            {/* Header */}
            <header>
                <Profile username={ctx.appctx.curUser} companyName={ctx.appctx.curCompany} />
                <BreadCrumbs page={ctx.appctx.curPage}/>
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
            </Switch>
        </Router>
    </div>
    )
}


export default Main;