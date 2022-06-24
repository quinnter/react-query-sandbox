import React from 'react'
import './App.css';
import { useFoodImage } from './queries';


export default function ComponentOne() {
  const food = useFoodImage()

  return (
    <div className='outlined-div'>
      <h1>Component One</h1>
      {/* Instead of setting up initialData we can check if the component is loading */}
      {/* If it is, we'll display a loading component */}
      {food.isLoading ? <h4>I'm loading food</h4> : <img src={food.data.image} width={200}></img>}
      {food.isStale && <h4>I'm stale food but different</h4>}
    </div>
  )
}