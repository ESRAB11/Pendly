import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import CategoryFilter from './components/CategoryFilter';
import { useTasks } from './hooks/useTasks';
import './App.css';

function App() {
  const { 
    tasks, 
    addTask, 
    completeTask, 
    deleteTask, 
    undoAction, 
    redoAction,
    canUndo,
    canRedo,
    filteredTasks,
    setFilter,
    activeFilter
  } = useTasks();

  return (
    <div className="app-container">
      <Header 
        undoAction={undoAction} 
        redoAction={redoAction} 
        canUndo={canUndo} 
        canRedo={canRedo} 
      />
      <main>
        <TaskForm addTask={addTask} />
        <CategoryFilter setFilter={setFilter} activeFilter={activeFilter} />
        <TaskList 
          tasks={filteredTasks} 
          onComplete={completeTask} 
          onDelete={deleteTask} 
        />
      </main>
    </div>
  );
}

export default App;