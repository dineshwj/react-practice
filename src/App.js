import React, { Component } from 'react';
import './App.css';
import Parent from './component/parent'
import FormExample from './component/forms_example'
import EventExample from './component/event_example'
import RefExample from './component/ref_example';
import KeyExample from './key_Example';
import Dropdown from './component/drop_down';

class App extends Component {
  
  constructor(){
     super();
     this.state = {
       count : 0
     }
     console.log('Console');
    };
    componentWillMount(){
      console.log('componentWillMount');
    };
    componentDidMount(){
      console.log('componentDidMount');
    };
    shouldComponentUpdate(){
      console.log('shouldComponentUpdate');
      if(this.state.count > 10){
        return false;
      }
      return true;
    };
    
    intCount = () => {
      this.setState({
        count : this.state.count + 1
      })
    }

    
  render() {
    console.log('Render');
    return (
        <div className = "App">
        <header className = "App-header">
        {this.state.count}<br/>
        <button onClick = {this.intCount}>Click Me To Increment</button><br/><br/>
            <Parent/>
            <FormExample/>
            <EventExample/>
            <RefExample/>
            <KeyExample/>
            <h1>List Of Countries are .....</h1>
            />
         </header>
         </div>
    );
  }
}
export default App;
