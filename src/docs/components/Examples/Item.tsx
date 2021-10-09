import React from 'react'
import { Font, Line, Gap, Fit, Box } from '../../../themeor'
import { Code } from '../index'

export interface Props {
  description?: any,
  markLines?: number[],
  code?: string,
}

export class Item extends React.PureComponent<Props> {
  static defaultProps = { code: '' }

  render() {
    const {
      children,
      description,
      code,
      markLines,
    } = this.props

    return (<div>
      <Font size="lg">{description}</Font>

      <Gap size="md" />

      <Code language="javascript" mark={markLines}>
        {code}
      </Code>

      {children && (<>
        <Gap />
        <Line.TryTagless fill="faint">
          <Fit.TryTagless clip>
            <Box radius="md">
              <Box fill="faint">
                <Gap size="xs">
                  <Font size="xs" uppercase letterSpacing="lg" weight="700" fill="faint">
                    Result
                  </Font>
                </Gap>
              </Box>

              <Gap>
                <Fit.TryTagless width="100%">
                  {children}
                </Fit.TryTagless>
              </Gap>
            </Box>
          </Fit.TryTagless>
        </Line.TryTagless>
      </>)}

      <Gap size="x3l" />
    </div>)
  }
}