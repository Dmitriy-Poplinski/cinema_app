import get from 'axios'

export const AxiosAPI = {
    setPremieres: async () => {
        let response = await get('https://demo3586434.mockable.io/premieres')
        return response.data.premieres
    },
    setTodayMovies: async () => {
        let response = await get('https://demo3586434.mockable.io/date/aug_23')
        return response.data.aug_23
    },
    setTommorowMovies: async () => {
        let response = await get('https://demo3586434.mockable.io/date/aug_24')
        return response.data.aug_24
    }
}
