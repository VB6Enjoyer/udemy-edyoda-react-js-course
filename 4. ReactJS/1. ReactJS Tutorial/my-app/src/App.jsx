import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Boca, Selesion, Copas } from "./Fulbo"
import Rocanrol from "./Rocanrol"

function App() {
  const [count, setCount] = useState(0);
  const name = "VB6Enjoyer";
  const age = 22;
  const job = "Unemployed :("

  const style = {
    color: "yellow",
    border: "1px solid cyan",
    borderRadius: "5px"
  }

  // Reference to variables with in-file styling
  const pasteInfo = () => {
    return (
      <div>
        <p style={style}>Sup I'm {name} yo, and I'm {age} yo, and I'm currently {job}</p>
      </div>
    )
  }

  // Attributes from variables
  const placeholder = "Your credit card number"
  const inputBox = <input placeholder={placeholder} autoComplete />

  // Returning elements through array mapping with in-line styling
  let arr = [1, 2, 3];
  const list = () => {
    return (
      <ul>
        {arr.map((item, index) => (
          <li key="index" style={{ color: 'red', border: '1px solid green' }}>{item}</li>
        ))}
      </ul>
    )
  }

  // Calling object properties with stylesheet styling
  const person = {
    name: "Coque",
    age: "39",
    job: "Professional footballer at Club Atlético Cuchuflito"
  }
  const personInfo = () => {
    return <p className="nokia">{person.name} is {person.age} and is a {person.job}</p>
  }

  const boca = () => {
    return <Boca description="uoooca" />
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {pasteInfo()}
      {inputBox}
      {list()}
      {personInfo()}
      {boca()}
      <Selesion /><br />
      <Copas /><br />
      <Rocanrol />
    </>
  )
}

export default App
