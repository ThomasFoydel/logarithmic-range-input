import LogarithmicSlider from './components/log-inputs/LogarithmicSlider'
import LogarithmicRange from './components/log-inputs/LogarithmicRange'

function App() {
  const handleChange = (newVals) => console.log(newVals)

  return (
    <div className='App'>
      <LogarithmicSlider onChange={handleChange} />
      <LogarithmicRange onChange={handleChange} />
    </div>
  )
}

export default App
