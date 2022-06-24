import { useQuery } from "react-query";
import * as api from './api'

// Queries
export const useCoronaVirusData = () => useQuery(
    'coronaVirusData', 
    api.getCoronaVirusData, 
    { 
        // stale time defaults at 0, this API has a 5 min update so we'll match the stale time
        staleTime: 1000 * 60 * 5, 
        // Without initial data the component will break on the first mount.
        // This fixes that but is there a way to use React.useEffect to manage first mount?
        initialData: { cache: { expiresTimestamp: 0}},
        // To fix above problem, we can use a timestamp in the past to trigger an immediate fetch of the data.
        initialDataUpdatedAt: 1608412420052
    }
)