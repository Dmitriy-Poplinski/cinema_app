import * as axios from 'axios'

export const axiosAPI = {
    fetchTommorowMovies: async (setPosters) => {
        await axios.get('https://demo3586434.mockable.io/date/aug_24')
        .then((res) => {
            setPosters(res.data.aug_24)
        })
    },
    fetchTodayMovies: async (setPosters) => {
        await axios.get('https://demo3586434.mockable.io/date/aug_23')
        .then((res) => {
            setPosters(res.data.aug_23)
        })
    },
    fetchPremieres: async (setPremieres) => {
        let data = []
        await axios.get('https://demo3586434.mockable.io/premieres')
        .then((res) => {
            data = res.data.premieres
            setPremieres(data)
        })
    },
}