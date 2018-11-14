import React, { Component } from "react";

// Create the component
class App extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h3 className="display-4">Hello, World!</h3>
          <p className="lead">Boilerplate for React application developement</p>
          <p className="lead">Includes Parcel bundler and bootstrap</p>
          <a className="btn btn-primary btn" href="#" role="button">
            Learn more
          </a>
        </div>
      </div>
    );
  }
}

// Export the App component
export default App;
