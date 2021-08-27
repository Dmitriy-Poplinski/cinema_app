import {Container, Row } from 'react-bootstrap'
import { useState, useEffect } from 'react'

import { Poster } from './Poster'
import { RowWrapper } from '../styled/Common.style'
import { axiosAPI } from './../api';

export const Tommorow = () => {
    const [posters, setPosters] = useState([])

    useEffect(() => {
        axiosAPI.fetchTommorowMovies(setPosters)
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
