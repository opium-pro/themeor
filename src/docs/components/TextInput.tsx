import React from 'react'
import {Box, Font, Align, Reaction, Line, Gap, Fit} from '../../themeor'
import newId from '../../themeor/utils/new-id'


export interface TextInputProps extends React.AllHTMLAttributes<HTMLElement> {
  label?: string,
  onChange?: (e: any) => void,
  value?: string,
  error?: boolean | string,
  disabled?: boolean,
  id?: string,
  placeholder?: string,
}

export default class TextInput extends React.PureComponent<TextInputProps> {
  static defaultProps = {
    value: '',
  }

  id = newId()

  render() {
    const {
      label,
      error,
      value,
      onChange,
      disabled,
      className,
      placeholder,
      id,
      ...restProps
    } = this.props

    return (
      <Reaction
        smooth
        className={className}
        track={disabled ? undefined : ['focus', 'hover']}
        cursor={disabled ? 'default': 'text'}
      >
        {(rProps: any, r: any) => (
          <div>
            <Fit.TryTagless TRY_RECURSIVE_TAGLESS height="60px">
              <Line fill={(!r.focus && !r.hover && 'none') || (disabled && 'none') || (error && 'critic') || (r.focus && 'accent') || (r.hover && 'faint-up')} weight="md">
                <Box style={{transition: 'all 0.2s ease'}} noContext fill={(r.focus && 'none') || (error && 'critic') || (disabled && 'faint') || 'faint-up'} radius="sm">

                    {/* Label */}
                    <Align.TryTagless TRY_RECURSIVE_TAGLESS vert="center">
                      <Fit cover="parent" height={(r.focus || value) ? "60%" : "100%"}>
                        <Gap hor="sm">
                          <Font
                            size={r.focus || value ? 'xs' : 'md'}
                            fill={(error && 'critic') || (disabled && 'faint-down') || 'faint'}
                            style={{transition: 'all 0.2s ease'}}
                            noselect
                          >
                            <label htmlFor={id || this.id}>
                              {label}
                            </label>
                          </Font>
                        </Gap>
                      </Fit>
                    </Align.TryTagless>

                    {placeholder && r.focus && !value && (
                      <Fit.TryTagless TRY_RECURSIVE_TAGLESS cover="parent" height="60%" stick="bottom-left">
                        <Align vert="center">
                          <Gap hor="sm">
                            <Font fill="faint" size="md">
                              {placeholder}
                            </Font>
                          </Gap>
                        </Align>
                      </Fit.TryTagless>
                    )}

                    {/* Input */}
                    <Fit.TryTagless TRY_RECURSIVE_TAGLESS cover="parent" height="60%" stick="bottom-left">
                      <Box>
                        <Gap hor="sm">
                          <Font fill={disabled ? 'faint': 'base'} size="md">
                            <input
                              {...rProps}
                              {...restProps}
                              id={id || this.id}
                              disabled={disabled}
                              onChange={onChange}
                              value={value}
                              type="text"
                            />
                          </Font>
                        </Gap>
                      </Box>
                    </Fit.TryTagless>

                </Box>
              </Line>
            </Fit.TryTagless>

            {typeof error === 'string' && (<>
              <Gap size="x2s" />
              <Font size="xs" fill="critic">{error}</Font>
            </>)}
          </div>
        )}
      </Reaction>
    )
  }
}