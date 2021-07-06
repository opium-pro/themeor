import React from 'react'
import cn from '../utils/class-name'
import css from './Reaction.module.css'
import consoleMessage from '../utils/console-message'
import {ReactionProps, ReactionState} from './types'

export function Reaction({
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
    if (!state.hover || !state.hoverOrFocus) {
      setState({...state, hover: true, hoverOrFocus: true} as ReactionState)
    }
  }

  function handleMouseOut(event: React.MouseEvent<HTMLElement>) {
    restProps.onMouseOut && restProps.onMouseOut(event)
    if (state.hover || state.hoverOrFocus) {
      setState({...state, hover: false, active: false, hoverOrFocus: state.focus} as ReactionState)
    }
  }

  function handleMouseDown(event: React.MouseEvent<HTMLElement>) {
    restProps.onMouseDown && restProps.onMouseDown(event)
    if (!state.active) {
      setState({...state, active: true} as ReactionState)
    }
  }

  function handleMouseUp(event: React.MouseEvent<HTMLElement>) {
    restProps.onMouseUp && restProps.onMouseUp(event)
    if (state.active) {
      setState({...state, active: false} as ReactionState)
    }
  }

  function handleFocus(event: React.FocusEvent<HTMLElement>) {
    restProps.onFocus && restProps.onFocus(event)
    if (!state.focus || !state.hoverOrFocus) {
      setState({...state, focus: true, hoverOrFocus: true} as ReactionState)
    }
  }

  function handleBlur(event: React.FocusEvent<HTMLElement>) {
    restProps.onBlur && restProps.onBlur(event)
    if (state.focus || state.hoverOrFocus) {
      setState({...state, focus: false, hoverOrFocus: state.hover} as ReactionState)
    }
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

  if (track && track.includes('hover')) {
    passProps.onMouseOver = handleMouseOver
    passProps.onMouseOut = handleMouseOut
  }

  if (track && track.includes('active')) {
    passProps.onMouseDown = handleMouseDown
    passProps.onMouseUp = handleMouseUp
  }

  if (track && track.includes('focus')) {
    passProps.onFocus = handleFocus
    passProps.onBlur = handleBlur
  }

  return (
    children(passProps, passState)
  )
}