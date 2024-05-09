import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as Checkbox from '@radix-ui/react-checkbox'
import { Label } from '@radix-ui/react-label'

import './checkbox.scss'

export type CheckboxUIProps = {
  // id: string
  // isChecked: boolean | undefined
  isDisabled?: boolean
  label?: string
  // onCheckedChange: (checked: boolean) => void
} & ComponentPropsWithoutRef<typeof Checkbox.Root>

const StyledCheckbox = forwardRef<ElementRef<typeof Checkbox.Root>, CheckboxUIProps>(
  (props, ref) => {
    const { id, isDisabled, label, onCheckedChange, ...rest } = props
    const disabledClass = isDisabled ? 'disabled' : ''
    const labelId = id // Уникальный ID для связи с Label

    return (
      <div className={`checkboxContainer ${disabledClass}`}>
        <Checkbox.Root
          {...rest}
          className={`CheckboxRoot ${disabledClass}`}
          disabled={isDisabled}
          id={labelId}
          onCheckedChange={onCheckedChange}
          ref={ref}
        >
          <Checkbox.Indicator className={`checkboxFrame ${disabledClass}`} forceMount>
            <div style={{ backgroundColor: 'red', height: '10px', width: '10px' }}></div>
          </Checkbox.Indicator>
          <Label
            className={`label ${disabledClass}`}
            htmlFor={labelId} // Связывание с Checkbox через ID
          >
            {label}
          </Label>
        </Checkbox.Root>
      </div>
    )
  }
)

export default StyledCheckbox
