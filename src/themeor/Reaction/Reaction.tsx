import React from 'react'
import cn from '../utils/class-names'
import { ReactionProps, ReactionState, REACTION_NAME } from './types'
import { ReactionContext } from './context'
import {useCss} from './styles'

Reaction.displayName = REACTION_NAME

export function Reaction({
  children,
  track = ['hover', 'focus'],
  cursor = 'pointer',
  duration = 'default',
  className,
  smooth,
  onFocus,
  onBlur,
  onMouseOver,
  onMouseOut,
  onMouseDown,
  onMouseUp,
  ...restProps
}: ReactionProps) {

  const [state, setState] = React.useState({
    hover: false,
    active: false,
    focus: false,
    hoverOrFocus: false,
  })

  const css = useCss()

  function handleMouseOver(event: React.MouseEvent<HTMLElement>) {
    onMouseOver && onMouseOver(event)
    if (!state.hover || !state.hoverOrFocus) {
      setState({ ...state, hover: true, hoverOrFocus: true } as ReactionState)
    }
  }

  function handleMouseOut(event: React.MouseEvent<HTMLElement>) {
    onMouseOut && onMouseOut(event)
    if (state.hover || state.hoverOrFocus) {
      setState({ ...state, hover: false, active: false, hoverOrFocus: state.focus } as ReactionState)
    }
  }

  function handleMouseDown(event: React.MouseEvent<HTMLElement>) {
    onMouseDown && onMouseDown(event)
    if (!state.active) {
      setState({ ...state, active: true } as ReactionState)
    }
  }

  function handleMouseUp(event: React.MouseEvent<HTMLElement>) {
    onMouseUp && onMouseUp(event)
    if (state.active) {
      setState({ ...state, active: false } as ReactionState)
    }
  }

  function handleFocus(event: React.FocusEvent<HTMLElement>) {
    onFocus && onFocus(event)
    if (!state.focus || !state.hoverOrFocus) {
      setState({ ...state, focus: true, hoverOrFocus: true } as ReactionState)
    }
  }

  function handleBlur(event: React.FocusEvent<HTMLElement>) {
    onBlur && onBlur(event)
    if (state.focus || state.hoverOrFocus) {
      setState({ ...state, focus: false, hoverOrFocus: state.hover } as ReactionState)
    }
  }

  const passState = {
    className: {
      ignoreEvents: css[`ignore`],
      sursor: cursor && css[`cursor-${cursor}`],
    },
    ...state,
  }

  const passProps: any = {
    className: cn(
      css[`reaction`],
      cursor && css[`cursor-${cursor}`],
      smooth && duration && css[`duration-${duration}`],
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
    <ReactionContext.Provider value={{
      reaction: state,
      passProps,
    }}>
      {(typeof children === 'function') ? (
        children(passProps, passState)
      ) : (children)}
    </ReactionContext.Provider>
  )
}