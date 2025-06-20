import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";

class App extends React.Component {
  constructor(props) {
    super(props);
    //State Initialization
    this.state = { lat: null, errorMessage: "" };
  }
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (this.state.lat && !this.state.errorMessage) {
      return (
        <div>
          <SeasonDisplay lat={this.state.lat} />
        </div>
      );
    }
    return <Loader />;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
