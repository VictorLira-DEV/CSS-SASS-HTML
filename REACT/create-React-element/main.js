'use strict'

const element = React.createElement(
    'h1',
    { className: "greeting" },
    'hello, world'
)

// React.createElement() realiza algumas verificações para ajudar você a criar um código sem bugs, mas, essencialmente, cria um objeto como este abaixo:

// Nota: esta estrutura está simplificada
const element = {
    type: 'h1',
    props: {
      className: 'greeting',
      children: 'Hello, world!'
    }
  };