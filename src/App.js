import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [],
  };

  constructor() {
    super();
    console.log("App - Constructed");
  }

  componentDidMount() {
    // ajax or api call
    console.log("App - Mounted");
    const counters = [
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
      { id: 4, value: 4 },
    ];
    this.setState({ counters });
  }

  componentWillUnmount() {
    console.log("App - Unmounted");
    this.setState({ counters: [] });
  }

  // handleDelete = (counterId) => {
  //   const counters = this.state.counters.filter(
  //     (counter) => counter.id !== counterId
  //   );
  //   this.setState({ counters });
  // };

  handleReset = () => {
    const counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });

    this.setState({ counters });
  };

  handleCounter = (type, counter) => {
    // console.log(type);
    // this.state.value++;

    let counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    // counters[index] = { ...counter };
    // counters[index].value++;

    if (type === "increase") {
      counters[index].value++;
    } else if (type === "decrease" && counters[index].value > 0) {
      counters[index].value--;
    } else if (type === "delete") {
      counters.splice(index, 1);
    }

    this.setState({ counters });
  };

  render() {
    console.log("App - Rendered");

    return (
      <React.Fragment>
        <Navbar
          totalCounters={
            this.state.counters.filter((counter) => counter.value > 0).length
          }
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onCounterUpdate={this.handleCounter}
            onCounterReset={this.handleReset}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
