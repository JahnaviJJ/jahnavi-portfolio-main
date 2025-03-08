import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'

export default function Header() {
  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm'>
      <nav className='container flex max-w-6xl items-center justify-between'>
        <div>
          <Link
            href='/'
            className='gradient-text font-work-sans text-md lg:text-xl font-semibold'
          >
            {/* <Image
              className='flex-1 rounded-lg'
              src={authorImage}
              alt='Jahnavi Jogi'
              priority
            /> */}
            JAHNAVI JOGI
          </Link>
        </div>

        <ul className='flex items-center gap-6 text-lg font-bold text-muted-foreground sm:gap-10'>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/projects'>PROJECTS</Link>
          </li>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/about'>ABOUT</Link>
          </li>
          <div>
            <ThemeToggle />
          </div>
        </ul>
      </nav>
    </header>
  )
}
