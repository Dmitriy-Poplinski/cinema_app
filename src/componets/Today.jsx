import {Container, Row} from 'react-bootstrap'
import { useState, useEffect } from 'react'
import * as axios from 'axios'

import { RowWrapper } from '../styled/Common.style.jsx'
import { Poster } from './Poster'

export const Today = () => {
    const [posters, setPosters] = useState([])

    useEffect(() => {
        let data = []
        axios.get('https://demo3586434.mockable.io/date/aug_23')
        .then((res) => {
            data = res.data.aug_23
            setPosters(data)
        })
        
    }, [])

    const Items = () => (posters.map((poster) => (
        <Poster poster={poster} key={posters.id}/>
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