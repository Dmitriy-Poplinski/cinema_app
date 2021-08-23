import { RowWrapper } from '../styled/Common.style.jsx'
import {Container, Row} from 'react-bootstrap'
import { Poster } from './Poster'
import { useSelector } from 'react-redux';

export const Tommorow = () => {
    const state = useSelector(state => state.filmsTommorow)

    const Items = () => (state.map((posters) => (
        <Row>
            {
                posters.map((poster) => <Poster poster={poster} key={poster.id}/>)
            }
        </Row>
    )))

    return (
        <Container>
            <RowWrapper>{Items()}</RowWrapper>
        </Container>
    )
}