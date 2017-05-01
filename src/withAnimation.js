import withRef from './withRef'
import withProps from 'recompose/withProps'
import createHelper from 'recompose/createHelper'

const withAnimation = (keyframes, options) => BaseComponent => {
  let animation = null
  return withRef(ref => {
    if (ref) {
      animation = ref.animate(keyframes, options)
    }
  },
  {
    animation: {
      playback: {
        get: () => {
          return animation
        },
        cancel: () => {
          if (animation) {
            return animation.cancel()
          }
          return null
        },
        finish: () => {
          if (animation) {
            return animation.finish()
          }
          return null
        },
        play: () => {
          if (animation) {
            return animation.play()
          }
          return null
        },
        pause: () => {
          if (animation) {
            return animation.pause()
          }
          return null
        },
        reverse: () => {
          if (animation) {
            return animation.reverse()
          }
          return null
        }
      }
    }
  })(BaseComponent)
}

export default createHelper(withAnimation, 'withAnimation')
