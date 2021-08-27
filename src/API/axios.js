import * as axios from 'axios'

export const axiosAPI = {
    fetchTodayMovies: async () => {
        let data = []

        await axios.get('https://demo3586434.mockable.io/date/aug_23')
        .then((res) => {
            data = res.data.aug_23
        })

        return data
    },
    fetchTommorowMovies:async () => {
        let data = []

        await axios.get('https://demo3586434.mockable.io/date/aug_24')
        .then((res) => {
            data = res.data.aug_23
        })

        return data
    },
    fetchPremieres:async () => {
        let data = []

        await axios.get('https://demo3586434.mockable.io/date/premieres')
        .then((res) => {
            data = res.data.aug_23
        })

        return data
    },
}