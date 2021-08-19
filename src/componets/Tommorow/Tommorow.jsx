import styled from 'styled-components'
import {Container, Row, Col} from 'react-bootstrap'
import {useState} from 'react'
import BlackWidowPoster from './../../assets/images/Black_widow.jpg'
import { Poster } from '../Poster/Poster'
import * as _ from 'lodash'

export function Tommorow () {
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