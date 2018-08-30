import React, { Component } from "react";

class FormExample extends Component {
  state = {
    data: "Initial data..."
  };
  updateState = this.updateState.bind(this);

  updateState(e) {
    this.setState({ data: e.target.value });
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.data} onClick={this.updateState} />
        <h1>{this.state.data}</h1>
      </div>
    );
  }
}
export default FormExample;
