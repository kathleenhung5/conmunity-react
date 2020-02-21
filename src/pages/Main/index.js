import React,{useContext} from 'react';
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
//   comps
import Profile from '../../comp/Profile';
import BreadCrumbs from '../../comp/BreadCrumbs';
import PageTitle from '../../comp/PageTitle';
// context
import {Contxt} from '../../App';

function Main(){
    const ctx = useContext(Contxt);

    return(
    <div className="main-cont">
        <Router >
            {/* Header */}
            <header>
                <Profile username={ctx.curUser} companyName={ctx.curCompany} />
                <BreadCrumbs page={ctx.curPage}/>
            </header>
            {/* Page title */}
            <div>
                <PageTitle title={ctx.curPage}/>
            </div>
            {/* Content */}
            <Switch>
                <Route path="/">
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
            </Switch>
        </Router>
    </div>
    )
}


export default Main;