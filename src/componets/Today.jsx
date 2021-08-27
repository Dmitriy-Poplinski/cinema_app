import {Container, Row} from 'react-bootstrap'
import { useState, useEffect } from 'react'

import { RowWrapper } from '../styled/Common.style.jsx'
import { Poster } from './Poster'
import { axiosAPI } from './../api';

export const Today = () => {
    const [posters, setPosters] = useState([])

    useEffect(() => {
        axiosAPI.fetchTodayMovies(setPosters)
    }, [])

    const Items = () => (posters.map((poster) => (
        <Poster 
            posterImage={poster.posterImage} 
            altText={poster.altText} 
            date={poster.date} 
            time={poster.time} 
            key={poster.id}
        />
    )))

    return (
        <Container>
            <RowWrapper>
                <Row>
                    {Items()}
                </Row>
            </RowWrapper>
        </Container>
    )
}
