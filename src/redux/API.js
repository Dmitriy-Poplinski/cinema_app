import * as axios from 'axios'

const instance = axios.create({
    baseURL: ' https://demo3586434.mockable.io/',
  });

const getPremieres = () => {
    let data = null
    instance.get('premieres')
    .then(res=>{
        data = res.data
    })

    return data
}

const getTodayMovies = () => {
    let data = null
    instance.get('date/aug_23')
    .then(res=>{
        data = res.data
    })

    return data
}

const getTommorowMovies = () => {
    let data = null
    instance.get('date/aug_23')
    .then(res=>{
        data = res.data
    })

    return data
}

export const API = {
    premieres: getPremieres(),
    todayMovies: getTodayMovies(),
    tommorowMovies: getTommorowMovies(),
}