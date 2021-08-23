import styled from 'styled-components'
import {Container, Row} from 'react-bootstrap'
import { Poster } from './Poster'
import { useSelector } from 'react-redux'

const RowWrapper = styled.div`
margin-top: 100px;
`

export const Today = () => {
    const state = useSelector(state => state.filmsToday)

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