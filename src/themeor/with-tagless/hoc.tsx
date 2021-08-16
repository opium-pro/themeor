import React, { FC } from 'react'
import consoleMessage from '../utils/console-message'
import { Theme, Box, Font, Line, Icon, Fit, Align, Gap, Effect, Animate } from '../index'
import { TryTaglessProps, TryTagless } from './types'
import cn from '../utils/class-name'


export const withTagless = (Component: any): TryTagless => {
  return function Tagless (props: TryTaglessProps) {
    const {
      children,
      TRY_RECURSIVE_TAGLESS,
      FORCE_TAGLESS,
      forwardRef,
      id: parentId,
      ...parentProps
    } = props

    function refuse(message?: string) {
      message && consoleMessage({ text: message, source: withTagless })
      const { TRY_RECURSIVE_TAGLESS, FORCE_TAGLESS, ...originalProps } = props
      return <Component {...originalProps} />
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

    // Don't TRY_TAGLESS if child starts a new chain
    if (!FORCE_TAGLESS && childProps.TRY_RECURSIVE_TAGLESS) {
      return refuse()
    }

    const OnlyChildComponent = onlyChild.type
    const mergingComponents = [Theme, Box, Font, Line, Icon, Fit, Align, Gap, Effect, Animate]
    let child_is_themeor_component = mergingComponents.includes(OnlyChildComponent)
      || !!mergingComponents.find((mergingComponent: any) => mergingComponent.TryTagless === OnlyChildComponent)

    const child_is_not_against = childProps.TRY_TAGLESS !== false

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

    let Child = onlyChild.type

    if (child_is_themeor_component && child_is_not_against && onlyChild.type.TryTagless) {
      Child = onlyChild.type.TryTagless
      mergedProps.TRY_RECURSIVE_TAGLESS = TRY_RECURSIVE_TAGLESS || childProps.TRY_RECURSIVE_TAGLESS
      mergedProps.FORCE_TAGLESS = FORCE_TAGLESS || childProps.FORCE_TAGLESS
    }

    return (
      <Component {...parentProps}>
        {({ className, style, ...rest }: any) => (
          <Child
            // {...rest}
            {...mergedProps}
            className={cn(className, mergedProps.className)}
            style={{ ...style, ...mergedProps.style }}
          />
        )
        }
      </Component>
    )
  }
}