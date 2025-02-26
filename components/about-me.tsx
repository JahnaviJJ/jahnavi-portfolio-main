import Image from 'next/image'
import author from '@/public/images/authors/author.jpg'
import hobby1 from '@/public/images/authors/hobby1.png'
import hobby2 from '@/public/images/authors/hobby2.png'
import hobby3 from '@/public/images/authors/hobby3.png'
import Link from 'next/link'

const AboutMeSection = () => {
  return (
    <section>
      <div className='flex items-center justify-between'>
        <h2 className='title font-work-sans text-muted-foreground'>
          About <span className='text-foreground'>me</span>
        </h2>
        <Link
          href='/about'
          className='hover:gradient-bg rounded-full border border-foreground px-4 py-2 text-foreground'
        >
          more
        </Link>
      </div>
      <div className='flex flex-col gap-12 py-16 text-foreground lg:flex-row'>
        {/* Left Side - Text Content */}
        <div className='lg:w-2/3'>
          <h2 className='gradient-text mb-6 text-sm font-bold'>
            A BIT MORE ABOUT MYSELF
          </h2>

          <p className='mb-6 text-xl leading-relaxed text-muted-foreground'>
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
            and 
            <strong className='text-foreground'> product management</strong>{' '}
            complements my neccesary skills, allowing me to focus on both
            <strong className='text-foreground'>
              {' '}
              the aesthetics
            </strong> and{' '}
            <strong className='text-foreground'>functionality</strong> of every
            solution I work on.
          </p>
        </div>

        {/* Right Side - Images (Using Grid) */}
        <div className='lg:w-1/3'>
          <div className='row-span-3 place-self-center'>
            <Image
              src={author}
              alt='Personal photo'
              className='h-80 rounded-lg object-cover object-[0%_20%]'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMeSection
