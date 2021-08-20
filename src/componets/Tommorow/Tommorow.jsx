import styled from 'styled-components'
import {Container, Row} from 'react-bootstrap'
import { Poster } from '../Poster/Poster'
import * as _ from 'lodash'
import { useSelector } from 'react-redux';

const RowWrapper = styled.div`
margin-top: 100px;
`

export function Tommorow () {
    const state = useSelector(state => state.filmsTommorow)

    function Items () {
        return _.map(state, (posters) => {
            return (
                <Row>
                    {
                        _.map(posters, (poster) => {
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