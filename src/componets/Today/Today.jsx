import styled from 'styled-components'
import {Container, Row, Col} from 'react-bootstrap'
import BlackWidowPoster from './../../assets/images/Black_widow.jpg'
import {Button} from 'react-bootstrap'

const styleCol = {
    height: '500px',
    backgroundColor: '#ccc',
    margin: '20px'
}

const styleImg = {
    width: '100%',
    height: '400px',
    marginTop: '10px'
}

const styleButton = {
    width: '180px'
}

export function Today () {
    return (
        <Container>
            <Row>
                <Col style={styleCol}>
                    <img src={BlackWidowPoster} style={styleImg}/>
                    <Button variant="info" style={styleButton}>Info</Button>
                </Col>
                <Col style={styleCol}>
                    <img src={BlackWidowPoster} style={styleImg}/>
                    <Button variant="info" style={styleButton}>Info</Button>
                </Col>
                <Col style={styleCol}>
                    <img src={BlackWidowPoster} style={styleImg}/>
                    <Button variant="info" style={styleButton}>Info</Button>
                </Col>
            </Row>
            <Row>
                <Col style={styleCol}>
                    <img src={BlackWidowPoster} style={styleImg}/>
                    <Button variant="info" style={styleButton}>Info</Button>
                </Col>
                <Col style={styleCol}>
                    <img src={BlackWidowPoster} style={styleImg}/>
                    <Button variant="info" style={styleButton}>Info</Button>
                </Col>
                <Col style={styleCol}>
                    <img src={BlackWidowPoster} style={styleImg}/>
                    <Button variant="info" style={styleButton}>Info</Button>
                </Col>
            </Row>
        </Container>
    )
}