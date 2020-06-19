import React from 'react'
import cn from '../utils/class-name'
import css from './Reaction.module.scss'
import * as Types from '../config-types'
import consoleMessage from '../utils/console-message'
import {ThemeContext} from '../context'
import newId from '../utils/new-id'

type TrackType = 'active' | 'focus' | 'hover'

export interface ReactionProps extends React.AllHTMLAttributes<HTMLElement> {
  cursor?: 'pointer' | 'default' | 'text',
  speed?: 'none' | Types.Scale,
  track?: Array<TrackType> | TrackType,
}

export interface ReactionState {
  hover: boolean,
  active: boolean,
  focus: boolean,
}

export default class Reaction extends React.Component<ReactionProps, ReactionState> {
  static contextType = ThemeContext
  static id = newId()

  state = {
    hover: false,
    active: false,
    focus: false,
  }
  static defaultProps = {
    speed: 'md',
  }

  fastState: any = {
    hover: false,
    active: false,
    focus: false,
  }

  componentProps: any = {}

  handleMouseOver = (event: React.MouseEvent<HTMLElement>) => {
    this.props.onMouseOver && this.props.onMouseOver(event)
    this.fastState.hover = true
    this.forceUpdate()
  }

  handleMouseOut = (event: React.MouseEvent<HTMLElement>) => {
    this.props.onMouseOut && this.props.onMouseOut(event)
    this.fastState.hover = false
    this.forceUpdate()
  }

  handleMouseDown = (event: React.MouseEvent<HTMLElement>) => {
    this.props.onMouseDown && this.props.onMouseDown(event)
    this.fastState.active = true
    this.forceUpdate()
  }

  handleMouseUp = (event: React.MouseEvent<HTMLElement>) => {
    this.props.onMouseUp && this.props.onMouseUp(event)
    this.fastState.active = false
    this.forceUpdate()
  }

  handleFocus = (event: React.FocusEvent<HTMLElement>) => {
    this.props.onFocus && this.props.onFocus(event)
    this.fastState.focus = true
    this.forceUpdate()
  }

  handleBlur = (event: React.FocusEvent<HTMLElement>) => {
    this.props.onFocus && this.props.onFocus(event)
    this.fastState.focus = false
    this.forceUpdate()
  }

  render() {
    const {children, track, cursor, speed, className, ...restProps} = this.props

    if (typeof children !== 'function') {
      consoleMessage({
        text: 'Only accept function as "children"',
        type: 'error',
        source: this,
      })
      return null
    }

    this.componentProps = {
      props: {
        className: cn(
          css.reaction,
          cursor && css[`cursor-${cursor}`],
          speed && css[`speed-${speed}`],
          className,
        ),
        ...restProps,
      },
      className: {
        ignoreEvents: css.ignore,
        speed: speed && css[`speed-${speed}`],
        sursor: cursor && css[`cursor-${cursor}`],
      },
      ...this.fastState,
    }

    if (track?.includes('hover')) {
      this.componentProps.props.onMouseOver = this.handleMouseOver
      this.componentProps.props.onMouseOut = this.handleMouseOut
    }

    if (track?.includes('active')) {
      this.componentProps.props.onMouseDown = this.handleMouseDown
      this.componentProps.props.onMouseUp = this.handleMouseUp
    }

    if (track?.includes('focus')) {
      this.componentProps.props.onFocus = this.handleFocus
      this.componentProps.props.onBlur = this.handleBlur
    }

    return (
      children({...this.componentProps})
    )
  }
}