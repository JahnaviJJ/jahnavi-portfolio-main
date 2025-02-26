'use client'
import { FaArrowDown } from 'react-icons/fa'

const scrollToContent = () => {
  const contentSection = document.getElementById('content')
  if (contentSection) {
    contentSection.scrollIntoView({ behavior: 'smooth' })
  }
}

export default function Intro() {
  return (
    <section className='relative flex h-screen flex-col items-center justify-center pt-20 text-center'>
      <h1 className='text-3xl font-light leading-normal text-muted-foreground lg:text-4xl'>
        I&apos;m
        <span className='font-semibold text-foreground no-underline'>
          {' '}
          Jahnavi Jogi
        </span>{' '}
        <br/>
        <span className='font-semibold text-foreground no-underline'>
          {' '}
          Software Engineer{' '}
        </span>
        with expertise in{' '}
        <span className='font-semibold text-foreground no-underline'>
        Requirement Gathering
        </span>
        ,{' '}
        <span className='font-semibold text-foreground no-underline'>
        Analysis
        </span>
        , {' '}
        <span className='font-semibold text-foreground no-underline'>
        Software Design
        </span>
        , {' '}
        <span className='font-semibold text-foreground no-underline'>
        Development{' '}
        </span>
        and {' '}
        <span className='font-semibold text-foreground no-underline'>
        Testing{' '}
        </span>
        - 
        covering the entire{' '}
        <span className='font-semibold text-foreground no-underline'>
        Software Development Lifecycle{' '}
        </span>
        <br/>
        Explore my latest projects and articles, showcasing my expertise.
      </h1>

      <div className='absolute top-[90%]'>
        <button
          onClick={scrollToContent}
          className='animate-bounce text-foreground'
        >
          <FaArrowDown size={30} />
        </button>
      </div>
    </section>
  )
}
