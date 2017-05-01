import React from 'react'
import {render} from 'react-dom'
import withAnimation from '../../src/withAnimation'

const Header = (props) => {
  return (
    <h1>{props.children}</h1>
  )
}

const AnimatedHeader = withAnimation(
  {
    transform: [
      'scaleY(0.5)',
      'scaleX(0.5)',
      'scaleY(0.5)'
    ],
    background: [
      'red',
      'blue',
      'orange'
    ],
    easing: 'ease-in-out'
  },
  {
    direction: 'alternate',
    duration: 500,
    iterations: Infinity
  }
)(Header)

const Hello = (props) => {
  return (
    <div>
      <AnimatedHeader>Hello World!</AnimatedHeader>
      <p>{props.message}</p>
      <a href="#" onClick={e => {
          e.preventDefault()
          props.animation.playback.pause()
        }}>Pause</a>
      <a href="#" onClick={e => {
          e.preventDefault()
          props.animation.playback.play()
        }}>Play</a>
    </div>
  )
}

const AnimatedHello = withAnimation(
  {
    opacity: [0.5, 1]
  },
  {
    direction: 'alternate',
    duration: 500,
    iterations: Infinity
  }
)(Hello)

render(<AnimatedHello message="Hello World!" />, document.querySelector('#demo'))
