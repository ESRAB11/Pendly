import React from 'react';

const Header = ({ undoAction, redoAction, canUndo, canRedo }) => {
  return (
    <header className="app-header">
      <div className="logo">
        <h1>Pendly</h1>
        <p>Tu gestor de tareas inteligente</p>
      </div>
      <div className="action-buttons">
        <button 
          onClick={undoAction} 
          disabled={!canUndo}
          className="undo-btn"
        >
          ↩ Deshacer
        </button>
        <button 
          onClick={redoAction} 
          disabled={!canRedo}
          className="redo-btn"
        >
          Rehacer ↪
        </button>
      </div>
    </header>
  );
};

export default Header;