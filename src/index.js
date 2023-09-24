///////////////////////Стандарт////////
import React, { Component } from "react";
import ReactDOM from 'react-dom/client';
import { nanoid } from "nanoid";

// import { App } from 'components/App';


// import { Component } from 'components/App';

// import './index.css';



/////////ПОДІЇ////////////////////////


// class Counter extends Component {
//   /* ... */

//   constructor() {
//     super();
//     this.handleIncrement = this.handleIncrement.bind(this);
//     this.handleDecrement = this.handleDecrement.bind(this);
//     // console.log(super())
//   }
// handleIncrement = evt => {
//     this.setState((state, props) => ({
//       value: state.value + props.step,
//     }));
//   };
//   // handleIncrement(evt) {
//   //   // ...
//   // }

//   handleDecrement = evt => {
//      this.setState((state, props) => ({
//       value: state.value - props.step,
//     }));
//   };
//   // handleDecrement(evt) {
//   //   // ...
//   // }

//   render() {
//     const { step } = this.props;

//     return (
//       <div>
//         <span>0</span>
//         <button type="button" onClick={this.handleIncrement}>
//           Increment by {step}
//         </button>
//         <button type="button" onClick={this.handleDecrement}>
//           Decrement by {step}
//         </button>
//       </div>
//     );
//   }
  
// }


//////////////Форми//////////////////////////

// class LoginForm extends Component {
//   handleSubmit = evt => {
//     evt.preventDefault();
//     const form = evt.currentTarget;
//     const login = form.elements.login.value;
//     const password = form.elements.password.value;
//     console.log(login, password);
//     this.props.onSubmit({ login, password });
//     form.reset();
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input type="text" name="login" />
//         <input type="password" name="password" />
//         <button type="submit">Login</button>
//       </form>
//     );
//   }
// }

// class App extends Component {
//   state = {
//     inputValue: "",
//   };

//   handleChange = evt => {
//     this.setState({ inputValue: evt.target.value });
//   };

//   render() {
//     const { inputValue } = this.state;
//     return (
//       <input type="text" value={inputValue} onChange={this.handleChange} />
//     );
//   }
// }

//////////////////////////////// Форма з чекбоксом////////////////////////
// Виносимо об'єкт із примітивами в константу, щоб було зручно скидати.
// Не можна використовувати, якщо в якійсь властивості стану зберігається складний тип.
const INITIAL_STATE = {
  login: "",
  email: "",
  password: "",
  agreed: false,
};

class SignUpForm extends React.Component {
  state = { ...INITIAL_STATE };

  // Для всіх інпутів створюємо один обробник
  // Розрізняти інпути будемо за атрибутом name
  handleChange = evt => {
    const { name, value, type, checked} = evt.target;
    this.setState({ [name]: type === "checkbox" ? checked : value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { login, email, password, agreed } = this.state;
    console.log(`Login: ${login}, Email: ${email}, Password: ${password}, Agreed: ${agreed}`);
    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { login, email, password, agreed } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            placeholder="Enter login"
            name="login"
            value={login}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </label>

         <label>
          Agree to terms
          <input
            name = "agreed"
            type="checkbox"
            checked={agreed}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit" disabled={!agreed}>Sign up as {login}</button>
      </form>
    );
  }
}

// //////////id елементи форми////////////////////////
// class Form extends React.Component {
//   loginInputId = nanoid();

//   render() {
//     return (
//       <form>
//         <label htmlFor={this.loginInputId}>Login</label>
//         <input type="text" name="login" id={this.loginInputId} />
//       </form>
//     );
//   }
// }
//////////////////////Чекбокси////////////////////////


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Component /> */}
    {/* <Counter step={5} /> */}
    {/* {<LoginForm />} */}
    {<SignUpForm/>}
    {/* {<Form/>} */}
  </React.StrictMode>
);
// console.log(<App />)
// console.log(<LoginForm />)
// console.log(<Component/>)
// console.log(<Form/>)