import { RowWrapper } from '../styled/Common.style.jsx'
import {Container, Row} from 'react-bootstrap'
import { Poster } from './Poster'
import { useSelector } from 'react-redux'

export const Today = () => {
    const state = useSelector(state => state.filmsToday)

    const Items = () => (state.map((posters) => (
        <Poster poster={posters} key={posters.id}/>
    )))

    return (
        <Container>
            <RowWrapper>
                <Row>
                    {Items()}
                </Row>
            </RowWrapper>
        </Container>
    )
}