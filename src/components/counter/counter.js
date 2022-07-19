import React from 'react';
import Controls from './controls';
import Value from './value';
import './Counter.css';

class Counter extends React.Component {
  //   constructor() {
  //     super();
  //     this.state = {
  //       value: 5,
  //     };
  //     }

  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {};

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    // console.log('++');
    // //   const target = event.target;
    // const { target } = event;
    // setTimeout(() => {
    //   console.log(target);
    // }, 1000);
    // this.setState({ value: 10 });
    this.setState(prevState => {
      return {
        value: prevState.value + 1,
      };
    });
  };

  handleDecrement = () => {
    this.setState(prevState => ({ value: prevState.value - 1 }));
  };

  render() {
    return (
      <div className="Counter">
        <Value value={this.state.value} />

        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Counter;
