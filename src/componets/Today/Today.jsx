import styled from 'styled-components'
import {Container, Row} from 'react-bootstrap'
import { Poster } from '../Poster/Poster'
import { useSelector } from 'react-redux'

const RowWrapper = styled.div`
margin-top: 100px;
`

export function Today () {
    const state = useSelector(state => state.filmsToday)

    function Items () {
        return state.map((posters) => {
            return (
                <Row>
                    {
                        posters.map((poster) => {
                            return <Poster poster={poster} key={poster.id}/>
                        })
                    }
                </Row>
            )
        })
    }

    return (
        <Container>
            <RowWrapper>{Items()}</RowWrapper>
        </Container>
    )
}