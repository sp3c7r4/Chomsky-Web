import { useState } from 'react'
import Banner from './components/Banner'
import Waitlist from './components/Waitlist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Banner/>
      <Waitlist/>
    </>
  )
}

export default App
