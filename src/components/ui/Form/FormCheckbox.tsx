import { FieldError, FieldValues, UseControllerProps, useController } from 'react-hook-form'

import Checkbox, { CheckboxUIProps } from '@/components/ui/checkbox/checkbox'

type Props<T extends FieldValues> = { error?: FieldError | undefined } & Omit<
  CheckboxUIProps,
  'checked' | 'error' | 'name' | 'onBlur' | 'onCheckedChange'
> &
  UseControllerProps<T>

export const FormCheckbox = <T extends FieldValues>({
  control,
  error,
  name,
  ...rest
}: Props<T>) => {
  const {
    field: { onChange, value, ...field },
  } = useController({
    control,
    name,
  })

  return <Checkbox {...rest} {...field} checked={value} error={error} onCheckedChange={onChange} />
}
