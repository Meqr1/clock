import { useState } from "react"

const Clock = () => {
  const [time, setTime] = useState<string>('10:30')

  setTimeout(() => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const time = `${hours}:${minutes}`;

    setTime(time)
  }, 1000)

  return <div className="md:text-[300px] sm:text-[200px] text-[100px]">{time}</div>
}

export default Clock
