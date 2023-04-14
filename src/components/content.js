import React from 'react'
import Home from './home'
import About from './about'
import Resume from './resume'
import Services from './services'
import Skills from './skills'
import Portfolio from './portfolio'

export default function Content() {
  return (
    <div className='ml-96'>
    <Home/>
    <About/>
    <Resume />
    <Services/>
    <Skills />
    <Portfolio/>
    </div>
  )
}
