import React from 'react'
import cn from '../utils/class-name'
import css from './Reaction.module.scss'
import * as Types from '../config-types'
import consoleMessage from '../utils/console-message'
import {ThemeContext} from '../context'

type TrackType = 'active' | 'focus' | 'hover'

export interface ReactionProps extends React.AllHTMLAttributes<HTMLElement> {
  cursor?: 'pointer' | 'default' | 'text',
  speed?: 'none' | Types.Scale,
  track?: Array<TrackType> | TrackType,
  smooth?: boolean,
}

export interface ReactionState {
  hover: boolean,
  active: boolean,
  focus: boolean,
  hoverOrFocus: boolean,
}

export default class Reaction extends React.Component<ReactionProps, ReactionState> {
  static contextType = ThemeContext
  static defaultProps = {
    speed: 'md',
    cursor: 'pointer',
    track: ['hover', 'focus'],
  }
  state = {
    hover: false,
    active: false,
    focus: false,
    hoverOrFocus: false,
  }

  handleMouseOver = (event: React.MouseEvent<HTMLElement>) => {
    this.props.onMouseOver && this.props.onMouseOver(event)
    this.setState({hover: true, hoverOrFocus: true})
  }

  handleMouseOut = (event: React.MouseEvent<HTMLElement>) => {
    this.props.onMouseOut && this.props.onMouseOut(event)
    this.setState({hover: false, hoverOrFocus: this.state.focus})
  }

  handleMouseDown = (event: React.MouseEvent<HTMLElement>) => {
    this.props.onMouseDown && this.props.onMouseDown(event)
    this.setState({active: true})
  }

  handleMouseUp = (event: React.MouseEvent<HTMLElement>) => {
    this.props.onMouseUp && this.props.onMouseUp(event)
    this.setState({active: false})
  }

  handleFocus = (event: React.FocusEvent<HTMLElement>) => {
    this.props.onFocus && this.props.onFocus(event)
    this.setState({focus: true, hoverOrFocus: true})
  }

  handleBlur = (event: React.FocusEvent<HTMLElement>) => {
    this.props.onFocus && this.props.onFocus(event)
    this.setState({focus: false, hoverOrFocus: this.state.hover})
  }

  render() {
    const {children, track, cursor, speed, className, smooth, ...restProps} = this.props

    if (typeof children !== 'function') {
      consoleMessage({
        text: 'Only accept function as "children"',
        type: 'error',
        source: this,
      })
      return null
    }

    const passState = {
      className: {
        ignoreEvents: css.ignore,
        sursor: cursor && css[`cursor-${cursor}`],
      },
      ...this.state,
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
      passProps.onMouseOver = this.handleMouseOver
      passProps.onMouseOut = this.handleMouseOut
    }

    if (track?.includes('active')) {
      passProps.onMouseDown = this.handleMouseDown
      passProps.onMouseUp = this.handleMouseUp
    }

    if (track?.includes('focus')) {
      passProps.onFocus = this.handleFocus
      passProps.onBlur = this.handleBlur
    }

    return (
      children(passProps, passState)
    )
  }
}