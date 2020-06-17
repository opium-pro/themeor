import React from 'react'
import {Box, Font, Align, Reaction, Line, Gap, Fit} from '../themeor'
import newId from '../themeor/utils/new-id'


export interface TextInputProps extends React.AllHTMLAttributes<HTMLElement> {
  label: string,
  onChange: (e: any) => void,
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
      <Reaction className={className} track={disabled ? undefined : ['focus', 'hover']} cursor={disabled ? 'default': 'text'}>
        {(r: any) => (
          <div>
            <Fit MERGE_CHAIN height="60px" {...r.props}>
              <Line fill={(!r.focus && !r.hover && 'none') || (disabled && 'none') || (error && 'critic') || (r.focus && 'accent') || (r.hover && 'faint-up')} weight="md">
                <Box noContext fill={(r.focus && 'none') || (error && 'critic') || (disabled && 'faint') || 'faint-up'} radius="sm">

                    {/* Label */}
                    <Align MERGE_CHAIN vert="center">
                      <Fit parent height={(r.focus || value) ? "60%" : "100%"}>
                        <Gap hor="sm">
                          <Font
                            size={r.focus || value ? 'xs' : 'md'}
                            fill={(error && 'critic') || (disabled && 'faint-down') || 'faint'}
                            className={r.props.className}
                            noselect
                          >
                            <label htmlFor={id || this.id}>
                              {label}
                            </label>
                          </Font>
                        </Gap>
                      </Fit>
                    </Align>

                    {placeholder && r.focus && !value && (
                      <Fit MERGE_CHAIN parent height="60%" stick="bottom-left">
                        <Align vert="center">
                          <Gap hor="sm">
                            <Font fill="faint" size="md">
                              {placeholder}
                            </Font>
                          </Gap>
                        </Align>
                      </Fit>
                    )}

                    {/* Input */}
                    <Fit MERGE_CHAIN parent height="60%" stick="bottom-left">
                      <Box>
                        <Gap hor="sm">
                          <Font fill={disabled ? 'faint': 'base'} size="md">
                            <input
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
                    </Fit>

                </Box>
              </Line>
            </Fit>

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