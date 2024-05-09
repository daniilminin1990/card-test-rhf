import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import Checkbox, { CheckboxUIProps } from '@/components/ui/checkbox/checkbox'

type Props<T extends FieldValues> = Omit<
  CheckboxUIProps,
  'checked' | 'name' | 'onBlur' | 'onCheckedChange'
> &
  UseControllerProps<T>

export const FormCheckbox = <T extends FieldValues>({ control, name, ...rest }: Props<T>) => {
  const {
    field: { onChange, value, ...field },
  } = useController({
    control,
    name,
  })

  return <Checkbox {...rest} {...field} checked={value} onCheckedChange={onChange} />
}
