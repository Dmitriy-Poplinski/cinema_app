import {Button , Col} from 'react-bootstrap'
import BlackWidowPoster from './../../assets/images/Black_widow.jpg'
import styled from 'styled-components';

const styleCol = {
    height: '600px',
    backgroundColor: '#ccc',
    margin: '20px',
}

const styleImg = {
    width: '100%',
    height: '400px',
    marginTop: '10px',
    border: 'none',
    outline: 'none'
}

const styleButton = {
    width: '180px',
    marginTop: '50px',
    marginLeft: '150px',

}

const TimeWrapper = styled.div`
display: flex;
justify-content: space-between;
margin-top: 30px;
font-size: 25px;
`

export function Poster (props) {
    return (
        <Col style={styleCol}>
            <img src={props.poster.posterImage} style={styleImg} alt='Постера ещё нет'/>
            <TimeWrapper>
                <span>{props.poster.date}</span><span>{props.poster.time}</span>
            </TimeWrapper>
            <Button variant="info" style={styleButton}>Детальніше</Button>
        </Col>
    )
}