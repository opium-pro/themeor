import React from 'react'
import css from './Gap.module.css'
import cn from '../utils/class-name'
import consoleMessage from '../utils/console-message'
import TryTagless from '../TryTagless'
import {GapProps, TaglessGapProps} from './types'


Gap.TryTagless = (props: TaglessGapProps) => <Gap {...props} TRY_TAGLESS />

export default function Gap({
  className,
  size,
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
  inrow,
  ...restProps
}: GapProps, ref: React.Ref<any>) {

  const [isInrow, setInrow] = React.useState(false)

  // If is inside of flexbox row, make inrow automatically
  function handleRef(node: any) {
    if (!node) {return}
    typeof forwardRef === 'function' && forwardRef(node)
    // typeof ref === 'function' && ref(node)

    if (inrow === true) {
      setInrow(true)
    } else if (inrow === false) {
      setInrow(false)
    }

    const parentStyles = getComputedStyle(node.parentElement)
    if (parentStyles.flexDirection === 'row' && parentStyles.display === 'flex') {
      setInrow(true)
    } else {
      setInrow(false)
    }
  }

  if (inrow && !!children) {
    consoleMessage({
      source: Gap,
      text: "Prop 'inrow' will be neglected because it work only when there is no children",
      type: 'error',
    })
  }
  const useInrow = !children && (isInrow || inrow)

  const defaultGap = 'md'

  const componentProps = {
    className: cn(
      css.gap,
      !children && useInrow && css[`left-${size || defaultGap}`],
      !children && !useInrow && css[`top-${size || defaultGap}`],
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

  const tryTagless = TRY_TAGLESS || TRY_RECURSIVE_TAGLESS || FORCE_TAGLESS

  return tryTagless ? (
    <TryTagless forwardRef={handleRef} force={FORCE_TAGLESS} recursive={TRY_RECURSIVE_TAGLESS} {...componentProps} />
  ) : (
    <div ref={handleRef} {...componentProps} />
  )
}