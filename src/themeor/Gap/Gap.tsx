import React from 'react'
import css from './Gap.module.scss'
import cn from '../utils/class-name'
import * as Types from '../config-types'
import {ThemeContext} from '../context'
import TryTagless from '../TryTagless'
import newId from '../utils/new-id'

export interface PureGapProps {
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
}
export interface TaglessGapProps extends PureGapProps,  React.ComponentPropsWithoutRef<any> {
  TRY_RECURSIVE_TAGLESS?: true,
  FORCE_TAGLESS?: true,
}
export interface GapProps extends TaglessGapProps, React.HTMLAttributes<HTMLDivElement> {
  TRY_TAGLESS?: boolean,
  forwardRef?: (node: any) => void,
}

interface GapState {
  inrow?: boolean,
}

export default class Gap extends React.PureComponent<GapProps, GapState> {
  static contextType = ThemeContext
  static TryTagless = (props: TaglessGapProps) => <Gap TRY_TAGLESS {...props} />
  static defaultProps = {}

  state = {inrow: false}

  // If is inside of flexbox row, make inrow automatically
  ref = (node: any) => {
    const {forwardRef, inrow} = this.props
    if (!node) {return}
    forwardRef && forwardRef(node)

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
      TRY_TAGLESS,
      TRY_RECURSIVE_TAGLESS,
      FORCE_TAGLESS,
      forwardRef,
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

    return (TRY_TAGLESS || TRY_RECURSIVE_TAGLESS || FORCE_TAGLESS) ? (
      <TryTagless forwardRef={this.ref} force={FORCE_TAGLESS} recursive={TRY_RECURSIVE_TAGLESS} {...componentProps} />
    ) : (
      <div ref={this.ref} {...componentProps} />
    )
  }
}