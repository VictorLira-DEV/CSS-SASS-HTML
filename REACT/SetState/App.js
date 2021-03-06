import React, { Component } from "react";
import "./App.css";
import/*this name should start with Uppercase */ Person from './Person/Person' //dont need to use ".js" in the end of the file

class App extends Component {
  //não podemos mudar o 'state' diretamente, usamos o setState
  state = {
    persons: [
      { name: 'Victor', age: 34, eyeColor: 'green'},
      { name: 'Manu', age: 24, eyeColor: 'red' },
      { name: 'Stephany', age: 94, eyeColor: 'blue' }
    ],
    otherState :'some other value'

  }

  switchNameHandler = () => {
    // console.log('escreva o seu NOME')
    //this.state.persons[0].name = 'Maximilian' <--- não usamos isso
    //setState irá fundir e sobreescrever as alterações, apenas no objeto indicado:"persons"
    this.setState({
      persons: [
        { name: 'Maximilian', age: 74, eyeColor: 'yellow'},
        { name: 'Manu', age: 14, eyeColor: 'black'},
        { name: 'Stephany', age: 73, eyeColor: 'green' }
      ]
    })
  }

  render() {
    return (
      // não usamos "class" para alterar a class, usamos "classname" pois class dentro desse Componeste baseado na classe, "class" é resevada aqui dentro
      <div className="App">
        <h1>hi, I'm a react app</h1>
        <button onClick={this.switchNameHandler}>Switch Person</button>
        <p>this is really working now</p>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} eyeColor={this.state.persons[0].eyeColor} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} eyeColor={this.state.persons[1].eyeColor}> My hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} eyeColor={this.state.persons[2].eyeColor}/>
        
      </div>
    );
    //the code above is called JSX
    //he can use this code below,but is too heavy
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now'))
  }
}

export default App;
