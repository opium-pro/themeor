import React from 'react'
import cn from '../utils/class-name'
import css from './Reaction.module.scss'
import consoleMessage from '../utils/console-message'
import {ReactionProps, ReactionState} from './types'

export default function Reaction({
  children,
  track = ['hover', 'focus'],
  cursor = 'pointer',
  speed = 'md',
  className,
  smooth,
  ...restProps
}: ReactionProps) {

  const [state, setState] = React.useState({
    hover: false,
    active: false,
    focus: false,
    hoverOrFocus: false,
  })

  function handleMouseOver(event: React.MouseEvent<HTMLElement>) {
    restProps.onMouseOver && restProps.onMouseOver(event)
    setState({hover: true, hoverOrFocus: true} as ReactionState)
  }

  function handleMouseOut(event: React.MouseEvent<HTMLElement>) {
    restProps.onMouseOut && restProps.onMouseOut(event)
    setState({hover: false, hoverOrFocus: state.focus} as ReactionState)
  }

  function handleMouseDown(event: React.MouseEvent<HTMLElement>) {
    restProps.onMouseDown && restProps.onMouseDown(event)
    setState({active: true} as ReactionState)
  }

  function handleMouseUp(event: React.MouseEvent<HTMLElement>) {
    restProps.onMouseUp && restProps.onMouseUp(event)
    setState({active: false} as ReactionState)
  }

  function handleFocus(event: React.FocusEvent<HTMLElement>) {
    restProps.onFocus && restProps.onFocus(event)
    setState({focus: true, hoverOrFocus: true} as ReactionState)
  }

  function handleBlur(event: React.FocusEvent<HTMLElement>) {
    restProps.onFocus && restProps.onFocus(event)
    setState({focus: false, hoverOrFocus: state.hover} as ReactionState)
  }

  if (typeof children !== 'function') {
    consoleMessage({
      text: 'Only accept function as "children"',
      type: 'error',
      source: Reaction,
    })
    return null
  }

  const passState = {
    className: {
      ignoreEvents: css.ignore,
      sursor: cursor && css[`cursor-${cursor}`],
    },
    ...state,
  }

  const passProps = {
    className: cn(
      css.reaction,
      cursor && css[`cursor-${cursor}`],
      smooth && speed && css[`speed-${speed}`],
      className,
    ),
    ...restProps,
  }

  if (track?.includes('hover')) {
    passProps.onMouseOver = handleMouseOver
    passProps.onMouseOut = handleMouseOut
  }

  if (track?.includes('active')) {
    passProps.onMouseDown = handleMouseDown
    passProps.onMouseUp = handleMouseUp
  }

  if (track?.includes('focus')) {
    passProps.onFocus = handleFocus
    passProps.onBlur = handleBlur
  }

  return (
    children(passProps, passState)
  )
}