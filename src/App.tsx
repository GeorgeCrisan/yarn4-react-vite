import { useState } from 'react'
import viteLogo from '/hypejs.svg'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://hypejs.com" target="_blank">
          <img src={viteLogo} className="logo" alt="hypejs logo" />
        </a>
      </div>
      <h1>yarn 4 + Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
