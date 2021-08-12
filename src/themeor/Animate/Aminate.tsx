import React, { useEffect, useState } from 'react'
import consoleMessage from '../utils/console-message'
import { AnimateProps, TaglessAnimateProps } from './types'
import { TryTagless } from '../with-tagless'
import cn from '../utils/class-name'
import css from './animate.module.css'
import cssVar from '../utils/css-variable'
import newId from '../utils/new-id'


Animate.TryTagless = (props: TaglessAnimateProps) => <Animate {...props} TRY_TAGLESS />

// TryTagless Element Tag
export function Animate(props: AnimateProps) {
  const {
    onMount,
    onUnmount,
    onHover,
    onClick,
    duration = 1000,
    delay = 0,
    repeat = 1,
    mounted:initialMounted = true,
    TRY_TAGLESS,
    TRY_RECURSIVE_TAGLESS,
    FORCE_TAGLESS,
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

  const tryTagless = TRY_TAGLESS || TRY_RECURSIVE_TAGLESS || FORCE_TAGLESS

  const componentProps = {
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

  return tryTagless ? (
    <TryTagless force={FORCE_TAGLESS} recursive={TRY_RECURSIVE_TAGLESS} {...componentProps} />
  ) : (
    <div {...componentProps} />
  )
}