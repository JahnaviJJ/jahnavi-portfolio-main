import Image from 'next/image'
import author from '@/public/images/authors/author.jpg'
import Experience from '@/components/experience'
import Education from '@/components/education'

export default function Contact() {
  return (
    <section className='pb-24 pt-24'>
      <div className='container mb-8 max-w-6xl'>
        <h2 className='title text-4xl'>
          About <span className='font-bold'>Me</span>
        </h2>
      </div>
      <div className='container mb-10 flex max-w-6xl items-center gap-5'>
        <div className='min-w-[40%]'>
          <Image
            src={author}
            alt='Personal photo'
            className='h-96 w-full rounded-lg object-cover object-[0%_16%]'
          />
        </div>
        <div>
          <p className='mb-6 text-lg leading-relaxed text-muted-foreground'>
            Hey, I’m{' '}
            <strong className='font-semibold text-foreground'>
              Jahnavi Jogi
            </strong>
            , a{' '}
            <strong className='font-semibold text-foreground'>
            Software Engineer
            </strong>
            . With a passion for{' '}
            <strong className='text-foreground'>
              creating intuitive, user-desired output
            </strong>
            , I combine creativity with technical expertise to craft seamless{' '}
            <strong className='text-foreground'>digital experiences</strong>. My
            background in
            <strong className='text-foreground'> development</strong>{' '}
            and{' '}
            <strong className='text-foreground'> product management</strong>{' '}
            complements neccesary skills, allowing me to focus on both
            <strong className='text-foreground'>
              {' '}
              the aesthetics
            </strong> and{' '}
            <strong className='text-foreground'>functionality</strong> of every
            solution I work on.
          </p>
          <p className='text-lg leading-relaxed text-muted-foreground'>
            Besides, I love playing{' '}
            <strong className='text-foreground'>instruments</strong>,{' '}
            <strong className='text-foreground'>singing</strong> and
            <strong className='text-foreground'> travelling</strong>.
          </p>
        </div>

        {/* Right Side - Images (Using Grid) */}
      </div>

      <div className='container mb-24 max-w-6xl'>
        <Experience />
      </div>

      <div className='container max-w-6xl'>
        <Education />
      </div>
    </section>
  )
}
