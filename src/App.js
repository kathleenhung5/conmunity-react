import React,{useContext} from 'react';
import './App.scss';
import Main from './pages/Main';

const ctx = {
  curPage: "Project",
  curUser: "Ivan Kokovihin",
  curCompany: ""
};
const Contxt = React.createContext(ctx);

function App() {
  return (
    <Contxt.Provider value={ctx} className="App">
     <Main />
    </Contxt.Provider>
  );
}

export default App;
