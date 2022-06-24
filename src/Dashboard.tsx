import React from 'react'
import { useQueryClient, useQuery } from "react-query";
import * as api from './api'

type Props = {}

export default function Dashboard({}: Props) {
   // Access the client
   const queryClient = useQueryClient()
 
   // Queries
   const query = useQuery('coronaVirusData', api.getCoronaVirusData, { staleTime: 300000 })

  return (
    <div>Hey hey </div>
  )
}