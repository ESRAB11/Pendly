import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onComplete, onDelete }) => {
  if (tasks.length === 0) {
    return <p className="empty-list">No hay tareas pendientes. ¡Añade una nueva tarea!</p>;
  }

  return (
    <div className="task-list">
      <h2>Tareas Pendientes</h2>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onComplete={onComplete}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;