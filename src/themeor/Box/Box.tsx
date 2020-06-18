import React from 'react'
import css from './Box.module.scss'
import {ThemeContext} from '../context'
import cn from '../utils/class-name'
import * as Types from '../config-types'
import isCuctomVariable from '../utils/var-is-custom'
import TryTagless from '../TryTagless'
import Line from '../Line'

export interface PureBoxProps {
  fill?: string,
  strong?: boolean,
  inverse?: boolean,
  fancy?: boolean,
  borderFill?: string,
  borderWeight?: Types.Scale | 'none',
  radius?: Types.Scale | 'none' | 'max',
  radiusTop?: Types.Scale | 'none' | 'max',
  radiusBottom?: Types.Scale | 'none' | 'max',
  radiusRight?: Types.Scale | 'none' | 'max',
  radiusLeft?: Types.Scale | 'none' | 'max',
  radiusTL?: Types.Scale | 'none' | 'max',
  radiusTR?: Types.Scale | 'none' | 'max',
  radiusBR?: Types.Scale | 'none' | 'max',
  radiusBL?: Types.Scale | 'none' | 'max',
  shadow?: Types.Scale | 'none',
  shadowInner?: Types.Scale | 'none',
  glow?: Types.Scale | 'none',
  img?: string,
  noContext?: boolean,
}
export interface TaglessBoxProps extends PureBoxProps, React.ComponentPropsWithoutRef<any> {
  TRY_RECURSIVE_TAGLESS?: true,
  FORCE_TAGLESS?: true,
}
export interface BoxProps extends TaglessBoxProps, React.HTMLAttributes<HTMLDivElement> {
  TRY_TAGLESS?: boolean,
  forwardRef?: (node: any) => void,
}

export default class Box extends React.PureComponent<BoxProps> {
  static contextType = ThemeContext
  static defaultProps = {fill: 'none'}
  static TryTagless = (props: TaglessBoxProps) => <Box TRY_TAGLESS {...props} />

  splitFill = () => {
    const {fill} = this.props
    if (fill?.includes('--')) {
      return fill
    } else if (fill === 'none') {
      return 'base'
    } else if (fill?.includes('-')) {
      return fill.split('-')[0]
    } else {
      return fill
    }
  }

  render() {
    const {
      className,
      fill,
      borderFill,
      borderWeight,
      inverse,
      radius,
      radiusTop,
      radiusRight,
      radiusLeft,
      radiusBottom,
      radiusTL,
      radiusTR,
      radiusBR,
      radiusBL,
      FORCE_TAGLESS,
      TRY_TAGLESS,
      fancy,
      strong,
      shadow,
      shadowInner,
      glow,
      children,
      forwardRef,
      img,
      noContext,
      TRY_RECURSIVE_TAGLESS,
      style = {},
      ...restProps
    } = this.props

    if (img) {
      style.backgroundImage = `url('${img}')`
    }

    if (isCuctomVariable(fill)) {
      style.backgroundColor = `var(${fill})`
    }

    const {backIsStrong} = this.context

    const componentProps = {
      className: cn(
        css.box,
        img && css.img,
        fill && !isCuctomVariable(fill) && css[`fill-${fill}`],
        (strong || inverse) && (!fill || fill === 'none') && css[`fill-base`],
        fancy && css.fancy,
        strong && css.strong,
        shadow && css[`shadow-${shadow}`],
        shadowInner && css[`shadow-inner-${shadowInner}`],
        glow && css[`glow-${shadowInner}`],
        radius && css[`radius-${radius}`],
        radiusTop && css[`radius-top-${radiusTop}`],
        radiusRight && css[`radius-right-${radiusRight}`],
        radiusLeft && css[`radius-left-${radiusLeft}`],
        radiusBottom && css[`radius-bottom-${radiusBottom}`],
        radiusTL && css[`radius-tl-${radiusTL}`],
        radiusTR && css[`radius-tr-${radiusTR}`],
        radiusBL && css[`radius-bl-${radiusBL}`],
        radiusBR && css[`radius-br-${radiusBR}`],
        (inverse !== false) && (inverse || backIsStrong) && !isCuctomVariable(fill) && css.inverse,
        className
      ),
      children,
      style,
      ...restProps,
    }

    const hasBorder = borderFill || borderWeight

    if (hasBorder) {
      const {borderFill, borderWeight, ...boxProps} = this.props
      return (
        <Line.TryTagless fill={borderFill} weight={borderWeight}>
          <Box {...boxProps} />
        </Line.TryTagless>
      )
    }

    const boxComponent = (TRY_TAGLESS || TRY_RECURSIVE_TAGLESS || FORCE_TAGLESS) ? (
      <TryTagless force={FORCE_TAGLESS} recursive={TRY_RECURSIVE_TAGLESS} {...componentProps} />
    ) : (
      <div ref={forwardRef} {...componentProps} />
    )

    if (noContext || !this.context.shallInverseOn) {
      return boxComponent
    }

    // Automatically inverse text and other stuff on this background
    let updateBackIsStrong = this.context.shallInverseOn?.includes(this.splitFill()) && strong
    if (!fill || fill === 'none' || inverse || backIsStrong) {
      if (!strong) {
        updateBackIsStrong = backIsStrong
      }
    }
    const context = {
      ...this.context,
      backIsStrong: updateBackIsStrong,
    }

    return (
      <ThemeContext.Provider value={context}>
        {boxComponent}
      </ThemeContext.Provider>
    )
  }
}