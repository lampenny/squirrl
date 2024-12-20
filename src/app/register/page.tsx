import Link from 'next/link'
import { Button } from '../ui/button'
import RegisterForm from '../ui/register/registerform'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="md:text-2xl font-bold">
        <Link href="/">Squirrl</Link>
      </div>
      <RegisterForm />
      <Link href="/login">
        <Button>Login</Button>
      </Link>
    </div>
  )
}
