import React from 'react'
import {Box, Line, Fit, Gap, Reaction} from '../themeor'
import newId from '../themeor/utils/new-id'


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
      <Reaction track={['hover', 'focus']} cursor="pointer">
        {(r: any) => (
          <Fit.TryTagless TRY_RECURSIVE_TAGLESS width="56px">
              <Box noContext fill={(on && 'accent') || 'faint-up'} strong={on} radius="max">
                <Gap size="x2s">
                  <label {...r.props}>
                    <Fit.TryTagless hidden parent>
                      <input onChange={onChange} type="checkbox" checked={on} {...restProps} />
                    </Fit.TryTagless>

                    {/* This is stroke for focus */}
                    <Fit.TryTagless TRY_RECURSIVE_TAGLESS parent offset="x2s">
                      <Line className={r.props.className} fill={(r.focus || r.hover) ? "accent" : "none"}>
                        <Box radius="max" />
                      </Line>
                    </Fit.TryTagless>

                    <Fit.TryTagless
                      TRY_RECURSIVE_TAGLESS
                      width="24px"
                      height="24px"
                      className={r.props.className}
                      left={on ? '21px' : '0'}
                    >
                      <Line fill={on ? "none" : "faint"}>
                        <Box fill="base" radius="max"/>
                      </Line>
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