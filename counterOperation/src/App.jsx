import { useState } from 'react'

function App() {
//               |----> method used to update the val
  let [val, updateValue] = useState(10)  // hook ==> used by react to control ui updation
//                             |---> change is propogated in UI
  const incrementValue = () => {
    updateValue(val + 1)
  }

  const decrementValue = () => {
    if(val>10) updateValue(val -1)
  }

  const resetValue = () => {
    updateValue(val = 10)
  }

  return (
    <>
      <h1>Counter Operation</h1>

      <button onClick={incrementValue}> IncValue : {val}</button><>  </>
      <button onClick={decrementValue}> DecValue : {val}</button>

      <br />
      <br />
      <button onClick={resetValue}> ResetValueTo10 : {val}</button>
    </>
  )
}

export default App
