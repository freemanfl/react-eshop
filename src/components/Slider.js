import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 80vh;
    display: flex;
    position: relative;

`

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: ${props => props.direction === "left" && "10px"};
  right: ${props => props.direction === "right" && "10px "};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
`


const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`

const Slide = styled.div`
    display: flex;
    align-items: center;
    flex: 1;

`

const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    flex: 1;

`

const Image = styled.img`
    width: 100vw;
    height: 90vh;
`
const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 50px;
`

const Title = styled.h1`

`
const Desc = styled.p`

`
const Button = styled.button`

`

const Slider = () => {
  return (
    <Container>
        <Arrow direction="left">
            <ArrowLeftOutlined>

            </ArrowLeftOutlined>
        </Arrow>
        <Wrapper>
            <Slide>
                <ImageContainer>
                    <Image src='images/slider.jpg' />
                </ImageContainer>
                <InfoContainer>
                    <Title>SUMMER SALE</Title>
                    <Desc> DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</Desc>
                    <Button>SHOW MORE</Button>
                </InfoContainer>
            </Slide>
        </Wrapper>
        <Arrow direction="right">
            <ArrowRightOutlined>
                
            </ArrowRightOutlined>
        </Arrow>
    </Container>
  )
}

export default Slider