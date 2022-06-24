import React from 'react'
import { useCoronaVirusData } from './queries';


type Props = {
    
}

export default function Dashboard({}: Props) {

   const { data } = useCoronaVirusData()

  return (
    <div>{data.cache.expiresTimestamp}</div>
  )
}