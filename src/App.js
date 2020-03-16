import React, { useReducer } from 'react';
import './App.scss';
import Main from './pages/Main';
import {Data} from './comp/Data/Data';

// initial
const ctx = {
  curPage: localStorage.getItem('ctx')?JSON.parse(localStorage.getItem('ctx')).curPage:"Projects", // Projects, Project, Floor, Window
  curProject: localStorage.getItem('ctx')?JSON.parse(localStorage.getItem('ctx')).curProject:"", // Project name
  curFloor: localStorage.getItem('ctx')?JSON.parse(localStorage.getItem('ctx')).curFloor:0,  // int
  curWindow: localStorage.getItem('ctx')?JSON.parse(localStorage.getItem('ctx')).curWindow:0, // int
  curUser: Data[0].username,
  curCompany: Data[0].company,
  curProgress: localStorage.getItem('ctx')?JSON.parse(localStorage.getItem('ctx')).curProgress:0,  // int
  upgrade: 0 //default 0, on upgrade page is 1, on payment page is 2
};
export const Contxt = React.createContext(ctx);


function reducer(appctx,action){
  // type - the page the app is changing too
  switch (action.type) {
    case 'Projects':
        return {...appctx,
          curPage: 'Projects',
          curProject: "",
          curFloor: 0,
          curWindow: 0,
          curProgress:0,
          upgrade:0
        };
        break
    case 'Project':
        return {...appctx,
          curPage: 'Project', 
          curProject: action.text, 
          curFloor: 0,
          curWindow: 0,
          upgrade:0
        };
        break
    case 'Floor':
        return {...appctx,
          curPage: 'Floor', 
          curFloor: action.text,
          curWindow: 0,
          upgrade:0
        };
        break
    case 'Window':
        return {...appctx,
          curPage: 'Window', 
          curWindow: action.text,
          upgrade:0
        }
        break
    case 'Progress':
      return {
        ...appctx,
        curProgress: action.progress
      }
    // When the page reloads, set the context from local storage
    case 'Reload':  
        return {
          curPage: action.curPage, 
          curProject: action.curPage,
          curFloor: action.curPage,
          curWindow: action.curWindow,
          curUser: action.curUser,
          curCompany: action.curCompany,
          curProgress: action.curProgress,
          upgrade:0
        }
        break  
    // When the user goes to upgrade/pay page. This way when the page refreshes, it shows where the user was before entering these two pages. 
    case 'Upgrade':
      return {
        ...appctx,
        upgrade: 1
      }  
      break
    case 'Pay':
      return {
        ...appctx,
        upgrade: 2
      }
      break
      // go to template page
    case 'Template':
      return {
        ...appctx,
        curPage: 'Project', 
        curFloor: 0,
        curWindow: 0,
        upgrade:0
      }
  }
  
}

function App() {
  const [appctx,dispatch] = useReducer(reducer, ctx);
  
  return (
    <div className="App">
      <Contxt.Provider value={{appctx,dispatch}} >
        <Main />
      </Contxt.Provider>
    </div>
  );
}

export default App;
