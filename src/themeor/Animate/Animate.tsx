import React, { useEffect, useState } from 'react'
import { AnimateComponent, AnimateProps, AnimateCSS, ANIMATE_NAME } from './types'
import cn from '../utils/class-names'
import css from './animate.module.css'
import cssVar from '../utils/css-variable'
import newId from '../utils/new-id'
import { Common } from '../Common'
import { withTagless } from '../with-tagless'

/*
  This is beta-component. Works only on web. Based on animate.css
*/

const Animate = (props: AnimateProps, ref: any) => {
  const {
    onMount,
    onUnmount,
    onHover,
    onClick,
    duration = 300,
    delay = 0,
    repeat = 1,
    children,
    getTrigger,
    mounted: initialMounted = true,
    ...restProps
  } = props

  const [animationName, setAnimationName]: any = useState()
  const [isRemoving, setIsRemoving]: any = useState()
  const [thisId]: any = useState(newId())
  const [mounted, setMounted]: any = useState(initialMounted)

  const timeTillUnmount = duration + delay

  function trigger(name: AnimateCSS) {
    setAnimationName(name)
  }

  useEffect(() => {
    getTrigger?.(trigger)
    cssVar.set({
      id: styleId,
      prefix: 't',
      selector: '#' + thisId,
      json: {
        'animate-duration': duration + 'ms',
        'animate-delay': delay + 'ms',
        'animate-repeat': repeat,
      }
    })
  }, [])

  const styleId = 'style-' + thisId

  const componentProps = {
    forwardRef: ref,
    ...restProps,
    id: thisId,
    children,
    onMouseEnter: (() => { onHover && setAnimationName(onHover); onHover }),
    onClick: (() => { onClick && setAnimationName(onClick); onClick }),
    className: cn(
      css['animated'],
      css[animationName],
    ),
  }

  useEffect(() => {
    if (initialMounted) {
      setMounted(true)
    } else if (mounted) {
      if (onUnmount) {
        setAnimationName(onUnmount)
        setTimeout(() => {
          setMounted(false)
        }, timeTillUnmount)
      } else {
        setMounted(false)
      }
    }
  }, [initialMounted])

  // Remove animation after setting
  useEffect(() => {
    if (isRemoving || !animationName) {
      return
    }
    setIsRemoving(true)
    setTimeout(() => {
      setAnimationName()
      setIsRemoving(false)
    }, timeTillUnmount)
  }, [animationName])

  useEffect(() => {
    mounted && onMount && setAnimationName(onMount)
  }, [mounted])

  if (!mounted) {
    return null
  }

  return Common(componentProps, ANIMATE_NAME)
}

Animate.displayName = ANIMATE_NAME
export default withTagless(React.forwardRef(Animate)) as AnimateComponent