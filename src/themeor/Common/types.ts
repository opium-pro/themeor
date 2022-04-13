import React, { FC, CSSProperties, AriaAttributes, ReactNode, DOMAttributes } from "react"

type Booleanish = boolean | 'true' | 'false'

export type CommonTagProps = AriaAttributes & DOMAttributes<any> & {
  className?: string
  draggable?: Booleanish
  id?: string
  style?: CSSProperties
  tabIndex?: number
  title?: string
  radioGroup?: string
  role?: string
  children?: ReactNode
  dangerouslySetInnerHTML?: {
    __html: string;
  }
  valign?: "string"
  abbr?: string
  accept?: string
  allowFullScreen?: boolean
  allowTransparency?: boolean
  alt?: string
  as?: string
  autoFocus?: boolean
  autoPlay?: boolean
  capture?: boolean | string
  cellPadding?: number | string
  cellSpacing?: number | string
  charSet?: string
  challenge?: string
  checked?: boolean
  colSpan?: number
  rowSpan?: number
  content?: string
  controls?: boolean
  data?: string
  dateTime?: string
  default?: boolean
  disabled?: boolean
  htmlFor?: string
  maxLength?: number
  name?: string
  placeholder?: string
  preload?: string
  readOnly?: boolean
  rel?: string
  required?: boolean
  reversed?: boolean
  selected?: boolean
  src?: string
  target?: string
  type?: string
  useMap?: string
  href?: string
  autoComplete?: string
  form?: string
  muted?: boolean
}

export type CommonProps = Omit<CommonTagProps, 'onChange'> & {
  stretch?: boolean
  width?: string | false | number
  height?: string | false | number
  maxWidth?: string | false | number
  maxHeight?: string | false | number
  minWidth?: string | false | number
  minHeight?: string | false | number
  forwardRef?: React.Ref<any>
  getNode?: (node?: any) => void
  transition?: string | boolean
  opacity?: string | false
  zoom?: string | false
  rotate?: string | false
  hidden?: boolean
  transform?: string | false
  cursor?: string | false
  pointerEvents?: string | false
  delay?: string | false
  onChange?: any
}


export type CommonComponent<Props = CommonProps> = FC<Props>