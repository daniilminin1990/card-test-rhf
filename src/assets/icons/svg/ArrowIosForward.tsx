import type { SVGProps } from 'react'
// eslint-disable-next-line no-duplicate-imports
import { Ref, forwardRef, memo } from 'react'
const SvgArrowIosForward = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg ref={ref} viewBox={'0 0 24 24'} xmlns={'http://www.w3.org/2000/svg'} {...props}>
    <g data-name={'Layer 2'}>
      <path
        d={
          'M10 19a1 1 0 0 1-.64-.23 1 1 0 0 1-.13-1.41L13.71 12 9.39 6.63a1 1 0 0 1 .15-1.41 1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19'
        }
        data-name={'arrow-ios-forward'}
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgArrowIosForward)
const Memo = memo(ForwardRef)

export default Memo
