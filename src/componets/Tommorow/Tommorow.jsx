import styled from 'styled-components'
import {Container, Row, Col} from 'react-bootstrap'
import BlackWidowPoster from './../../assets/images/Black_widow.jpg'
import {Button} from 'react-bootstrap'
import { Poster } from '../Poster/Poster'

export function Tommorow () {
    return (
        <Container>
            <Row>
                <Poster/>
                <Poster/>
                <Poster/>
            </Row>
            <Row>
                <Poster/>
                <Poster/>
                <Poster/>
            </Row>
        </Container>
    )
}