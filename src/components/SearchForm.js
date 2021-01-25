import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const SearchForm = ({ handleSearch }) => {
  const [balls, setBalls] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    handleSearch(balls)
    setBalls('')
  }
  return (
    <Form
      onSubmit={handleSubmit}
      style={{ width: '70%' }}
      className='my-1 login'
    >
      <h4 class='text-info' style={{ padding: '1%', margin: '0' }}>
        Do you want to know the time before the replay? varies according to the
        total number of balls present?
      </h4>
      <div class='input-group login'>
        <input
          type='number'
          id='numberOfBalls'
          placeholder='Number of balls (betwen 27 and 127)'
          className='form-control-lg my-1 is-valid'
          value={balls}
          onChange={(e) => setBalls(e.target.value)}
          style={{ textAlign: 'center' }}
          min={27}
          max={127}
        />

        <button type='submit' class='btn btn-primary btn-sm'>
          calculate
        </button>
      </div>
    </Form>
  )
}

export default SearchForm
