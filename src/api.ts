const axios = require('axios')

export const getCoronaVirusData = async () => {
    const { data } = await axios.get(
      `https://coronavirus.m.pipedream.net/`,
    )
    return data
} 

export const getForzaCarImage = async () => {
    const { data } = await axios.get('https://forza-api.tk/')
    return data
}

export const getRandomFoodImage = async () => {
    const { data } = await axios.get('https://foodish-api.herokuapp.com/api/')
    return data
}