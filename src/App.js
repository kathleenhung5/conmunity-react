import React, { useReducer } from 'react';
import './App.scss';
import Main from './pages/Main';
import {Data} from './comp/Data/Data';

// initial context
const ctx = {
  curPage: localStorage.getItem('ctx')?JSON.parse(localStorage.getItem('ctx')).curPage:"Projects", // Projects, Project, Floor, Window
  curProject: localStorage.getItem('ctx')?JSON.parse(localStorage.getItem('ctx')).curProject:"", // Project name
  curFloor: localStorage.getItem('ctx')?JSON.parse(localStorage.getItem('ctx')).curFloor:0,  // int
  curWindow: localStorage.getItem('ctx')?JSON.parse(localStorage.getItem('ctx')).curWindow:0, // int
  curUser: Data[0].username,
  curCompany: Data[0].company,
  curProgress: localStorage.getItem('ctx')?JSON.parse(localStorage.getItem('ctx')).curProgress:0  // int
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
        };
        break
    case 'Project':
        return {...appctx,
          curPage: 'Project', 
          curProject: action.text, 
          curFloor: 0,
          curWindow: 0,
        };
        break
    case 'Floor':
        return {...appctx,
          curPage: 'Floor', 
          curFloor: action.text,
          curWindow: 0,
        };
        break
    case 'Window':
        return {...appctx,
          curPage: 'Window', 
          curWindow: action.text,
        };
        break
    // When the page reloads, set the context from local storage
    case 'Reload':  
        return {
          curPage: action.curPage, 
          curProject: action.curPage,
          curFloor: action.curPage,
          curWindow: action.curWindow,
          curUser: action.curUser,
          curCompany: action.curCompany,
          curProgress: action.curProgress
        }
        break
    case 'Progress':
      return {
        ...appctx,
        curProgress: action.progress
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
