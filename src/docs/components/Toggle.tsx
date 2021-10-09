import React from 'react'
import {Box, Line, Fit, Gap, Reaction, Effect} from '../../themeor'
import newId from '../../themeor/utils/new-id'


export interface ToggleProps extends React.HTMLAttributes<HTMLElement> {
  on?: boolean,
}

export default class Toggle extends React.PureComponent<ToggleProps> {
  id = newId()

  render() {
    const {
      on,
      onChange,
      ...restProps
    } = this.props

    return (
      <Reaction track={['hover', 'focus']} cursor="pointer" smooth>
        {(rProps: any, r: any) => (
          <Fit.TryTagless width="56px">
              <Box fill={(on && 'accent') || 'faint-up'} strong={on} radius="max">
                <Gap size="x2s">
                  <label {...rProps}>
                    <Fit.TryTagless cover="parent">
                      <Effect transparency="max">
                        <input onChange={onChange} type="checkbox" checked={on} {...restProps} />
                      </Effect>
                    </Fit.TryTagless>

                    {/* This is stroke for focus */}
                    <Fit.TryTagless cover="parent" offset="x2s">
                      <Line.TryTagless style={{transition: 'all 0.2s ease'}} fill={(r.focus || r.hover) ? "accent" : "none"}>
                        <Box radius="max" />
                      </Line.TryTagless>
                    </Fit.TryTagless>

                    <Fit.TryTagless
                      width="24px"
                      height="24px"
                      left={on ? '21px' : '0'}
                    >
                      <Line.TryTagless fill={on ? "none" : "faint"}>
                        <Box style={{transition: 'all 0.2s ease'}} fill="base" radius="max"/>
                      </Line.TryTagless>
                    </Fit.TryTagless>
                  </label>
                </Gap>
              </Box>
          </Fit.TryTagless>
        )}
      </Reaction>
    )
  }
}