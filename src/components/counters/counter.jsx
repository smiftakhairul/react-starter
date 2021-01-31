import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value,
    // imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"],
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("Counter - Updated");
    console.log("Counter - PrevProps", prevProps);
    console.log("Counter - prevState", prevState);

    if (prevProps.counter.value !== this.props.counter.value) {
      // do something
    }
  }

  componentWillUnmount() {
    console.log("Counter - Unmounted");
  }

  //   styles = {
  //     fontSize: 10,
  //     fontWeight: "bold",
  //   };

  //   constructor() {
  //     super();
  //     console.log("Debug constructor", this);
  //     // this.handleCounter = this.handleCounter.bind(this);
  //   }

  renderTags() {
    if (!this.state.tags.length) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value ? "info" : "warning";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value ? value : "Zero";
  }

  render() {
    // console.log("props", this.props);

    return (
      <React.Fragment>
        {this.props.children}
        {/* <img src={this.state.imageUrl} alt="" /> */}
        {/* <span style={this.styles} className="badge badge-info m-2"> */}
        <span
          style={{ fontSize: 10, fontWeight: "bold" }}
          className={this.getBadgeClasses()}
        >
          {this.formatCount()}
        </span>
        &nbsp;
        <button
          className="btn btn-sm btn-primary rounded-0"
          onClick={() =>
            this.props.onCounterUpdate("increase", this.props.counter)
          }
        >
          Increment
        </button>
        &nbsp;
        <button
          className="btn btn-sm btn-dark rounded-0"
          onClick={() =>
            this.props.onCounterUpdate("decrease", this.props.counter)
          }
        >
          Decrement
        </button>
        &nbsp;
        <button
          className="btn btn-sm btn-danger rounded-0"
          onClick={() =>
            this.props.onCounterUpdate("delete", this.props.counter)
          }
        >
          Delete
        </button>
        <br />
        {/* <br />
        <div>
          {!this.state.tags.length && <p>Please create a new tag!</p>}
          {this.renderTags()}
        </div> */}
      </React.Fragment>
    );
  }
}

export default Counter;
