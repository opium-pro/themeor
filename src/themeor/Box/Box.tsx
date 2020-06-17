import React from 'react'
import css from './Box.module.scss'
import {ThemeContext} from '../context'
import cn from '../utils/class-name'
import newId from '../utils/new-id'
import * as Types from '../config-types'
import isCuctomVariable from '../utils/var-is-custom'
import Merge from '../Merge'
// import Line from '../Line'


export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  fill?: string,
  strong?: boolean,
  inverse?: boolean,
  fancy?: boolean,
  // lineFill?: string,
  // lineWeight?: Types.Scale | 'none',
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
  img?: string,
  noContext?: boolean,
  MERGE_CHAIN?: true,
  MERGE?: boolean,
  FORCE_MERGE?: true,
  forwardedRef?: (node: any) => void,
}

export default class Box extends React.PureComponent<BoxProps> {
  static contextType = ThemeContext
  static defaultProps = {fill: 'none'}
  static id = newId()

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
      // lineFill,
      // lineWeight,
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
      FORCE_MERGE,
      MERGE,
      fancy,
      strong,
      shadow,
      children,
      forwardedRef,
      img,
      noContext,
      MERGE_CHAIN,
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

    if (typeof children === 'function') {
      return children(componentProps)
    }

    // const hasLine = lineFill || lineWeight

    // if (hasLine) {
    //   const {lineFill, lineWeight, ...boxProps} = this.props
    //   return (
    //     <Line MERGE fill={lineFill} weight={lineWeight}>
    //       <Box {...boxProps} />
    //     </Line>
    //   )
    // }

    const boxComponent = (MERGE || MERGE_CHAIN || FORCE_MERGE) ? (
      <Merge forwardedRef={forwardedRef} force={FORCE_MERGE} recursive={MERGE_CHAIN} {...componentProps} />
    ) : (
      <div ref={forwardedRef} {...componentProps} />
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