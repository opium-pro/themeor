import React from 'react'
import * as console from '../utils/console'
import { Theme, Box, Font, Line, Icon, Fit, Align, Gap, Animate } from '../index'
import { TaglessProps, TaglessComponent } from './types'
import cn from '../utils/class-names'
import {obfuscate, hash} from '../config'


export const withTagless = (Component: any): TaglessComponent => {
  function Tagless(props: TaglessProps) {
    const {
      children,
      FORCE_TAGLESS,
      forwardRef,
      id: parentId,
      ...parentProps
    } = props

    function refuse(message?: string) {
      message && console.warn(message, withTagless)
      const { FORCE_TAGLESS, ...originalProps } = props
      if (Component.render) {
        return Component.render(originalProps)
      }

      if (typeof Component === 'function') {
        return Component(originalProps)
      }
    }

    // Remove invalid children
    const nonEmptyChildren: any[] = []
    React.Children.forEach(children, (child) => {
      if (child) {
        nonEmptyChildren.push(child)
      }
    })

    // Check that at least one child is left after previous check
    if (nonEmptyChildren.length !== 1) {
      return refuse()
    }
    const onlyChild = nonEmptyChildren[0]

    // Check if after previous checks we stiil have something to render
    if (!onlyChild) {
      return refuse()
    }

    // Check if it's not just plain text
    if (typeof onlyChild === 'string') {
      return refuse()
    }

    // We can TRY_TAGLESS only with regular tags, functions and objects
    if (!['string', 'function', 'object'].includes(typeof onlyChild.type)) {
      return refuse()
    }

    const childProps = onlyChild.props


    // Check that "id" attributes don't cover each other
    if (!FORCE_TAGLESS && parentId && childProps.id) {
      return refuse(`OnlyChild hasn't merged his child because it met another "id" attribute\nParent id "${parentId}", child's id "${childProps.id}"`)
    }

    const OnlyChildComponent = onlyChild.type
    const mergingComponents = [Theme, Box, Font, Line, Icon, Fit, Align, Gap, Animate]
    let child_is_themeor_component = mergingComponents.includes(OnlyChildComponent)
      || !!mergingComponents.find((mergingComponent: any) => mergingComponent.TryTagless === OnlyChildComponent)

    const mergedProps = {
      ...childProps,
    }

    if (parentId) {
      mergedProps.id = parentId
    }

    // TryTagless only with our components and regular tags
    if (!FORCE_TAGLESS && !child_is_themeor_component && typeof OnlyChildComponent !== 'string') {
      return refuse()
    }

    if (child_is_themeor_component) {
      forwardRef && (mergedProps.forwardRef = forwardRef)
    } else {
      forwardRef && (mergedProps.ref = forwardRef)
    }

    const passProps = {
      ...parentProps, children: ({ className, children, style, ...rest }: any) =>
        React.cloneElement(onlyChild, {
          ...rest,
          ...mergedProps,
          className: cn(className, mergedProps.className),
          style: { ...style, ...mergedProps.style },
        })
    }


    if (Component.render) {
      return Component.render(passProps)
    }

    if (typeof Component === 'function') {
      return Component(passProps)
    }
  }

  Tagless.displayName = obfuscate
    ? hash('SYKA_BLYAD', true)
    :`${Component.displayName || Component.name || Component.render?.displayName || Component.render?.name}.TryTagless`

  const TaglessComponent: TaglessComponent = Component
  TaglessComponent.TryTagless = Tagless

  return TaglessComponent
}