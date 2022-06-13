import { useState } from 'react'
import './App.css'
import CharacterCard from './components/CharacterCard'
import LocationInfo from './components/LocationInfo'
import useLocationApi from '/src/hooks/useLocationApi'

function App() {
  const [count, setCount] = useState(0)

  let [inputText, setInputText] = useState()

  const onSubmitFunction = e =>{
    e.preventDefault()
    setInputText(e.target.firstChild.value)
  }


  const {data} = useLocationApi()
  
  return (
    <div className="App">
      <header className="App-header">
        
      </header>

      <div className="search-bar">
        <form onSubmit={onSubmitFunction} action="">
          <input className='form-input' type="text" placeholder='   Type a location...'/>
          <button>Search</button>
        </form>
      </div>

      <div className="location">
        <LocationInfo data={data}/>
      </div>

      <h3 className='cards-h3'>Residents</h3>

      <div className="character-section">
        {data?.residents.map(resident => (
          <CharacterCard 
          resident={resident}
          key={resident} />
        ))}
      </div>
    </div>
  )
}

export default App
