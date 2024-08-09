import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './Sidebar.jsx'
import Nav from './NavSection.jsx'
import TodoTasks from './TodoTasks.jsx'
import DoingTasks from './DoingTasks.jsx'
import DoneTask from './DoneTask.jsx'

function App() {
 return(
  <div className='container'>
    <Sidebar/>
    <section>
      <Nav/>
      <div className='task'>
        <TodoTasks totalTasks={4}/>
        <DoingTasks totalTasks={4}/>
        <DoneTask totalTasks={4}/>
      </div>
    </section>
  </div>
 )
}

export default App
