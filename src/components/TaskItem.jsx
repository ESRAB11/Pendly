import React from 'react';

const TaskItem = ({ task, onComplete, onDelete }) => {
  const getCategoryColor = (category) => {
    const colors = {
      'Trabajo': '#ff7675',
      'Estudio': '#74b9ff',
      'Salud': '#55efc4',
      'Compras': '#ffeaa7',
      'Finanzas': '#a29bfe',
      'Ocio': '#fdcb6e',
      'Viajes': '#ff9ff3',
      'Hogar': '#81ecec',
      'Administrativo': '#fab1a0',
      'Sin categoría': '#dfe6e9'
    };
    
    return colors[category] || colors['Sin categoría'];
  };

  return (
    <div className="task-item">
      <div 
        className="category-indicator" 
        style={{ backgroundColor: getCategoryColor(task.category) }}
      />
      <div className="task-content">
        <h3>{task.title}</h3>
        <p>{task.content}</p>
        <div className="task-meta">
          <span className="task-category">{task.category}</span>
          <span className="task-date">
            {new Date(task.createdAt).toLocaleDateString()}
          </span>
        </div>
      </div>
      <div className="task-actions">
        <button onClick={() => onComplete(task.id)} className="complete-btn">
          ✓
        </button>
        <button onClick={() => onDelete(task.id)} className="delete-btn">
          ✕
        </button>
      </div>
    </div>
  );
};

export default TaskItem;