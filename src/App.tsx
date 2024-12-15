import Tabs from './components/Tabs'
import "./index.css"
import { useState } from 'react'
import { DataContext } from './dataContext'
import ScreenRenderer from './components/screens'

function App() {
  const [active, setActive] = useState<string>("Clock")

  return (
    <DataContext.Provider value={{active: {active, setActive}}}>
      <div className='h-screen w-screen bg-black text-white overflow-hidden'>
        <Tabs />
        <div className='flex items-center justify-center h-full'>
          <ScreenRenderer />
        </div>
      </div>
    </DataContext.Provider>
  )
}

export default App
