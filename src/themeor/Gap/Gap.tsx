import React from 'react'
import css from './Gap.module.scss'
import cn from '../utils/class-name'
import * as Types from '../config-types'
import {ThemeContext} from '../context'
import Merge from '../Merge'
import newId from '../utils/new-id'

export interface GapProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: Types.Scale | 'none',
  inrow?: boolean,
  vert?: Types.Scale | 'none',
  hor?: Types.Scale | 'none',
  top?: Types.Scale | 'none',
  right?: Types.Scale | 'none',
  bottom?: Types.Scale | 'none',
  left?: Types.Scale | 'none',
  width?: string,
  height?: string,
  MERGE?: boolean,
  MERGE_CHAIN?: true,
  FORCE_MERGE?: true,
  forwardedRef?: (node: any) => void,
}
interface GapState {
  inrow?: boolean,
}

export default class Gap extends React.PureComponent<GapProps, GapState> {
  static contextType = ThemeContext
  static id = newId()
  static defaultProps = {}

  state = {inrow: false}

  // If is inside of flexbox row, make inrow automatically
  ref = (node: any) => {
    const {forwardedRef, inrow} = this.props
    if (!node) {return}
    forwardedRef && forwardedRef(node)

    if (inrow === true) {
      this.setState({inrow: true})
    } else if (inrow === false) {
      this.setState({inrow: false})
    }

    const parentStyles = getComputedStyle(node.parentElement)
    if (parentStyles.flexDirection === 'row' && parentStyles.display === 'flex') {
      this.setState({inrow: true})
    } else {
      this.setState({inrow: false})
    }
  }

  render() {
    const {
      className,
      size,
      width,
      height,
      top,
      vert,
      hor,
      right,
      bottom,
      left,
      children,
      MERGE,
      MERGE_CHAIN,
      FORCE_MERGE,
      forwardedRef,
      ...restProps
    } = this.props

    const inrow = this.state.inrow || this.props.inrow

    const defaultGap = 'md'

    const componentProps = {
      className: cn(
        css.gap,
        !children && inrow && css[`left-${size || defaultGap}`],
        !children && !inrow && css[`top-${size || defaultGap}`],
        top && css[`top-${top}`],
        right && css[`right-${right}`],
        bottom && css[`bottom-${bottom}`],
        left && css[`left-${left}`],
        size && !!children && css[`size-${size}`],
        vert && css[`vert-${vert}`],
        hor && css[`hor-${hor}`],
        !size && !!children && !right && !left && !top && !bottom && !vert && !hor && css[`size-${defaultGap}`],
        className
      ),
      children,
      ...restProps,
    }

    if (typeof children === 'function') {
      return children(componentProps)
    }

    return (MERGE || MERGE_CHAIN || FORCE_MERGE) ? (
      <Merge forwardedRef={this.ref} force={FORCE_MERGE} recursive={MERGE_CHAIN} {...componentProps} />
    ) : (
      <div ref={this.ref} {...componentProps} />
    )
  }
}