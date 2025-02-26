import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { FaLinkedin, FaGithub, FaMailBulk, FaFileAlt } from 'react-icons/fa'
import Link from 'next/link'

export default function NewsletterForm() {
  return (
    <section>
      <div className='justify-centerpy-16 flex flex-col items-center text-muted-foreground'>
        <h2 className='mb-4 text-5xl font-light text-muted-foreground'>
          Get <span className='font-bold text-foreground'>in Touch.</span>
        </h2>
        <p className='mb-8 text-base text-foreground'>
        To discuss, collaborate, or just have a great conversation ...
        </p>

        {/* Input Form */}
        <Card className='w-full max-w-lg rounded-full border border-muted-foreground bg-transparent'>
          <CardContent className='flex flex-col items-center gap-4 p-4'>
            <form className='flex w-full items-center justify-between gap-4'>
              <div className='flex-grow'>
                <Input
                  type='email'
                  id='email'
                  autoComplete='email'
                  placeholder='Enter your email i’d'
                  className='h-12 w-full rounded-full border-none bg-transparent px-4 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-0'
                />
              </div>

              <Button
                type='submit'
                className='hover:gradient-bg flex h-12 w-24 items-center justify-center rounded-full border border-muted-foreground bg-transparent text-foreground transition disabled:opacity-50'
              >
                SEND <span className='ml-2'>➔</span>
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Social Icons */}
        <div className='mt-8 flex items-center justify-center gap-6'>
          <Link href={'https://github.com/JahnaviJ1009'} target='_blank'>
            <FaGithub
              size={28}
              className='cursor-pointer transition hover:animate-bounce hover:text-foreground'
            />
          </Link>
          <Link
            href={'https://www.linkedin.com/in/jahnavi-jogi'}
            target='_blank'
          >
            <FaLinkedin
              size={28}
              className='cursor-pointer transition hover:animate-bounce hover:text-foreground'
            />
          </Link>
          <Link href='mailto:jahnavijogi1009@gmail.com'>
            <FaMailBulk
              size={28}
              className='cursor-pointer transition hover:animate-bounce hover:text-foreground'
            />
          </Link>
          <Link href={'/JahnaviJResume.pdf'} target='_blank'>
            <FaFileAlt
              size={28}
              className='cursor-pointer transition hover:animate-bounce hover:text-foreground'
            />
          </Link>
        </div>
      </div>
      <footer className='py-8'>
        <div className='container max-w-3xl'>
          <div className='text-center'>
            <p className='text-muted-foreground'>
              Made with ❣️ by{' '}
              <span className='font-semibold text-foreground'>
                jahnavi.jogi
              </span>{' '}
            </p>
          </div>
        </div>
      </footer>
    </section>
  )
}
