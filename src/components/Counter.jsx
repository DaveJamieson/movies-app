import {useState, useEffect} from "react";

const Counter = () => {

  const [count, setCount] = useState(0);
  useEffect(() => {
setTimeout(() => {
  setCount((count) => count + 1);
})

  },[])

  return (
    <div>

      <h1>
        Timer Side Effect
      </h1>

     <h2> {count === 0 ? `I am waiting for the timer` : `I have rendered ${count} times`}</h2>


    </div>
  )
}
export default Counter