import React, { Component } from 'react';

import Child from '../component/child/child'

class Parent extends Component{
    
    state = {
        name : 'YES',
        data: "Abhi"
    }
    changeName = () => {
        this.setState({
            name : 'NO'
        })
    }
    changeName1 = () => {
        this.setState({
            
            data: "Abhijeet"
        })
    }


   render(){
       return(
           <div class = "App">
           <Child changeMe = {this.changeName}/>
           <br/>
           <Child changeMe = {this.changeName1}/>
           <h1>{this.state.name}</h1>
           <h1>{this.state.data}</h1>
           </div>
       )
   }
}
export default Parent;