import {Container, Row, Col} from 'react-bootstrap'
import {useState} from 'react'
import BlackWidowPoster from './../../assets/images/Black_widow.jpg'
import { Poster } from '../Poster/Poster'
import * as _ from 'lodash'

export function Tommorow () {
    const [data, setPosters] = useState([
        [
            {
                posterImage: BlackWidowPoster,
                date: '23.08.2021',
                time: '10:00',
                id: 7,
            },
            {
                posterImage: BlackWidowPoster,
                date: '23.08.2021',
                time: '12:00',
                id: 8,
            },
            {
                posterImage: BlackWidowPoster,
                date: '23.08.2021',
                time: '14:00',
                id: 9,
            },
        ],
        [
            {
                posterImage: BlackWidowPoster,
                date: '23.08.2021',
                time: '16:00',
                id: 10,
            },
            {
                posterImage: BlackWidowPoster,
                date: '23.08.2021',
                time: '18:00',
                id: 11,
            },
            {
                posterImage: BlackWidowPoster,
                date: '23.08.2021',
                time: '20:00',
                id: 12,
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
            {Items()}
        </Container>
    )
}