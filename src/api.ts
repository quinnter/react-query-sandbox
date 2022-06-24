const axios = require('axios')

export const getCoronaVirusData = async () => {
    const { data } = await axios.get(
      `https://coronavirus.m.pipedream.net/`,
    )
    return data
} 