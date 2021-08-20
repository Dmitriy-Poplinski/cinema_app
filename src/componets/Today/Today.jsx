import styled from 'styled-components'
import {Container, Row} from 'react-bootstrap'
import BlackWidowPoster from './../../assets/images/Black_widow.jpg'
import {useState} from 'react'
import { Poster } from '../Poster/Poster'
import * as _ from 'lodash'

const RowWrapper = styled.div`
margin-top: 100px;
`

export function Today () {
    const [data, setPosters] = useState([
        [
            {
                posterImage: BlackWidowPoster,
                date: '22.08.2021',
                time: '10:00',
                id: 1,
            },
            {
                posterImage: BlackWidowPoster,
                date: '22.08.2021',
                time: '12:00',
                id: 2,
            },
            {
                posterImage: BlackWidowPoster,
                date: '22.08.2021',
                time: '14:00',
                id: 3,
            },
        ],
        [
            {
                posterImage: BlackWidowPoster,
                date: '22.08.2021',
                time: '16:00',
                id: 4,
            },
            {
                posterImage: BlackWidowPoster,
                date: '22.08.2021',
                time: '18:00',
                id: 5,
            },
            {
                posterImage: BlackWidowPoster,
                date: '22.08.2021',
                time: '20:00',
                id: 6,
            },
        ] 
    ])

    function Items () {
        return _.map(data, (posters) => {
            return (
                <Row>
                    {
                        _.map(posters, (poster) => {
                            return <Poster poster={poster} key={poster.id}/>
                        })
                    }
                </Row>
            )
        })
    }

    return (
        <Container>
            <RowWrapper>{Items()}</RowWrapper>
        </Container>
    )
}