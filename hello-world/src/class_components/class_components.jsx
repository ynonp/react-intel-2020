import React from "react";

// <Counter /> => <WithCounter><Counter /></WithCounter>

// Higher Order Component
function withCounter(Component) {
  return class WithCounter extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
      this.inc = this.inc.bind(this);
    }

    inc(step=1) {
      this.setState({ count: this.state.count + step });
    }

    render() {
      return <Component count={this.state.count} inc={this.inc} {...this.props} />
    }
  }
}

const AnotherCounter = withCounter(class AnotherCounter extends React.Component {
  render() {
    return <button onClick={this.props.inc}>Clicked: {this.props.count} times</button>;
  }
});

const Counter = withCounter(class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { step: 1 };
    this.handleDeltaChange = this.handleDeltaChange.bind(this);
  }

  handleDeltaChange(e) {
    this.setState({ step: Number(e.target.value) });
  }

  render() {
    const { step } = this.state;

    return (
      <div>
        <p>Clicks: {this.props.count}</p>
        <input type="number" value={step} onChange={this.handleDeltaChange} />
        <button onClick={() => this.props.inc(this.state.step)}>Click Me</button>
      </div>
    )
  }
});


export default function Demo() {
  return (
    <div>
      <Counter/>
      <AnotherCounter/>
      <AnotherCounter/>
    </div>
  )
}