import React from 'react';
import './App.css';
import Hello from './Hello';

function App({name,age}) {
  return <div>
    Hello From App.js Name = {name} Age = {age - 8}
        <br/>
        <Hello firstName = {name}></Hello>
        Hello <strong>Sharjeel</strong>
      <h1>Home Work</h1>
      <ul>
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ul>
      <ol>
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ol>
      {5 + 10}
        </div>
}

export default App;
