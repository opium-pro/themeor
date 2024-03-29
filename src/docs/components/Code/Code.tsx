import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import lightTheme from 'react-syntax-highlighter/dist/esm/styles/hljs/atom-one-light'
import darkTheme from 'react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark'
import { Gap, Box, useTheme, Font, Fit } from '../../../themeor'
import css from './Code.module.scss'


export interface CodeProps {
  inverse?: boolean,
  inline?: boolean,
  plain?: boolean,
  children?: string,
  mark?: number[],
  language?: string,
}


export default function Code({
  children,
  inverse,
  inline,
  plain,
  language = 'javascript',
  mark,
  ...restProps
}: CodeProps) {

  const { TRY_TO_INVERSE, template } = useTheme()

  const style = (inverse || TRY_TO_INVERSE || template?.includes('dark') || template?.includes('corona')) ? darkTheme : lightTheme
  const gapVert = (plain && "none") || (inline && "x2s") || "sm"
  const gapHor = (inline && "x2s") || "none"
  const boxFill = (plain && "none") || (inverse && "base") || "faint"

  return (
    <Box.TryTagless
      fill={boxFill}
      radius="sm"
      strong={inverse || TRY_TO_INVERSE}
      {...restProps}
    >
      <Gap.TryTagless vert={gapVert} hor={gapHor}>
        <Fit.TryTagless scroll bottom={inline ? "-10px" : '0'}>
          <Font inline={inline}>
            <SyntaxHighlighter
              showLineNumbers={!inline && !plain}
              className={css.code}
              language={language}
              style={style}
              wrapLines={!inline && !plain}
              lineNumberStyle={{
                opacity: 0.2,
                marginRight: '16px',
                userSelect: 'none',
              }}
              lineProps={(number: number) => {
                const style: any = {
                  display: 'block',
                  paddingRight: 'var(--t-gap-md)',
                }
                if (mark?.includes(number)) {
                  style.background = 'var(--t-fill-faint-weak-up)'
                }
                return { style }
              }}
            >
              {children}
            </SyntaxHighlighter>
          </Font>
        </Fit.TryTagless>
      </Gap.TryTagless>
    </Box.TryTagless>
  )
}