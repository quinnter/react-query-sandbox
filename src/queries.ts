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
    // Although this works like I want it to, using staleTime is the wrong approach. 
    // Keeping this for demonstration / general knowledge 
)

export const useForzaImage = () => useQuery(
    'forza',
    api.getForzaCarImage,
    {
        staleTime: 1000 * 60 * 3,
        initialData: { image: '' },
        initialDataUpdatedAt: 1608412420052
    }
)

export const useFoodImage = () => useQuery(
    'food',
    api.getRandomFoodImage,
    {
        cacheTime: 1000 * 60 * 2
    }
)