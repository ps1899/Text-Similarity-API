import Icons from '@/components/Icons'
import UserAuthForm from '@/components/UserAuthForm'
import { buttonVariants } from '@/components/ui/Button'
import LargeHeading from '@/components/ui/LargeHeading'
import Paragraph from '@/components/ui/Paragraph'
import Link from 'next/link'
import { FC } from 'react'

const page: FC = () => {
  return (
    <>
      <div className='absolute inset-0 mx-auto container flex h-screen flex-col items-center justify-center'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-6 max-w-lg'>
          <div className='flex flex-col items-center gap-6 text-center'>
            <Link
              href='/'>
              <a className={buttonVariants({
                variant: 'ghost',
                className: 'w-fit',
              })}>
              <Icons.ChevronLeft className='mr-2 h-4 w-4' />
              Back to Home
            </a>
            </Link>
            <LargeHeading>Welcome Back!</LargeHeading>
            <Paragraph>Please Sign-In using your Google account.</Paragraph>
          </div>
          <UserAuthForm />
        </div>
      </div>
    </>
  )
}

export default page