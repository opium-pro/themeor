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

export default class Reaction extends React.PureComponent<ReactionProps, ReactionState> {
  static contextType = ThemeContext
  static id = newId()
  static defaultProps = {speed: 'md', cursor: 'pointer'}
  state = {
    hover: false,
    active: false,
    focus: false,
  }

  handleMouseOver = (event: React.MouseEvent<HTMLElement>) => {
    this.props.onMouseOver && this.props.onMouseOver(event)
    this.setState({hover: true})
  }

  handleMouseOut = (event: React.MouseEvent<HTMLElement>) => {
    this.props.onMouseOut && this.props.onMouseOut(event)
    this.setState({hover: false})
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
    this.setState({focus: true})
  }

  handleBlur = (event: React.FocusEvent<HTMLElement>) => {
    this.props.onFocus && this.props.onFocus(event)
    this.setState({focus: false})
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

    const componentProps = {
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
        sursor: cursor && css[`cursor-${cursor}`],
      },
      ...this.state,
    }

    if (track?.includes('hover')) {
      componentProps.props.onMouseOver = this.handleMouseOver
      componentProps.props.onMouseOut = this.handleMouseOut
    }

    if (track?.includes('active')) {
      componentProps.props.onMouseDown = this.handleMouseDown
      componentProps.props.onMouseUp = this.handleMouseUp
    }

    if (track?.includes('focus')) {
      componentProps.props.onFocus = this.handleFocus
      componentProps.props.onBlur = this.handleBlur
    }

    return (
      children({...componentProps})
    )
  }
}