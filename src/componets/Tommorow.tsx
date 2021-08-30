import {Container, Row } from 'react-bootstrap'
import { useEffect } from 'react'
import { connect } from 'react-redux'

import { Poster } from './Poster'
import { RowWrapper } from '../styled/Common.style'
import { asyncFetchTommorowMoviesWidget } from '../redux/ducks/tommorow'

interface TommorowProps {
    posters: [],
    asyncFetchTommorowMovies(): object 
}

type PosterType = {
    posterImage: string,
    altText: string,
    date: string,
    time: string,
    id: number,
}

const Tommorow: React.FunctionComponent<TommorowProps> = ({posters, asyncFetchTommorowMovies}) => {
    useEffect(() => {
        asyncFetchTommorowMovies()
    })

    const Items = () => (posters.map((poster: PosterType) => (
        <Poster 
            posterImage={poster.posterImage} 
            altText={poster.altText} 
            date={poster.date} 
            time={poster.time} 
            key={poster.id}
        />
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

type State = {tommorowReducer: {aug_24: []}}

const mapStateToProps = (state: State) => ({
    posters: state.tommorowReducer.aug_24
})

const mapDispatchToProps = (dispatch) => ({
    asyncFetchTommorowMovies: () => dispatch(asyncFetchTommorowMoviesWidget())
})

export default connect(mapStateToProps, mapDispatchToProps)(Tommorow)
