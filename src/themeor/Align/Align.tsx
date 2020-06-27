import React from 'react'
import css from './Align.module.scss'
import cn from '../utils/class-name'
import * as Types from '../config-types'
import TryTagless from '../TryTagless'
import {ThemeContext} from '../context'
import Gap from '../Gap'

export interface PureAlignProps {
  row?: boolean,
  stack?: boolean,
  pattern?: string,
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
export interface AlignSpanProps extends AlignProps {
  col?: number,
}

export default class Align extends React.Component<AlignProps> {
  static contextType = ThemeContext
  static defaultProps = {style: {}, vert: 'top', hor: 'stretch'}
  static TryTagless = (props: TaglessAlignProps) => <Align TRY_TAGLESS {...props} />
  static Spacer = ({className, ...restProps}: AlignProps) => <Align {...restProps} className={cn(className, css.spacer)} />
  static Span = ({col = 1, style, ...restProps}: AlignSpanProps) => {
    const newStyle: any = {
      ...style,
      gridColumnEnd: `span ${col}`
    }
    return (<Align {...restProps} style={newStyle} />)
  }

  render() {
    const {
      row,
      vert,
      hor,
      className,
      TRY_TAGLESS,
      pattern,
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
    if (!!pattern) { newStyle.gridTemplateColumns = pattern }

    const componentProps = {
      className: cn(
        css.align,
        row && css.row,
        !row && !stack && !pattern && css.col,
        vert && css[`vert-${vert}`],
        hor && css[`hor-${hor}`],
        gapVert && css[`vert-gap-${gapVert}`],
        gapHor && css[`hor-gap-${gapHor}`],
        stack && css.stack,
        stack && css.row,
        !!pattern && css.pattern,
        className
      ),
      style: newStyle,
      children,
      ...restProps,
    }

    if (!pattern && (gapVert || gapHor)) {
      const {children: componentChildren, ...restComponentProps} = componentProps
      const wrapChildClass = cn(
        gapVert && css[`item-vert-gap-${gapVert}`],
        gapHor && css[`item-hor-gap-${gapHor}`],
      )
      return (
        <Align {...restComponentProps}>
          {React.Children.map(children, (child: any) => {
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