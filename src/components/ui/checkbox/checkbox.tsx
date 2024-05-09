import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as Checkbox from '@radix-ui/react-checkbox'
import { Label } from '@radix-ui/react-label'

import './checkbox.scss'

export type CheckboxUIProps = {
  isDisabled?: boolean
  label?: string
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
          <Checkbox.Indicator
            className={`checkboxFrame ${disabledClass}`}
            forceMount
          ></Checkbox.Indicator>
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
