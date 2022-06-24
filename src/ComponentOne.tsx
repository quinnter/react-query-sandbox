import React from 'react'
import './App.css';
import { useFoodImage } from './queries';


export default function ComponentOne() {
  const food = useFoodImage()

  return (
    <div className='outlined-div'>
      <h1>Component One</h1>
      {/* <h3>Component One Expires At {data.cache.expiresTimestamp}</h3> */}
      <img src={food.data.image} width={200}></img>
    </div>
  )
}