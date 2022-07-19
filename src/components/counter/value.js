import React from 'react';
import './Counter.css';

const Value = ({ value }) => (
  <span className="Counter__value">Количество кликов: {value}</span>
);

export default Value;
