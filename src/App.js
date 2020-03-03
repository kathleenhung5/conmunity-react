import React, { useReducer } from 'react';
import './App.scss';
import Main from './pages/Main';
import {Data} from './comp/Data/Data';

const ctx = {
  curPage: "Projects", // Projects, Project, Floor, Window
  curProject: "",
  curFloor: 0,
  curWindow: 0,
  curUser: Data[0].username,
  curCompany: Data[0].company,
  curProgress: 0
};
export const Contxt = React.createContext(ctx);

function reducer(appctx,action){
  switch (action.type) {
    case 'Projects':
        return {...appctx,curPage: 'Projects'};
        break
    case 'Project':
        return {...appctx,curPage: 'Project', curProject: action.text, curProgress:action.progress};
        break
    case 'Floor':
        return {...appctx,curPage: 'Floor', curFloor: action.text,curProgress:action.progress};
        break
    case 'Window':
        return {...appctx,curPage: 'Window', curWindow: action.text,curProgress:action.progress};
        break
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
