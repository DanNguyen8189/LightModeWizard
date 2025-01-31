import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import VideoConverter from './videoconverter'
import './app.css';

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
      </div>
      <h1>Light Mode Wizard</h1>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          oops count is {count}
        </button>
        <p>
          Give me your dark mode videos and I'll give them light
        </p>
      </div>
      <VideoConverter />
    </div>
  )
}
