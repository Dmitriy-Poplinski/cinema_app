import get from 'axios'

const baseURL: string = 'https://demo3586434.mockable.io/'

export const AxiosAPI = {
    setPremieres: async () => {
        let response = await get(`${baseURL}premieres`)
        return response.data.premieres
    },
    setTodayMovies: async () => {
        let response = await get(`${baseURL}date/aug_23`)
        return response.data.aug_23
    },
    setTommorowMovies: async () => {
        let response = await get(`${baseURL}date/aug_24`)
        return response.data.aug_24
    }
}
