import React, { Component } from "react";
import { ReactDOM } from "react-dom";

class RefExample extends Component {
  state = {
    data: ""
  };
  updateMyData = this.updateMyData.bind(this);
  clearData = this.clearData.bind(this);

  updateMyData(e) {
    this.setState({ data: e.target.value });
  }

  clearData() {
    this.setState({ data: "" });
    ReactDOM.findDOMNode(this.refs.myInput).focus();
  }

  render() {
    return (
      <div>
        <input
          value={this.state.data}
          onChange={this.updateMyData}
          ref="myInput"
        />
        <button onClick={this.clearData}>Clear</button>
        <h1>{this.state.data}</h1>
      </div>
    );
  }
}
export default RefExample;
