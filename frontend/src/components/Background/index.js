import React from 'react'
import Video from '../../videos/video.mp4'
import { VideoBackground, LoginContainer, LoginInput, SignUpBtn } from './BackgoundElements'

const HeroSection = () => {
  return (
    <>
      <VideoBackground autoPlay loop muted src={Video} type='video/mp4'/>
        <LoginContainer>
          
            <LoginInput placeholder='USERNAME'/>
            <LoginInput  type='password' placeholder='PASSWORD'/>
            <SignUpBtn type='button'/>
      </LoginContainer>
    </>
  )
}

export default HeroSection;