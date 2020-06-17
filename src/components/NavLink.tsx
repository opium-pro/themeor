import React from 'react'
import {Fit, Font, Line, Box, Gap, Reaction} from '../themeor'


export interface NavLinkProps extends React.AllHTMLAttributes<HTMLElement> {
  href?: string,
  active?: boolean,
}


export default class NavLink extends React.PureComponent<NavLinkProps> {
  render() {
    const {children, active, href} = this.props
    const child = href
      ? <a href={href}>{children}</a>
      : children

    return (
      <Reaction track={['hover', 'focus']}>
        {(r: any) => (
          <Fit MERGE_CHAIN>
            <Line weight="none" fill="accent">
              <Box
                fill={(r.hover || r.focus || active) ? 'accent' : 'base'}
                strong={active}
              >
                <Gap vert="sm" hor="lg">
                  <Font
                    FORCE_MERGE
                    {...r.props}
                    inline
                    size="lg"
                    fill={active ? "base" : "accent"}
                    weight="500"
                  >
                    {child}
                  </Font>
                </Gap>
              </Box>
            </Line>
          </Fit>
        )}
      </Reaction>
    )
  }
}