import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <h3>Login demo</h3>
      <form>
        <label>
          Username:
          <input type="text" name="username"/>
        </label>
        <label>
          Password:
          <input type="password" name="password"/>
        </label>
        <input type="submit" name="submit"/>
      </form>
       
    </div>
  );
}

export default App;
