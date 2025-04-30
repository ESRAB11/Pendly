import { useState, useEffect } from 'react';

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [filter, setFilter] = useState('Todas');

  // Cargar tareas del localStorage al iniciar
  useEffect(() => {
    const savedTasks = localStorage.getItem('pendly_tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Guardar tareas en localStorage cuando cambian
  useEffect(() => {
    localStorage.setItem('pendly_tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Función para guardar el estado actual en el historial
  const saveToHistory = (currentTasks) => {
    // Si estamos en medio del historial, eliminar los estados futuros
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push([...currentTasks]);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  // Añadir tarea
  const addTask = (task) => {
    const newTasks = [...tasks, task];
    setTasks(newTasks);
    saveToHistory(newTasks);
  };

  // Completar tarea
  const completeTask = (id) => {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
    saveToHistory(newTasks);
  };

  // Eliminar tarea
  const deleteTask = (id) => {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
    saveToHistory(newTasks);
  };

  // Deshacer acción
  const undoAction = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
      setTasks(history[historyIndex - 1]);
    }
  };

  // Rehacer acción
  const redoAction = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1);
      setTasks(history[historyIndex + 1]);
    }
  };

  // Filtrar tareas por categoría
  const filteredTasks = filter === 'Todas' 
    ? tasks 
    : tasks.filter(task => task.category === filter);

  return {
    tasks,
    addTask,
    completeTask,
    deleteTask,
    undoAction,
    redoAction,
    canUndo: historyIndex > 0,
    canRedo: historyIndex < history.length - 1,
    filteredTasks,
    setFilter: (category) => setFilter(category),
    activeFilter: filter
  };
};