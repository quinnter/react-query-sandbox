import React from 'react'
import './App.css';

type Props = {}

export default function ComponentTwo({}: Props) {

    return (
        <div className='outlined-div'>
            <h1>Component Two</h1>
            <h3>I'm static</h3>
        </div>
    )
}