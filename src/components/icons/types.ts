import type { SVGProps } from 'react'

/** Shared props for inline SVG icon components */
export type IconProps = SVGProps<SVGSVGElement> & {
  title?: string
}
