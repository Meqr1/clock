import Tabs from './components/Tabs'
import Clock from './components/Clock'
import "./index.css"

function App() {
  return (
    <div className='h-screen w-screen bg-black text-white overflow-hidden'>
      <Tabs />
      <div className='flex items-center justify-center h-full'>
        <Clock />
      </div>
    </div>
  )
}

export default App
