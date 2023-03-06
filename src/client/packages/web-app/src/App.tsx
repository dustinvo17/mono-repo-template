import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import * as a from "client-core";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/api/hello").then(data => data.json()).then(console.log)
  }, [])
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite 1997+ React</h1>
      <div className="card">
        <button onClick={() => {
        }}>
        </button>
        <p>
          Edit 2 <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
