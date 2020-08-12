import React from 'react'
import {Box, Font, Fit, Align, Gap, Line, Reaction, Template} from '../../../themeor'


export interface ButtonProps extends React.AllHTMLAttributes<HTMLElement> {}

export default class Primary extends React.PureComponent<ButtonProps> {
  render() {
    const {
      children,
      ...restProps
    } = this.props

    const radius = Template.has('covid') ? 'max' : 'sm'

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
                <Fit minWidth="220px" height="60px">
                  <Box
                    fancy
                    fill={(reaction.active && "accent-up") || (reaction.hover && "accent-down") || "accent"}
                    strong
                    radius={radius}
                  >
                    <Gap hor="md" vert="sm">
                      <button type="button" {...rProps}>
                        <Font fill="base" noselect size="lg">{children}</Font>
                      </button>
                    </Gap>
                  </Box>
                </Fit>
              </Align.TryTagless>

          </Fit>
        )}
      </Reaction>
    )
  }
}