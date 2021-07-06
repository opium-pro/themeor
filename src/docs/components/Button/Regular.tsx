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
          <Fit.TryTagless TRY_RECURSIVE_TAGLESS cover="parent" offset="x2s">
            <Line className={rProps.className} fill={reaction.focus ? "accent" : "none"}>
              <Box radius={radius} />
            </Line>
          </Fit.TryTagless>


          <Align.TryTagless TRY_RECURSIVE_TAGLESS vert="center" hor="center">
            <Line fill="faint">
              <Fit minWidth="220px" height="60px">
                <Box
                  fill={(reaction.active && "base") || (reaction.hover && "faint-up") || "faint"}
                  strong={reaction.active}
                  radius={radius}
                >
                  <Gap hor="md" vert="sm">
                    <button type="button" {...rProps}>
                      <Font noselect fill="base" size="lg">{children}</Font>
                    </button>
                  </Gap>
                </Box>
              </Fit>
            </Line>
          </Align.TryTagless>

        </Fit>
      )}
    </Reaction>
  )
}