'use client'
import { signOut } from 'next-auth/react'
import { FC, useState } from 'react'
import { Button } from '@/ui/Button'
import { toast } from '@/components/ui/Toast'

/**
 * NextJS does not allow to pass function from server -> client components,
 * hence this unreusable component.
 */

interface SignOutButtonProps {}

const SignOutButton: FC<SignOutButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const signUserOut = async () => {
    try {
      setIsLoading(true)
      await signOut()
    } catch (error) {
      toast({
        title: 'Error Signing-Out',
        message: 'Please Try Again later..!!',
        type: 'error',
      })
    }
  }

  return (
    <Button onClick={signUserOut} isLoading={isLoading}>
      Sign Out
    </Button>
  )
}

export default SignOutButton