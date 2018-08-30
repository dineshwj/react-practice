import React, { Component } from 'react';

class EventExample extends Component{
    state = {
        data : "Initial Data Fetching..."
    };
    updateStateData = this.updateStateData.bind(this);

    updateStateData(){
        this.setState({data: 'Data updated...'})
    }
    render(){
        return(
            <div>
                <button onClick = {this.updateStateData}>Click Me</button>
                <h1>{this.state.data}</h1>
            </div>
        )
    }
}
export default EventExample;