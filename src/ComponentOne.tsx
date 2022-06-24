import React from 'react'
import { useCoronaVirusData } from './queries';


export default function ComponentOne() {
  const { data } = useCoronaVirusData()

  return (
    <div>{data.cache.expiresTimestamp}</div>
  )
}