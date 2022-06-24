import React from 'react'
import './App.css';
import { useCoronaVirusData } from './queries';

type Props = {}

export default function ComponentTwo({}: Props) {
    const { data } = useCoronaVirusData()
    return (
        <div className='outlined-div'>
            <h1>Component Two</h1>
            <h3>Component Two Expires At {data.cache.expiresTimestamp}</h3>
        </div>
    )
}