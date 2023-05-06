import { useEffect, useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import Header from './components/Header';
import ShowTask from './components/ShowTask';



function App() {

  const [tasks,setTasks]=useState(JSON.parse(localStorage.getItem('tasklist'))||[{id:10001,name:'TASK A', time:'2:09:01 AM 05/04/2023'},
              {id:10002,name:'TASK B', time:'2:09:01 AM 05/04/2023'},
              {id:10003,name:'TASK C', time:'2:09:01 AM 05/04/2023'}]
  )
  const[themeActive,setThemeActive]=useState('');

  const[input,setInput]=useState({});


  useEffect(()=>{
    let theme=localStorage.getItem('theme')|| null;
    setThemeActive(theme===null ? 'gradientOne':theme);
  },[])
  useEffect(()=>{
    localStorage.setItem('theme',themeActive);
  },[themeActive]);
  
  useEffect(()=>{
    localStorage.setItem('tasklist',JSON.stringify(tasks))
  },[tasks])

  
  return (
    <div className={`App ${themeActive}`}>
      <div className={"container"} >
          <Header themeActive={themeActive} setThemeActive={setThemeActive}  />
          <AddTask setTasks={setTasks} tasks={tasks} input={input} setInput={setInput} />
          <ShowTask tasks={tasks} setTasks={setTasks} setInput={setInput} />
      </div>
    </div>
  );
}

export default App;
