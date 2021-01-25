import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles.css'
import Information from './Information'
import SearchForm from './SearchForm'
import Calculate from './Calculate'
import ShowAnswer from './ShowAnswer'
const App = () => {
  const [balls, setBalls] = useState(0)
  const [days, setDays] = useState(0)
  const handleSearch = (nBalls) => {
    setBalls(nBalls)
  }
  const handleCalculate = (nDays) => {
    setDays(nDays)
  }
  return (
    <React.Fragment>
      <div className='login text-center' style={{ padding: '0', margin: '0' }}>
        <Information />
        <SearchForm handleSearch={handleSearch} />
        <Calculate n={balls} handleCalculate={handleCalculate} />
        <ShowAnswer days={days} />
      </div>
    </React.Fragment>
  )
}

export default App
