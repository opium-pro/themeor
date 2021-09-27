import React, { FC } from "react"

export type CommonProps = {
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
} & React.HTMLAttributes<HTMLDivElement>


export type CommonComponent<Props = CommonProps> = FC<Props>