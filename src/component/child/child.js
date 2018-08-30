import React from 'react';

const Child = (props) => {
   return(
       <div>
       <button onClick = {props.changeMe}>Click Me</button>
       </div>
   )
}
export default Child;