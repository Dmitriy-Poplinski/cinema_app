import {Carousel, Button} from 'react-bootstrap'
import BlackWidowPoster from './../../assets/images/Black_widow.jpg'

const styleImg = {
    width: '90%',
    height: '900px'
}

const styleTitle = {
    width: '100%',
    padding: '20px',
    fontSize: '40px'
}

const styleParag = {
    width: '100%',
    padding: '20px',
    fontSize: '30px',
    backgroundColor: '#ccc',
    marginTop: '20px'
}

export function PremierePoster (props) {
    return (
        <Carousel.Item interval={1000}>
            <img
                style={styleImg}
                className="d-block w-100"
                src={BlackWidowPoster}
                alt={'Text'}
            />
            <Carousel.Caption>
                <Button variant="info" style={styleTitle}>Детальніше</Button>
                <p style={styleParag}>{'ddddd'}</p>
            </Carousel.Caption>
        </Carousel.Item>
    )
}