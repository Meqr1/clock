import { useContext } from "react"
import { DataContext } from "../../dataContext"
import Clock from "./Clock"
import Stopwatch from "./Stopwatch"
import Timer from "./Timer"

const ScreenRenderer = () => {
  const data = useContext(DataContext)

  const Screen = () => {
    switch(data?.active.active) {
      case "Clock":
        return <Clock />
      case "Stopwatch":
        return <Stopwatch />
      case "Timer":
        return <Timer />
      default:
        return <Clock />
    }
  }

  return (
    <>
     <Screen />
    </>
  )
}

export default ScreenRenderer
