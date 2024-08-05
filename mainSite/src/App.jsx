import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Services from './Components/Services/Services'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'

export default function App() {

  const [playState, setPlayState] = useState(false);

  return (
    <>
      <Navbar />
      <Hero />

      <div className='container'>
        <Title title={"our services"} subtitle={"what we offer"} />
        <Services />
      </div>

      <div className='container'>
        <Title title={"about Us"} subtitle={"know more about us"} />
        <About setPlayState={setPlayState} />
      </div>

      <div className='container'>
        <Title title={"gallery"} subtitle={"campus Photos"} />
        <Campus />
      </div>

      <div className='container'>
        <Title title={"testimonials"} subtitle={"what client says?"} />
        <Testimonials />
      </div>

      <div className='container'>
        <Title title={"contact us"} subtitle={"get in touch"} />
        <Contact />
      </div>

      <div className='container'>
        <Footer />
      </div>

      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </>

  )
}
