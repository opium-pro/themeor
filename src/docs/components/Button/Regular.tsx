import React from 'react'
import { Box, Font, Fit, Align, Gap, Line, Reaction, useTheme } from '../../../themeor'


export interface ButtonProps extends React.AllHTMLAttributes<HTMLElement> { }

export default function Regular({
  children,
  ...restProps
}: ButtonProps) {

  const { template } = useTheme()

  const radius = template?.includes('covid') ? 'max' : 'sm'

  return (
    <Reaction track={['active', 'hover', 'focus']} cursor="pointer" smooth {...restProps}>
      {(rProps: any, reaction: any) => (
        <Fit width="fit-content">

          {/* This is stroke for focus */}
          <Fit.TryTagless cover="parent" offset="x2s">
            <Box
              borderFill={reaction.focus ? "accent" : "none"}
              radius={radius}
            />
          </Fit.TryTagless>


          <Fit>
            <Align.TryTagless vert="center" hor="center">
              <Box.TryTagless
                minWidth="220px"
                height="60px"
                borderFill="faint"
                fill={(reaction.active && "base") || (reaction.hover && "faint-up") || "faint"}
                strong={reaction.active}
                radius={radius}
              >
                <Gap.TryTagless hor="md" vert="sm">
                  <button type="button" {...rProps}>
                    <Font noselect fill="base" size="lg">{children}</Font>
                  </button>
                </Gap.TryTagless>
              </Box.TryTagless>
            </Align.TryTagless>
          </Fit>

        </Fit>
      )}
    </Reaction>
  )
}