import { cloneElement } from 'react'
import createHelper from 'recompose/createHelper'

const withRef = (ref, additionalProps = {}) => BaseComponent => {
  return props => cloneElement(
    BaseComponent(Object.assign({}, props, additionalProps)),
    { ref }
  )
}

export default createHelper(withRef, 'withRef')
