import { useState } from "react"

function Toggler({ onToggle }) {
  // useState Hook: Creates state variable and setter function
  // isOn = current state value (boolean)
  // setIsOn = function to update the state
  // useState(false) = initial value is false (toggle starts OFF)
  const [isOn, setIsOn] = useState(false)

  // Handler function for button click
  const handleClick = () => {
    // Using functional update to get previous state
    // This is safer when state depends on previous value
    setIsOn(prevState => {
      // Toggle the boolean value: false -> true, true -> false
      const newState = !prevState
      
      // Log to see state changes (for learning)
      console.log(`Toggle changed from ${prevState} to ${newState}`)
      
      // Call parent callback if provided
      if (typeof onToggle === "function") {
        onToggle(newState)
      }
      
      // Return the new state to update the component
      return newState
    })
  }

  // Component renders based on current state value
  return (
    <div className="Togg-ler">
      <button 
        className={`Circular ${isOn ? 'on' : 'off'}`} 
        onClick={handleClick}
      >
        <span className="toggle-slider"></span>
        <span className="toggle-text">{isOn ? "ON" : "OFF"}</span>
      </button>
      {/* Display current state for learning */}
      <p style={{ marginTop: '10px', fontSize: '14px', color: '#666' }}>
        Current state: {isOn.toString()} (Type: {typeof isOn})
      </p>
    </div>
  )
}

export default Toggler