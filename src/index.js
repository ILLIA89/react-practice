///////////////////////Стандарт////////
import React, { Component } from "react";
import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';


// import { Component } from 'components/App';

// import './index.css';



/////////ПОДІЇ////////////////////////


class Counter extends Component {
  /* ... */

  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    // console.log(super())
  }
handleIncrement = evt => {
    console.log("Increment button was clicked!", evt); // працює
    console.log("this.props: ", this.props); // працює
  };
  // handleIncrement(evt) {
  //   // ...
  // }

  handleDecrement = evt => {
    console.log("Decrement button was clicked!", evt); // працює
    console.log("this.props: ", this.props); // працює
  };
  // handleDecrement(evt) {
  //   // ...
  // }

  render() {
    const { step } = this.props;

    return (
      <div>
        <span>0</span>
        <button type="button" onClick={this.handleIncrement}>
          Increment by {step}
        </button>
        <button type="button" onClick={this.handleDecrement}>
          Decrement by {step}
        </button>
      </div>
    );
  }
  
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Component /> */}
    <Counter step={5} />
  </React.StrictMode>
);

console.log(<Component/>)