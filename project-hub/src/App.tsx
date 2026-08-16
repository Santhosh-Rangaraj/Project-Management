import { useState } from 'react'
import './App.css'
import AppLayout from './components/layout/AppLayout'
import { Routes,Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Tasks from './pages/Tasks';
import Kanban from './pages/Kanban';
import Settings from './pages/Settings';
import Project from './pages/Project';


function App() {
  return (
  <>
   <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  </>
  )
}

export default App
