import * as axios from 'axios'

const instance = axios.create({
    baseURL: 'https://demo3586434.mockable.io/'
  });

export const AxiosAPI = {
    setPremieres: async () => {
        let data = []
        await instance.get('premieres')
        .then((res) => {
            data = res.data.premieres
        })
        return data
    },
    setTodayMovies: async () => {
        let data = []
        await instance.get('date/aug_23')
        .then((res) => {
            data = res.data.aug_23
        })
        return data
    },
    setTommorowMovies: async () => {
        let data = []
        await instance.get('date/aug_24')
        .then((res) => {
            data = res.data.aug_24
        })
        return data
    }
}
