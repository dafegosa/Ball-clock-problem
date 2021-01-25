import React from 'react'

const Information = () => {
  return (
    <div className='jumbotron text-center mb-1' style={{ padding: '1rem' }}>
      <h1 className='display-3 mt-1'>CLOCK</h1>
      <p className='mt-1 mb-3'>Tempus et mobilius - Time and motion</p>
      <p className='mt-1 mb-1'>Tempus est mensura motus rerum mobilium.</p>
      <p className='mt-1 mb-1'>Time is the measure of movement.</p>
      <p className=' mt-1 mb-1'>-- Auctoritates Aristotelis</p>
      <hr class='my-4'></hr>
      <p>
        ...and movement has long been used to measure time. For example, the
        ball clock is a simple device which keeps track of the passing minutes
        by moving ball-bearings. Each minute, a rotating arm removes a ball
        bearing from the queue at the bottom, raises it to the top of the clock
        and deposits it on a track leading to indicators displaying minutes,
        five-minutes and hours. These indicators display the time between 1:00
        and 12:59, but without 'a.m.' or 'p.m.' indicators. Thus 2 balls in the
        minute indicator, 6 balls in the fiveminute indicator and 5 balls in the
        hour indicator displays the time 5:32. .
      </p>
      <p>
        Unfortunately, most commercially available ball clocks do not
        incorporate a date indication, although this would be simple to do with
        the addition of further carry and indicator tracks. However, all is not
        lost! As the balls migrate through the mechanism of the clock, they
        change their relative ordering in a predictable way. Careful study of
        these orderings will therefore yield the time elapsed since the clock
        had some specific ordering. The length of time which can be measured is
        limited because the orderings of the balls eventually begin to repeat
      </p>
    </div>
  )
}

export default Information
