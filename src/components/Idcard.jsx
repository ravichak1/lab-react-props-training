import React from 'react'
import Greeting from './Greeting'

function Idcard({lastName, firstName, gender, height, birth, picture}) {
  return (
    <div className='flex gap-4 m-4 border-2 p-2'>
        <div>
            <img src={picture} alt="" className='rounded-lg'/>
        </div>
        <div>
            <h3 className='font-bold'>First Name: {firstName}</h3>
            <h3 className='font-bold'>Last Name: {lastName}</h3>
            <h3 className='font-bold'>Gender: {gender}</h3>
            <h3 className='font-bold'>Height: {height}</h3>
            <h3 className='font-bold'>Birth: {birth.toDateString()}</h3>
        </div>
        
    </div>
  )
}

export default Idcard