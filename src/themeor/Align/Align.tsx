import React from 'react'
import css from './Align.module.scss'
import cn from '../utils/class-name'
import * as Types from '../config-types'
import Merge from '../Merge'
import Fit from '../Fit'
import {ThemeContext} from '../context'
import newId from '../utils/new-id'

export interface AlignProps extends React.HTMLAttributes<HTMLDivElement> {
  row?: boolean,
  stack?: boolean,
  template?: string,
  vert?: 'stretch' | 'top' | 'center' | 'bottom',
  hor?: 'stretch' | 'left' | 'center' | 'right',
  vertGap?: Types.Scale,
  horGap?: Types.Scale,
  MERGE?: boolean,
  MERGE_CHAIN?: true,
  style?: any,
  forwardedRef?: (node: any) => void,
  FORCE_MERGE?: true,
}

export default class Align extends React.PureComponent<AlignProps> {
  static contextType = ThemeContext
  static defaultProps = {style: {}, vert: 'top', hor: 'stretch'}
  static id = newId()

  render() {
    const {
      row,
      vert,
      hor,
      className,
      MERGE,
      template,
      vertGap,
      horGap,
      style,
      stack,
      FORCE_MERGE,
      forwardedRef,
      MERGE_CHAIN,
      children,
      ...restProps
    } = this.props

    const newStyle = {...style}
    if (!!template) { newStyle.gridTemplateColumns = template }

    const componentProps = {
      className: cn(
        css.align,
        row && css.row,
        !row && !stack && !template && css.col,
        vert && css[`vert-${vert}`],
        hor && css[`hor-${hor}`],
        vertGap && css[`vert-gap-${vertGap}`],
        horGap && css[`hor-gap-${horGap}`],
        stack && css.stack,
        stack && css.row,
        !!template && css.template,
        className
      ),
      style: newStyle,
      children,
      ...restProps,
    }

    if (typeof children === 'function') {
      return children(componentProps)
    }

    if (!template && (vertGap || horGap)) {
      const {children, ...restComponentProps} = componentProps
      const wrapChildClass = cn(
        vertGap && css[`item-vert-gap-${vertGap}`],
        horGap && css[`item-hor-gap-${horGap}`],
      )

      return (
        <Align {...restComponentProps}>
          {React.Children.map(children, (child: any) => {
            if (child && typeof child === 'object' && child.type && child.type === Fit) {
              return (
                <Fit className={wrapChildClass} {...child.props} />
              )
            }

            return <div className={wrapChildClass}>{child}</div>
          })}
        </Align>
      )
    }

    return (MERGE || MERGE_CHAIN || FORCE_MERGE) ? (
      <Merge forwardedRef={forwardedRef} force={FORCE_MERGE} recursive={MERGE_CHAIN} {...componentProps} />
    ) : (
      <div ref={forwardedRef} {...componentProps} />
    )
  }
}