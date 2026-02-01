import { useState } from 'react'
import IndexCSS from './IndexCSS.jsx'

function App() {
  //               |----> method used to update the val
  let [val, updateValue] = useState(10)  // hook ==> used by react to control ui updation
  //                             |---> change is propogated in UI
  const incrementValue = () => {
    // updateValue(val + 1)   //
    // updateValue(val + 1)   //---> batch : useState sends updates to ui in batches
    updateValue(val + 1)      //
    updateValue(val => val+1)
    updateValue(val => val+1)
  }

  const decrementValue = () => {
    if (val > 10) updateValue(val - 1)
  }

  const resetValue = () => {
    updateValue(val = 10)
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="w-[320px] bg-slate-800 text-white p-6 rounded-xl shadow-lg space-y-4">
          <h1 className="text-xl font-bold text-center">Counter Operation</h1>

          <p className="text-4xl font-semibold text-center">{val}</p>

          <div className="flex gap-2">
            <button className="flex-1 py-2 rounded-lg hover:bg-green-700" onClick={incrementValue}>
              IncValue
            </button>
            <button className="flex-1 py-2 rounded-lg hover:bg-red-700" onClick={decrementValue}>
              DecValue
            </button>
          </div>

          <button className="w-full py-2 rounded-lg hover:bg-slate-700" onClick={resetValue}>
            Reset
          </button>
        </div>
      </div>

    </>
  )
}

export default App
