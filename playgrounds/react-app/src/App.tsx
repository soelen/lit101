import { useState } from 'react'
import './App.css'
import {
  Lit101Appbar,
  Lit101Theme,
  Lit101Navitem,
  Lit101Applayout,
  Lit101Nav,
  Lit101Card,
  Lit101Container,
  Lit101Cardbody,
} from '@lit101/components/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Lit101Theme>
        <Lit101Applayout>
          <Lit101Nav slot="sidebar">
            <div slot="logo">
              Logo
            </div>
            <Lit101Navitem active>
              Hello
            </Lit101Navitem>
          </Lit101Nav>
          <Lit101Appbar>Testi</Lit101Appbar>
          <Lit101Container>
            <Lit101Card>
              <Lit101Cardbody>
                <a href="https://vitejs.dev" target="_blank">
                  {/* <img src={viteLogo} className="logo" alt="Vite logo" /> */}
                </a>
                <a href="https://reactjs.org" target="_blank">
                  {/* <img src={reactLogo} className="logo react" alt="React logo" /> */}
                </a>
              </Lit101Cardbody>
            </Lit101Card>
            <Lit101Card>
              <Lit101Cardbody>
                <h1>Vite + React2</h1>
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
              </Lit101Cardbody>
            </Lit101Card>
          </Lit101Container>
        </Lit101Applayout>
      </Lit101Theme>
    </div>
  )
}

export default App
