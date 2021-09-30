import React from 'react'
import cn from '../utils/class-names'
import { ReactionProps, ReactionState, REACTION_NAME } from './types'
import { ReactionContext } from './context'
import { useCss } from './styles'
import { useConfig } from '../utils/use-config'
import { useTheme } from '../context'

Reaction.displayName = REACTION_NAME

export function Reaction({
  children,
  track = ['hover', 'focus'],
  cursor = 'pointer',
  duration = 'default',
  disabled = false,
  smooth,
  property = smooth ? 'all' : undefined,
  timingFunction = 'ease',
  className,
  onFocus,
  onBlur,
  onMouseOver,
  onMouseOut,
  onMouseDown,
  onMouseUp,
  style = {},
  ...restProps
}: ReactionProps) {
  const [state, setState] = React.useState({
    hover: false,
    active: false,
    focus: false,
    hoverOrFocus: false,
  })
  const { reactionConfig, customReactionValue } = useConfig(useTheme())
  const css = useCss()
  const newStyle = style

  if (property) { newStyle.transitionProperty = property }
  if (timingFunction) { newStyle.transitionTimingFunction = timingFunction }
  if (customReactionValue({duration})) { newStyle.transitionDuration = duration as any }

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
    cursor,
    className: {
      ignoreEvents: css[`ignore`],
      cursor: reactionConfig({cursor}) && css[`cursor-${cursor}`],
    },
    ...state,
  }

  const passProps: any = {
    className: cn(
      css[`reaction`],
      reactionConfig({cursor}) && css[`cursor-${cursor}`],
      reactionConfig({duration}) && css[`duration-${duration}`],
      className,
    ),
    style: newStyle,
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
      ...passState,
      passProps: disabled ? {} : passProps,
      disabled,
    }}>
      {(typeof children === 'function') ? (
        children(passProps, passState)
      ) : (children)}
    </ReactionContext.Provider>
  )
}