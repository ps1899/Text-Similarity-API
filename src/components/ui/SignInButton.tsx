'use client'
import { signIn } from 'next-auth/react'
import { FC, useState } from 'react'
import { Button } from '@/ui/Button'
import { toast } from '@/components/ui/Toast'

/**
 * NextJS does not allow to pass function from server -> client components,
 * hence this unreusable component.
 */

interface SignInButtonProps {}

const SignInButton: FC<SignInButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const signInWithGoogle = async () => {
    try {
      setIsLoading(true)
      await signIn('google')
    } catch (error) {
      toast({
        title: 'Error Signing-In',
        message: 'Please Try Again later..!!',
        type: 'error',
      })
    }
  }

  return (
    <Button onClick={signInWithGoogle} isLoading={isLoading}>
      Sign In
    </Button>
  )
}

export default SignInButton