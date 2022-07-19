import React from 'react';
import './Counter.css';

const Controls = ({ onIncrement, onDecrement }) => (
  <div className="Counter__controls">
    <button type="button" onClick={onIncrement}>
      Збільшити
    </button>

    <button type="button" onClick={onDecrement}>
      зменшити
    </button>
  </div>
);

export default Controls;
