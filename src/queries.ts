import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import * as api from './api'

// Queries
export const useCoronaVirusData = () => useQuery('coronaVirusData', api.getCoronaVirusData, { staleTime: 300000, initialData: { cache: { expiresTimestamp: 0}} })