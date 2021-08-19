import {Container, Row} from 'react-bootstrap'
import BlackWidowPoster from './../../assets/images/Black_widow.jpg'
import {useState} from 'react'
import { Poster } from '../Poster/Poster'
import * as _ from 'lodash'

export function Today () {
    const [data, setPosters] = useState([
        [
            {
                posterImage: BlackWidowPoster,
                date: '22.08.2021',
                time: '10:00',
            },
            {
                posterImage: BlackWidowPoster,
                date: '22.08.2021',
                time: '12:00',
            },
            {
                posterImage: BlackWidowPoster,
                date: '22.08.2021',
                time: '14:00',
            },
        ],
        [
            {
                posterImage: BlackWidowPoster,
                date: '22.08.2021',
                time: '16:00',
            },
            {
                posterImage: BlackWidowPoster,
                date: '22.08.2021',
                time: '18:00',
            },
            {
                posterImage: BlackWidowPoster,
                date: '22.08.2021',
                time: '20:00',
            },
        ] 
    ])

    function Items () {
        return _.map(data, (posters) => {
            return (
                <Row>
                    {
                        _.map(posters, (poster) => {
                            return <Poster poster={poster}/>
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