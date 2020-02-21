import React from 'react';
import './App.scss';
import Main from './pages/Main';

var ctx = {
  curPage: "Projects",
  curUser: "Ivan Kokovihin",
  curCompany: "High Rise Glass"
};
export const Contxt = React.createContext(ctx);

function App() {

  return (
    <div className="App">
      <Contxt.Provider value={ctx} >
        <Main />
      </Contxt.Provider>
    </div>
  );
}

export default App;
