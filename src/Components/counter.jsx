import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
    // tags: ["tag1", "tag2", "tag3"]
  };

  styles = {
    fontSize: 20,
    fontWeight: "bold"
  };

  handleIncrement = () => {
    // console.log(product);
    this.setState({ count: this.state.count + 1 });
  };
  handleDecrement = () => {
    let count1 = this.state.count;
    if (count1 > 0) {
      this.setState({ count: this.state.count - 1 });
    } else if (count1 === 0) {
      this.setState({ count: 0 });
    }
  };

  render() {
    return (
      <div>
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
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
