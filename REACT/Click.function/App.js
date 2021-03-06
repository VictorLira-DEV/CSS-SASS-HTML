import React, { Component } from "react";
import "./App.css";
import/*this name should start with Uppercase */ Person from './Person/Person' //dont need to use ".js" in the end of the file

class App extends Component {

  render() {
    return (
      // não usamos "class" para alterar a class, usamos "classname" pois class dentro desse Componeste baseado na classe, "class" é resevada aqui dentro
      <div className="App">
        <h1>hi, I'm a react app</h1>
        <button onClick={this.switchNameHandler}>Switch Person</button>
        <p>this is really working now</p>
      </div>
    );
    //the code above is called JSX
    //he can use this code below,but is too heavy
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now'))
  }
}

export default App;
