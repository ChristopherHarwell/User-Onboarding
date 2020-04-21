import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Components/Form/Form';

function App() {

  // handle state when form is submitted
  const sumbitForm = event => {
    event.preventDefault();
    console.log('form submitted!');
  };

  return (
    <div className="App">
      <form onSubmit={sumbitForm}> 
        <Form/>
      </form>
      
    </div>
  );
}

export default App;
