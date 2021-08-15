import { Align as SourceAlign } from './Align'
import { Span } from './Span'
export * from './types'

type Align = typeof SourceAlign & {
  Span?: any
}

const Align: Align = SourceAlign
Align.Span = Span

export { Align }