import { useController, useForm } from 'react-hook-form'

import { FormCheckbox } from '@/components/ui/Form/FormCheckbox'
import { FormInput } from '@/components/ui/Form/FormInput'
import Input from '@/components/ui/Input/Input'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Button } from '../../ui/button'

type Props = {
  onSubmit: (data: FormValues) => void
}

const loginSchema = z.object({
  TOS: z.literal(true).optional(),
  email: z.string().email('Иди подрыхни, рохля'),
  password: z.string().min(3, 'Жопу подотри'),
  rememberMe: z.boolean().optional(),
})

// type FormValues = typeof loginSchema
type FormValues = z.infer<typeof loginSchema>

export const LoginForm = ({ onSubmit }: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    defaultValues: { TOS: undefined, email: '', password: '', rememberMe: false },
    resolver: zodResolver(loginSchema),
  })

  // const onSubmit = (data: FormValues) => {
  //   console.log(data)
  // }

  console.log(errors)

  return (
    <>
      {import.meta.env.DEV && <DevTool control={control} />}
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput control={control} label={'email'} name={'email'} />
        <FormInput control={control} label={'password'} name={'password'} />
        <FormCheckbox control={control} label={'Remember Me'} name={'rememberMe'} />
        <FormCheckbox control={control} label={'Accept terms of service'} name={'TOS'} />
        <p>{errors.TOS?.message}</p>
        <Button type={'submit'}>Submit</Button>
      </form>
    </>
  )
}
