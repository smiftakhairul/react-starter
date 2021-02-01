import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/common/navbar";
import Counters from "./components/counters/counters";
import Home from "./components/home/home";
import Test from "./components/test/test";

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
    console.log(process.env);
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
        <Router>
          <Navbar
            totalCounters={
              this.state.counters.filter((counter) => counter.value > 0).length
            }
          />
          <main className="container">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/counters">
                <Counters
                  counters={this.state.counters}
                  onCounterUpdate={this.handleCounter}
                  onCounterReset={this.handleReset}
                />
              </Route>
              <Route path="/test">
                <Test />
              </Route>
            </Switch>

            {/* <Counters
            counters={this.state.counters}
            onCounterUpdate={this.handleCounter}
            onCounterReset={this.handleReset}
          /> */}
          </main>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
