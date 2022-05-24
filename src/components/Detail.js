import React from 'react'
import styledComponents from 'styled-components'

function Detail() {
  return (
    <Container>
      <Background>
        <img src="https://image.tmdb.org/t/p/original/mEL6An10IrsdgBBtTLbiqElCZTi.jpg" />
      </Background>
      <ImageTitle>
        <img src="/images/bao-logo.png" />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
        <img src="/images/play-icon-white.png" />
        <span>TRAILER</span>
        </TrailerButton>
        <AddButton>
        <span>+</span>
        </AddButton>
        <GroupWatchButton>
        <img src="/images/group-icon.png" />
        </GroupWatchButton>
      </Controls>
      <Subtitle>

      </Subtitle>
      <Description>
        Descripton about the movie.
      </Description>
    </Container>
  )
}

export default Detail

const Container = styledComponents.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`

const Background = styledComponents.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
`

const ImageTitle = styledComponents.div`
    height: 30vh;
    min-height: 170px;
    width: 35vw;
    min-width: 200px;

    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
`

const Controls = styledComponents.div`
    display: flex;
    align-items: center;
`

const PlayButton = styledComponents.button`
    border-radius: 4px;
    font-size: 15px;
    padding: 0 24px;
    margin-right: 22px;
    display: flex;
    align-items: center;
    height: 56px;
    background: rgb(249, 249, 249);
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;
    
    &:hover {
      background: rgb(198, 198, 198);
    }
`

const TrailerButton = styledComponents(PlayButton)`
    background: rgb(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
    text-transform: uppercase;
`

const AddButton = styledComponents.button`
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid #fff;
    background: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    margin-right: 16px;

    span {
      font-size: 30px;
      color: #fff;
    }
`

const GroupWatchButton = styledComponents(AddButton)`
    background: rgb(0, 0, 0);
`

const Subtitle = styledComponents.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`

const Description = styledComponents.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);
`