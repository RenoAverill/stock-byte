import React from 'react'
import Video from '../../videos/video.mp4'
import { VideoBackground } from './BackgoundElements'

const HeroSection = () => {
  return (
    <>
      <VideoBackground autoPlay loop muted src={Video} type='video/mp4'/>
    </>
  )
}

export default HeroSection;