import React, { useState } from "react";
import "./App.css";
import/*this name should start with Uppercase */ Person from './Person/Person' //dont need to use ".js" in the end of the file

const App = (props) => {
  //use state sempre retorna dois elementos
  const [personState, setPersonsState] = useState({ //use state nos permite manipular state dentro de um componente funcional
    persons: [
      { name: 'Victor', age: 34, eyeColor: 'green' },
      { name: 'Manu', age: 24, eyeColor: 'red' },
      { name: 'Stephany', age: 94, eyeColor: 'blue' }
    ],
    otherState: 'some other value'
  });


  const switchNameHandler = () => {

    setPersonsState({ //ao atualizar o state atual, use novamente o useState() para recolocar as propriedades que não serão alteradas, useState() pode ser usado quantas vezes quiser, vc não terá um state gigante, e sim uma fatia nova para mudança, para ter um state gigante, basta ao invés de chamar useState() bastar incluir manualmente
      persons: [
        { name: 'Maximilian', age: 74, eyeColor: 'yellow' },
        { name: 'Manu', age: 14, eyeColor: 'black' },
        { name: 'Stephany', age: 73, eyeColor: 'green' }
      ],
      // otherState: 'some other value' //incluido manualmente
    })
  }
  
  const [otherState, setOtherState] = useState({ otherState: 'some other  value' }); //  <------------ inside the use state could be a string, number, object, boolen....
  console.log(personState, otherState)
  return (
     // não usamos "class" para alterar a class, usamos "classname" pois class dentro desse Componeste baseado na classe, "class" é resevada aqui dentro
    <div className="App">
      <h1>hi, I'm a react app</h1>
      <button onClick={switchNameHandler}>Switch Person</button>
      <p>this is really working now</p>
      <Person name={personState.persons[0].name} age={personState.persons[0].age} eyeColor={personState.persons[0].eyeColor} />
      <Person name={personState.persons[1].name} age={personState.persons[1].age} eyeColor={personState.persons[1].eyeColor}> My hobbies: Racing</Person>
      <Person name={personState.persons[2].name} age={personState.persons[2].age} eyeColor={personState.persons[2].eyeColor}/>
       
    </div>
  );
    //the code above is called JSX
    //he can use this code below,but is too heavy
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now'))
}

export default App;
