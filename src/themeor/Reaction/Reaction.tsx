import React, { useEffect } from 'react'
import cn from '../utils/class-names'
import { ReactionProps, ReactionState, REACTION_NAME } from './types'
import { ReactionContext } from './context'
import { useCss } from './styles'
import { getConfig } from '../utils/get-config'
import { useTheme } from '../context'


Reaction.displayName = REACTION_NAME

export function Reaction({
  children,
  track = ['hover', 'focus'],
  duration = 'default',
  disabled = false,
  cursor = disabled ? 'default' : 'pointer',
  smooth,
  property = smooth ? 'all' : undefined,
  timingFunction = 'ease',
  className,
  onFocus,
  onBlur,
  onMouseMove,
  onMouseLeave,
  onMouseDown,
  onMouseUp,
  button,
  style = {},
  ...restProps
}: ReactionProps) {
  const [state, setState] = React.useState({
    hover: false,
    active: false,
    focus: false,
    hoverOrFocus: false,
    restProps,
  } as ReactionState)
  const { reactionConfig, customReactionValue } = getConfig(useTheme().normalizedConfig)
  const css = useCss()
  const newStyle = style

  if (property) { newStyle.transitionProperty = property }
  if (timingFunction) { newStyle.transitionTimingFunction = timingFunction }
  if (customReactionValue({ duration })) { newStyle.transitionDuration = duration as any }

  useEffect(() => {
    if (disabled) {
      setState(state => ({ ...state, hover: false, hoverOrFocus: false, focus: false, active: false }))
    }
  }, [disabled])

  function handleMouseMove(event: React.MouseEvent<HTMLElement>) {
    onMouseMove && onMouseMove(event)
    if (!state.hover || !state.hoverOrFocus) {
      setState({ ...state, hover: true, hoverOrFocus: true } as ReactionState)
    }
  }

  function handleMouseLeave(event: React.MouseEvent<HTMLElement>) {
    onMouseLeave && onMouseLeave(event)
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
    onBlur?.(event)
    if (state.focus || state.hoverOrFocus) {
      setState({ ...state, focus: false, hoverOrFocus: state.hover } as ReactionState)
    }
  }

  const passState: ReactionContext = {
    cursor,
    classNames: {
      ignoreEvents: css[`ignore`],
      cursor: reactionConfig({ cursor }) && css[`cursor-${cursor}`],
    },
    ...state,
  }

  const passProps: ReactionProps = {
    className: cn(
      css[`reaction`],
      reactionConfig({ cursor }) && css[`cursor-${cursor}`],
      reactionConfig({ duration }) && css[`duration-${duration}`],
      className,
    ),
    style: newStyle,
    ...restProps,
  }

  if (track && track.includes('hover')) {
    passProps.onMouseMove = handleMouseMove
    passProps.onMouseLeave = handleMouseLeave
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
        (children as any)(disabled ? {} : passProps, passState)
      ) : (children)}
    </ReactionContext.Provider>
  )
}