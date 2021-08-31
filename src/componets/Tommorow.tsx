import {Container, Row } from 'react-bootstrap'
import { useEffect } from 'react'
import { connect } from 'react-redux'

import { Poster } from './Poster'
import { RowWrapper } from '../styled/Common.style'
import { asyncFetchTommorowMoviesWidget } from '../redux/ducks/tommorow'
import { TommorowState, PosterType, TommorowProps } from '../react-app-env'

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

const mapStateToProps = (state: TommorowState) => ({
    posters: state.tommorowReducer.aug_24
})

const mapDispatchToProps = (dispatch: any) => ({
    asyncFetchTommorowMovies: () => dispatch(asyncFetchTommorowMoviesWidget())
})

export default connect(mapStateToProps, mapDispatchToProps)(Tommorow)
