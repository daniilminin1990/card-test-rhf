import { useForm } from 'react-hook-form'

import { FormCheckbox } from '@/components/ui/Form/FormCheckbox'
import { FormInput } from '@/components/ui/Form/FormInput'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Button } from '../../ui/button'

type Props = {
  onSubmit: (data: FormValues) => void
}

const loginSchema = z.object({
  TOS: z.literal(true),
  email: z.string().email('Иди подрыхни, рохля'),
  password: z.string().min(3, 'Жопу подотри'),
  rememberMe: z.boolean().optional(),
})

type FormValues = z.infer<typeof loginSchema>

export const LoginForm = ({ onSubmit }: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: { TOS: undefined, email: '', password: '', rememberMe: false },
    resolver: zodResolver(loginSchema),
  })

  console.log(errors)

  return (
    <>
      {import.meta.env.DEV && <DevTool control={control} />}
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput control={control} label={'email'} name={'email'} />
        <FormInput control={control} label={'password'} name={'password'} />
        <FormCheckbox control={control} label={'Remember Me'} name={'rememberMe'} />
        <FormCheckbox
          control={control}
          error={errors.TOS}
          label={'Accept terms of service'}
          name={'TOS'}
        />
        <Button type={'submit'}>Submit</Button>
      </form>
    </>
  )
}
