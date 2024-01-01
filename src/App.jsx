import 'bootstrap/dist/css/bootstrap.min.css'
import ButtonContainer from './components/ButtonsContainer'
import { useState } from 'react'


function App() {
  let [displayText, setDisplay] = useState("")
  const onButtonClick = (buttonText) => {
    if (buttonText === "C"){
      setDisplay("")
    } else if (buttonText === "=") {
      const result = eval(displayText)
      setDisplay(result)
    } else {
      const newDisplayText = displayText + buttonText
      setDisplay(newDisplayText)
    }
  }
  return (
    <div className='w-25 px-5 py-4 border border-2'>
      <input type="text" className='w-100 form-control' value={displayText} readOnly />
      <ButtonContainer onButtonClick={onButtonClick} />
    </div>
  )
}

export default App
