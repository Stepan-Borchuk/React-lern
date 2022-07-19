import React, { Component } from 'react';
import './Dropdown.css';

class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({ visible: !prevState.visible }));
  };

  render() {
    return (
      <div className="Dropdown">
        <button
          type="button"
          onClick={this.toggle}
          className="Dropdown__toggle"
        >
          {this.state.visible ? 'Приховати' : 'Показати'}
        </button>

        {this.state.visible && <div className="Dropdown__menu">Меню</div>}
      </div>
    );
  }
}

export default Dropdown;
