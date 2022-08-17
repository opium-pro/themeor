import React, { useEffect, useState } from 'react'
import { AnimateComponent, AnimateProps, AnimateCSS, ANIMATE_NAME } from './types.js'
import cn from '../utils/class-names.js'
import cssVar from '../utils/css-variable.js'
import newId from '../utils/new-id.js'
import { Common } from '../Common/index.js'
import { withTagless } from '../with-tagless/index.js'
import { config } from '../config.js'
import { useCss } from './styles.js'

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
  const css = useCss()

  if (config.isNative) {
    return null
  }

  const [animationName, setAnimationName]: any = useState()
  const [isRemoving, setIsRemoving]: any = useState()
  const [thisId]: any = useState(newId())
  const [mounted, setMounted]: any = useState(initialMounted)

  const timeTillUnmount = duration * repeat + delay

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
    onMouseEnter: (() => onHover && setAnimationName(onHover)),
    onClick: (() => onClick && setAnimationName(onClick)),
    className: cn(
      'animated',
      animationName,
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