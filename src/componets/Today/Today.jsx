import {Container, Row} from 'react-bootstrap'
import BlackWidowPoster from './../../assets/images/Black_widow.jpg'
import {useState} from 'react'
import { Poster } from '../Poster/Poster'
import * as _ from 'lodash'

export function Today () {
    const [data, setPosters] = useState([
        [
            {posterImage: BlackWidowPoster},
            {posterImage: BlackWidowPoster},
            {posterImage: BlackWidowPoster},
        ],
        [
            {posterImage: BlackWidowPoster},
            {posterImage: BlackWidowPoster},
            {posterImage: BlackWidowPoster},
        ] 
    ])

    function Items () {
        return _.map(data, (posters) => {
            return (
                <Row>
                    {
                        _.map(posters, (poster) => {
                            return <Poster posterImage={poster.posterImage}/>
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