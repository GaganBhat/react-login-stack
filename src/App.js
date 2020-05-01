import React from 'react';
import logo from './logo.svg';
import './App.css';

import Amplify from 'aws-amplify'
import config from './aws-exports'
import { AmplifyAuthenticator, AmplifySignIn, AmplifySignOut } from '@aws-amplify/ui-react';

Amplify.configure(config)

function App() {
  return (
    <div>
      <AmplifyAuthenticator>
        <div>
          <AmplifySignOut />
          <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Authenticated!
            </p>
          </header>
          </div>
        </div>
      </AmplifyAuthenticator>
    </div>
  );
}

export default App;
