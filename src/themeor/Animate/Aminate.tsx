import React, { useEffect, useState } from 'react'
import { AnimateProps } from './types'
import cn from '../utils/class-name'
import css from './animate.module.css'
import cssVar from '../utils/css-variable'
import newId from '../utils/new-id'
import {withCommon, CommonComponent} from '../with-common'


// TryTagless Element Tag
export const Animate: CommonComponent<AnimateProps> = withCommon((props: AnimateProps, ref) => {
  const {
    onMount,
    onUnmount,
    onHover,
    onClick,
    duration = 1000,
    delay = 0,
    repeat = 1,
    mounted:initialMounted = true,
    ...restProps
  } = props

  const [animationName, setAnimationName]: any = useState()
  const [isRemoving, setIsRemoving]: any = useState()
  const [thisId]: any = useState(newId())
  const [mounted, setMounted]: any = useState(true)

  const timeTillUnmount = duration + delay

  useEffect(() => {
    if (initialMounted === false) {
      onUnmount && setAnimationName(onUnmount)
      remove()

      setTimeout(() => {
        setMounted(false)
      }, timeTillUnmount)
    }
  })

  const styleId = 'style-' + thisId

  const componentProps = {
    ref,
    id: thisId,
    onMouseEnter: (() => { onHover && setAnimationName(onHover); onHover && remove() }),
    onClick: onClick && (() => { setAnimationName(onClick); remove() }),
    className: cn(
      css['animated'],
      css[animationName],
    ),
    ...restProps,
  }

  function remove() {
    if (isRemoving) {
      return
    }

    setIsRemoving(true)

    setTimeout(() => {
      setAnimationName()
      setIsRemoving(false)
    }, timeTillUnmount)
  }

  useEffect(() => {
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

  useEffect(() => {
    onMount && setAnimationName(onMount)
    remove()
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div {...componentProps} />
  )
})