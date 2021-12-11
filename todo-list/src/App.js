import './App.css';
import TaskList from './componentes/taskList';
import { useState } from 'react';
import Header from './componentes/Header';
import Character from './componentes/Character';
function App() {
  let tasks=["Paralelo A","Paralelo B","Paralelo C"]
  
  const[showTasks,setShowTasks]=useState(false);
  const handleClick=()=>{
    setShowTasks(!showTasks);
    console.log("showTasks",showTasks)
  }
  return (
    <div className="App">
      <header className="App-header">
      <Header/>
        <h1>Segunda Tarea...</h1>
        <button onClick={handleClick}>show</button>
        {showTasks && <TaskList tasks={tasks}/>}
        <Character/>
      </header>
    </div>
   
  );
}
export default App;
