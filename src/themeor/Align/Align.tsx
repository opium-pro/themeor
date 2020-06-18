import React from 'react'
import css from './Align.module.scss'
import cn from '../utils/class-name'
import * as Types from '../config-types'
import TryTagless from '../TryTagless'
import Fit from '../Fit'
import {ThemeContext} from '../context'
import Gap from '../Gap'

export interface PureAlignProps {
  row?: boolean,
  stack?: boolean,
  template?: string,
  vert?: 'stretch' | 'top' | 'center' | 'bottom',
  hor?: 'stretch' | 'left' | 'center' | 'right',
  gapVert?: Types.Scale,
  gapHor?: Types.Scale,
}
export interface TaglessAlignProps extends PureAlignProps {
  TRY_RECURSIVE_TAGLESS?: true,
  FORCE_TAGLESS?: true,
  children?: React.ReactNode,
}
export interface AlignProps extends TaglessAlignProps, React.HTMLAttributes<HTMLDivElement> {
  TRY_TAGLESS?: boolean,
  forwardRef?: any,
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
      gapVert,
      gapHor,
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
        gapVert && css[`vert-gap-${gapVert}`],
        gapHor && css[`hor-gap-${gapHor}`],
        stack && css.stack,
        stack && css.row,
        !!template && css.template,
        className
      ),
      style: newStyle,
      children,
      ...restProps,
    }

    if (!template && (gapVert || gapHor)) {
      if (React.Children.count(children) === 1) {
        return (
          <Gap vert={gapVert} hor={gapHor}>
            {children}
          </Gap>
        )
      }

      const {children: componentChildren, ...restComponentProps} = componentProps
      const wrapChildClass = cn(
        gapVert && css[`item-vert-gap-${gapVert}`],
        gapHor && css[`item-hor-gap-${gapHor}`],
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
      <TryTagless force={FORCE_TAGLESS} recursive={TRY_RECURSIVE_TAGLESS} {...componentProps} />
    ) : (
      <div ref={forwardRef} {...componentProps} />
    )
  }
}