import {Button , Col} from 'react-bootstrap'
import { PosterImg, PosterStyledButton, PosterStyledColumn, PosterTimeWrapper } from '../styled/Poster.style.jsx'

export const Poster = (props) => (
    <Col>
        <PosterStyledColumn>
            <PosterImg src={props.poster.posterImage} alt="Постера ещё нет"/>
            <PosterTimeWrapper>
                <span>{props.poster.date}</span><span>{props.poster.time}</span>
            </PosterTimeWrapper>
            <PosterStyledButton>
                <Button variant="info">Детальніше</Button>
            </PosterStyledButton>
        </PosterStyledColumn>
    </Col>
)
