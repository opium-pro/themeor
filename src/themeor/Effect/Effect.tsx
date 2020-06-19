import React from 'react'
import css from './Effect.module.scss'
import cn from '../utils/class-name'
import * as Types from '../config-types'
import TryTagless from '../TryTagless'
import {ThemeContext} from '../context'
import newId from '../utils/new-id'

export interface PureEffectProps {
  transparency?: Types.Scale | 'none' | 'max',
  hidden?: boolean,
}
export interface TaglessEffectProps extends PureEffectProps {
  TRY_RECURSIVE_TAGLESS?: true,
  FORCE_TAGLESS?: true,
  children?: React.ReactNode,
}
export interface EffectProps extends TaglessEffectProps, React.HTMLAttributes<HTMLDivElement> {
  TRY_TAGLESS?: boolean,
  forwardRef?: any,
}

export default class Effect extends React.Component<EffectProps> {
  static contextType = ThemeContext
  static defaultProps = {}
  static TryTagless = (props: TaglessEffectProps) => <Effect TRY_TAGLESS {...props} />

  render() {
    const {
      className,
      hidden,
      TRY_TAGLESS,
      TRY_RECURSIVE_TAGLESS,
      FORCE_TAGLESS,
      transparency,
      forwardRef,
      children,
      ...restProps
    } = this.props

    const componentProps = {
      className: cn(
        css.transparency,
        transparency && css[`transparency-${transparency}`],
        className
      ),
      children,
      ...restProps
    }

    return (TRY_TAGLESS || TRY_RECURSIVE_TAGLESS || FORCE_TAGLESS) ? (
      <TryTagless force={FORCE_TAGLESS} recursive={TRY_RECURSIVE_TAGLESS} {...componentProps} />
    ) : (
      <div ref={forwardRef} {...componentProps} />
    )
  }
}