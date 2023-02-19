import { useState } from 'react'
import Space from "./components/space";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <h1>StarEngine Test Pages</h1>
        <Space></Space>
    </div>
  )
}

export default App
