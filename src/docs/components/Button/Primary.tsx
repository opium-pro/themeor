import React from 'react'
import { Box, Font, Fit, Align, Gap, Line, Reaction, useTheme, Animate } from '../../../themeor'


export interface ButtonProps extends React.AllHTMLAttributes<HTMLElement> { }

export default function Primary({
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
            <Line.TryTagless className={rProps.className} fill={reaction.focus ? "accent" : "none"}>
              <Box radius={radius} />
            </Line.TryTagless>
          </Fit.TryTagless>


          <Align.TryTagless vert="center" hor="center">
            <Fit.TryTagless minWidth="220px" height="60px">
              <Box.TryTagless
                fancy
                fill={(reaction.active && "accent-up") || (reaction.hover && "accent-down") || "accent"}
                strong
                radius={radius}
              >
                <Gap.TryTagless hor="md" vert="sm">
                  <button type="button" {...rProps}>
                    <Font fill="base" noselect size="lg">{children}</Font>
                  </button>
                </Gap.TryTagless>
              </Box.TryTagless>
            </Fit.TryTagless>
          </Align.TryTagless>

        </Fit>
      )}
    </Reaction>
  )
}