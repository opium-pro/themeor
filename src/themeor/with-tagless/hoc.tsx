import React, { FC } from 'react'
import consoleMessage from '../utils/console-message'
import { Theme, Box, Font, Line, Icon, Fit, Align, Gap, Effect, Animate } from '../index'
import { TaglessProps, TaglessComponent } from './types'
import cn from '../utils/class-name'


export const withTagless = (Component: any) => {
  function Tagless(props: TaglessProps) {
    const {
      children,
      FORCE_TAGLESS,
      forwardRef,
      id: parentId,
      ...parentProps
    } = props

    function refuse(message?: string) {
      message && consoleMessage({ text: message, source: withTagless })
      const { FORCE_TAGLESS, ...originalProps } = props
      return Component(originalProps)
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
    const mergingComponents = [Theme, Box, Font, Line, Icon, Fit, Align, Gap, Effect, Animate]
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

    const passChildren = ({ className, children, style, ...rest }: any) =>
      React.cloneElement(onlyChild, {
        ...rest,
        ...mergedProps,
        className: cn(className, mergedProps.className),
        style: { ...style, ...mergedProps.style },
      })
    
    return Component({ ...parentProps, children: passChildren })
  }

  Tagless.displayName = `${Component.displayName || Component.name}.TryTagless`

  Component.TryTagless = Tagless
  return Component
}