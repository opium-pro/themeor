export type CommonProps = {
  stretch?: boolean,
  width?: string | false | number,
  height?: string | false | number,
  maxWidth?: string | false | number,
  maxHeight?: string | false | number,
  minWidth?: string | false | number,
  minHeight?: string | false | number,
} & React.HTMLAttributes<HTMLDivElement>