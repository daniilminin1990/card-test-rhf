import { LoginForm } from '@/components/auth/loginForm/loginForm'
import { Button } from '@/components/ui/button'

export function App() {
  return (
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Button
        style={{ backgroundColor: 'red', color: 'blue' }}
      >123 </Button>
      <LoginForm onSubmit={data => console.log(data)} />
    </div>
  )
}
