import {Button , Col} from 'react-bootstrap'
import BlackWidowPoster from './../../assets/images/Black_widow.jpg'

const styleCol = {
    height: '500px',
    backgroundColor: '#ccc',
    margin: '20px'
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
    marginTop: '20px',
    marginLeft: '100px'
}

export function Poster (props) {
    return (
        <Col style={styleCol}>
            <img src={props.posterImage} style={styleImg} alt='Постера ещё нет'/>
            <Button variant="info" style={styleButton}>Детальніше</Button>
        </Col>
    )
}