import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import Tabs from "./components/Tabs";
import Content from './components/Content'
function App() {
  const[currrentContent,setCurrentContent]=useState("")
  const tabs=[
    {label:"tab1",content:"this is first tab",id:1},
    {label:"tab2",content:"this is second tab",id:2},
    {label:"tab3",content:"this is the third tab",id:3}
  ]
  
  const changeCurrentcontent=(content)=>{
    setCurrentContent(content);
  }
  return (
    <div className="App">
     <Tabs tabs={tabs} changeCurrentContent={changeCurrentcontent}/>      
     <Content currrentContent={currrentContent}/>
     
    </div>
  );
}

export default App;
