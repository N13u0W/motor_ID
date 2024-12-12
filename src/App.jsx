import { useState } from 'react'
import Header from './Components/Header'
import Home from './Components/Home'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Home />
    </>
  )
}

export default App
