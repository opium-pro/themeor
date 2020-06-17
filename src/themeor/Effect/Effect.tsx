import React from 'react'
import css from './Effect.module.scss'
import cn from '../utils/class-name'
import * as Types from '../config-types'
import Merge from '../Merge'
import {ThemeContext} from '../context'
import newId from '../utils/new-id'

export interface EffectProps extends React.HTMLAttributes<HTMLDivElement> {
  transparency?: Types.Scale | 'none' | 'max',
  hidden?: boolean,
  MERGE?: boolean,
  MERGE_CHAIN?: true,
  FORCE_MERGE?: true,
  forwardedRef?: (node: any) => void,
}

export default class Effect extends React.PureComponent<EffectProps> {
  static contextType = ThemeContext
  static defaultProps = {}
  static id = newId()

  render() {
    const {
      className,
      hidden,
      MERGE,
      MERGE_CHAIN,
      FORCE_MERGE,
      transparency,
      forwardedRef,
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

    if (typeof children === 'function') {
      return children(componentProps)
    }

    return (MERGE || MERGE_CHAIN || FORCE_MERGE) ? (
      <Merge forwardedRef={forwardedRef} force={FORCE_MERGE} recursive={MERGE_CHAIN} {...componentProps} />
    ) : (
      <div ref={forwardedRef} {...componentProps} />
    )
  }
}