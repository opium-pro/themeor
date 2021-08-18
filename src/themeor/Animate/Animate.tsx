import React, { useEffect, useState } from 'react'
import { AnimateComponent, AnimateProps } from './types'
import cn from '../utils/class-names'
import css from './animate.module.css'
import cssVar from '../utils/css-variable'
import newId from '../utils/new-id'
import { Common } from '../Common'
import { withTagless } from '../with-tagless'


// TryTagless Element Tag
const Animate = (props: AnimateProps, ref: any) => {
  const {
    onMount,
    onUnmount,
    onHover,
    onClick,
    duration = 1000,
    delay = 0,
    repeat = 1,
    children,
    mounted: initialMounted = true,
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
    forwardRef: ref,
    ...restProps,
    id: thisId,
    children,
    onMouseEnter: (() => { onHover && setAnimationName(onHover); onHover && remove() }),
    onClick: onClick && (() => { setAnimationName(onClick); remove() }),
    className: cn(
      css['animated'],
      css[animationName],
    ),
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

  return Common(componentProps)
}


export default withTagless(React.forwardRef(Animate)) as AnimateComponent