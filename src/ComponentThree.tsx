import React from 'react'
import './App.css';
import { useCoronaVirusData, useForzaImage, useFoodImage } from './queries';

type Props = {}

export default function ComponentThree({}: Props) {
    const forza = useForzaImage()
    const food = useFoodImage()

    return (
        <div className='outlined-div'>
            <h1>Component Three</h1>
            <img src={forza.data.image} width={200}></img>
            <img src={food.data.image} width={200}></img>
            {food.isStale && <h4>I'm stale food</h4>}
        </div>
    )
}