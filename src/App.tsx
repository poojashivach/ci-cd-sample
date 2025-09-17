import React from 'react';
import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.module.scss';

function App() {
  // set count....
  /*
svkdsvmkfbfbdfbbbfsnergregbser
casccvsavcassvdv;sdv'dsb'sdb
dsvfdbfbdbfdb
  */
  const [count, setCount] = useState(0);
  // const apiUrl = import.meta.env.VITE_MY_SECRET;

  return (
    <React.Fragment>
      <div>
        Secret: {22}
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img
            src={
              'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/779px-Vitejs-logo.svg.png'
            }
            className="logo"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img
            src={
              'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/779px-Vitejs-logo.svg.png'
            }
            className="logo react"
            alt="React logo"
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </React.Fragment>
  );
}

export default App;
