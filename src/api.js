import * as axios from 'axios'

export const AxiosAPI = {
    setPremieres: async () => {
        let data = []
        await axios.get('https://demo3586434.mockable.io/premieres')
        .then((res) => {
            data = res.data.premieres
        })
        return data
    },
    setTodayMovies: async () => {
        let data = []
        await axios.get('https://demo3586434.mockable.io/date/aug_23')
        .then((res) => {
            data = res.data.aug_23
        })
        return data
    },
    setTommorowMovies: async () => {
        let data = []
        await axios.get('https://demo3586434.mockable.io/date/aug_24')
        .then((res) => {
            data = res.data.aug_24
        })
        return data
    }
}