import Image from 'next/image'
import Link from 'next/link'
import LargeHeading from '@/components/ui/LargeHeading'
import Paragraph from '@/components/ui/Paragraph'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Similarity API | Home',
  description: 'Free & Open-Source Text Similarity API',
}

export default function Home() {
  return (
    <div className='relative h-screen flex items-center justify-center overflow-x-hidden'>
      <div className='container pt-32 max-w-7xl w-full mx-auto h-full'>
        <div className='h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start'>
          <LargeHeading
            size='lg'
            className='three-d text-black dark:text-light-gold'>
            Easily determine <br /> Text Similarity.
          </LargeHeading>
          <Paragraph className='max-w-xl lg:text-left'>
            With the Text Similarity API, You can easily determine the
            Similarity between two pieces of text with a free{' '}
            <Link
              href='/login'
              className='underline underline-offset-2 text-black dark:text-light-gold'>
              API Key
            </Link>
            .
          </Paragraph>

          <div className='relative w-full max-w-xl lg:max-w-3xl lg:left-1/2 aspect-square lg:absolute'>
            <Image
              priority
              className='img-shadow '
              quality={100}
              style={{ objectFit: 'contain' }}
              fill
              src='/typewriter.png'
              alt='typewriter'
            />
          </div>
        </div>
      </div>
    </div>
  )
}