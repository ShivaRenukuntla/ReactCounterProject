import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
    // tags: ["tag1", "tag2", "tag3"]
  };

  styles = {
    fontSize: 20,
    fontWeight: "bold"
  };

  handleIncrement = () => {
    // console.log(product);
    this.setState({ value: this.state.value + 1 });
  };
  handleDecrement = () => {
    let count1 = this.state.value;
    if (count1 > 0) {
      this.setState({ value: this.state.value - 1 });
    } else if (count1 === 0) {
      this.setState({ value: 0 });
    }
  };

  render() {
    console.log(this.props);
    return (
      <div>
        {/* <h4>{this.props.id}</h4> */}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          style={this.styles}
          onClick={() => this.handleIncrement()}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        <button
          style={this.styles}
          onClick={this.handleDecrement}
          className="btn btn-secondary btn-sm m-3"
        >
          Decrement
        </button>
        {/* <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
