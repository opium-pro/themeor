import React from 'react'
import css from './Align.module.scss'
import cn from '../utils/class-name'
import * as Types from '../config-types'
import TryTagless from '../TryTagless'
import Fit from '../Fit'
import {ThemeContext} from '../context'
import newId from '../utils/new-id'

export interface PureAlignProps {
  row?: boolean,
  stack?: boolean,
  template?: string,
  vert?: 'stretch' | 'top' | 'center' | 'bottom',
  hor?: 'stretch' | 'left' | 'center' | 'right',
  vertAlign?: Types.Scale,
  horAlign?: Types.Scale,
}
export interface TaglessAlignProps extends PureAlignProps,  React.ComponentPropsWithoutRef<any> {
  TRY_RECURSIVE_TAGLESS?: true,
  FORCE_TAGLESS?: true,
}
export interface AlignProps extends TaglessAlignProps, React.HTMLAttributes<HTMLDivElement> {
  TRY_TAGLESS?: boolean,
  forwardRef?: (node: any) => void,
}

export default class Align extends React.PureComponent<AlignProps> {
  static contextType = ThemeContext
  static defaultProps = {style: {}, vert: 'top', hor: 'stretch'}
  static TryTagless = (props: TaglessAlignProps) => <Align TRY_TAGLESS {...props} />

  render() {
    const {
      row,
      vert,
      hor,
      className,
      TRY_TAGLESS,
      template,
      vertGap,
      horGap,
      style,
      stack,
      FORCE_TAGLESS,
      forwardRef,
      TRY_RECURSIVE_TAGLESS,
      children,
      ...restProps
    } = this.props

    const newStyle: any = {...style}
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

    return (TRY_TAGLESS || TRY_RECURSIVE_TAGLESS || FORCE_TAGLESS) ? (
      <TryTagless forwardRef={forwardRef} force={FORCE_TAGLESS} recursive={TRY_RECURSIVE_TAGLESS} {...componentProps} />
    ) : (
      <div ref={forwardRef} {...componentProps} />
    )
  }
}