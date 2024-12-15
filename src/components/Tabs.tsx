import { useContext, useEffect, useState } from "react"
import { DataContext } from "../dataContext"

const Tabs = () => {
  return (
    <div className="transition-all duration-200 flex justify-center gap-10 mt-4" id="Tabs">
      <Tab onClick={() => {}} name="Clock" />
      <Tab onClick={() => {}} name="Stopwatch" />
      <Tab onClick={() => {}} name="Timer" />
    </div>
  )
}

const Tab = (props: { onClick: () => void, name: string}) => {
  const [active, setActive] = useState<boolean>(false)
  const data = useContext(DataContext)

  useEffect(() => {
    if (data?.active.active === props.name) {
      setActive(true)
    } else {
      setActive(false)
    }
  }, [data?.active.active, props.name])

  const onClick = () => {
    data?.active.setActive(props.name)
  }

  return (
    <button id={`tab-${props.name}`} className="flex flex-col items-center justify-center" style={{"flexDirection": "column"}} onClick={onClick}>
      {props.name}
      <span className={`bg-red-600 h-[3px] w-10 block rounded-sm ${!active && "h-0 w-0"} transition-all`}></span>
    </button>
  )
}

export default Tabs
