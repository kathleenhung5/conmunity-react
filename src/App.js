import React,{useState} from 'react';
import './App.scss';
import Main from './pages/Main';


function App() {
  const [curPage,setCurPage] = useState("Window");
  const [curCompany, setCurCompany] = useState("Company Ltd");
  const [curUser, setCurUser] = useState("Username");

  return (
    <div className="App">
     <Main 
     curPage={curPage} 
     setCurPage = {setCurPage}
     curCompany={curCompany} 
     curUser={curUser}/>
    </div>
  );
}

export default App;
