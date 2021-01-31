import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onCounterReset, onCounterUpdate, counters } = this.props;

    return (
      <React.Fragment>
        <div>
          <br />
          <button
            className="btn btn-sm btn-primary rounded-0"
            onClick={onCounterReset}
          >
            Reset
          </button>
          <br />
          <br />
          {counters.map((counter) => (
            <Counter
              key={counter.id}
              counter={counter}
              onCounterUpdate={onCounterUpdate}
            >
              {/* <span>
                Counter #{counter.id} <br />
              </span> */}
            </Counter>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Counters;
