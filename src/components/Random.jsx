import React from 'react'

function Random({min, max}) {
    const randomNumber = Math.floor(Math.random()*max) + min
    console.log(randomNumber)
  return (
    <div>
        <p className='mt-4 border-2'>Random value between {min} and {max} =&gt; {randomNumber}</p>
    </div>
  )
}

export default Random