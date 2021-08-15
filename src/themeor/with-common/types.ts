import React from "react"

export type CommonProps = {
  stretch?: boolean,
  width?: string | false | number,
  height?: string | false | number,
  maxWidth?: string | false | number,
  maxHeight?: string | false | number,
  minWidth?: string | false | number,
  minHeight?: string | false | number,
  ref?: React.Ref<any>,
} & React.HTMLAttributes<HTMLDivElement>