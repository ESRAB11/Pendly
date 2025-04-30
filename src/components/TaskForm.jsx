import React, { useState } from 'react';
import { classifyTask } from '../services/api';

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isClassifying, setIsClassifying] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!title.trim()) return;

    setIsClassifying(true);
    
    try {
      // Llamar a la API para clasificar la tarea
      const response = await classifyTask({ titulo: title, contenido: content });
      const category = response.categoria;
      
      // Añadir la tarea con la categoría detectada
      addTask({
        id: Date.now(),
        title,
        content,
        category,
        completed: false,
        createdAt: new Date()
      });
      
      // Limpiar el formulario
      setTitle('');
      setContent('');
    } catch (error) {
      console.error('Error al clasificar la tarea:', error);
      // En caso de error, añadir sin categoría
      addTask({
        id: Date.now(),
        title,
        content,
        category: 'Sin categoría',
        completed: false,
        createdAt: new Date()
      });
    } finally {
      setIsClassifying(false);
    }
  };

  return (
    <div className="task-form-container">
      <h2>Añadir Nueva Tarea</h2>
      <form onSubmit={handleSubmit} className="task-form">
        <input
          type="text"
          placeholder="Título de la tarea"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Descripción de la tarea"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit" disabled={isClassifying}>
          {isClassifying ? 'Clasificando...' : 'Añadir Tarea'}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;