import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello';

function App({name,age}) {
  return <div>
    Hello From App.js Name = {name} Age = {age - 8}
        <br/>
        <Hello firstName = {name}></Hello>
        </div>
}

export default App;
