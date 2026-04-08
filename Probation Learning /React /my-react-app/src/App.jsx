import { useState } from 'react'
import './App.css'
// import ProductCard from './ProductDisplay'
import Toggler from './Toggle'

function App() {
  // useState Hook in Parent Component
  // toggleState = state variable that stores toggle value
  // setToggleState = function to update toggleState
  // useState(false) = initial value is false
  const [toggleState, setToggleState] = useState(false)

  // Event handler function passed to child component
  const handleToggle = (value) => {
    // Update parent state with value from child
    setToggleState(value)
    console.log('Parent received toggle value:', value)
    console.log('Current toggleState in parent:', toggleState)
  }

  return (
    <>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>
        useState Learning Example
      </h1>
      
      {/* Child component that manages its own state */}
      <Toggler onToggle={handleToggle} />
      
      {/* Parent component displaying its own state */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <p>Parent Component State:</p>
        <p>
          Toggle value: <strong>{toggleState ? 'ON' : 'OFF'}</strong>
        </p>
        <p style={{ fontSize: '14px', color: '#666' }}>
          State type: {typeof toggleState} | State value: {toggleState.toString()}
        </p>
      </div>
    </>
  )
}

export default App
