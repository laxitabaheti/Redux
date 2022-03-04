import { Component } from "react";
import { connect } from "react-redux";
import Card from "../UI/Card/Card";

class Counter extends Component {
  incrementHandler = (props) => {
    this.props.increment();
  };
  decrementHandler = (props) => {
    this.props.decrement();
  };
  toggleHandler = (props) => {
    this.props.toggle();
  };

  render() {
    return (
      <Card>
        <div>Redux Counter</div>
        <div>{this.props.counter}</div>
        <div>
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        </div>
        <button onClick={this.toggleHandler.bind()}>Toggle Counter</button>
      </Card>
    );
  }
}
const mapsPropsToState = (state) => {
  return {
    counter: state.counter
  };
};

const mapdispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "increment" }),
    decrement: () => dispatch({ type: "decrement" }),
    toggle: () => dispatch({ type: "toggle" })
  };
};

export default connect(mapsPropsToState, mapdispatchToProps)(Counter);
