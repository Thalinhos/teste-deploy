import { useEffect, useState } from 'react'

export default function App() {
  return (
    <>
      <Counter/>
    </>
  )
}

function Counter(){
  const [count, setCount] = useState(0)  

  useEffect(()=> {
    function displayCountConsole(){
      console.log(`the count has changed ${count}`)
    }
    displayCountConsole()
  }, [count])

  function countPlusPlus(){
    setCount((prev)=> prev + 1);
  }

  

  return (
    <div>
      <p>o wiliam é bundao {count} vezes</p>

      <button onClick={countPlusPlus}>count++</button>
    </div>
  )
}