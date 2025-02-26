import Image from 'next/image'
import Link from 'next/link'

import { ProjectMetadata } from '@/lib/projects'

export default function Projects({
  projects
}: {
  projects: ProjectMetadata[]
}) {
  return (
    <section className='flex flex-col gap-16'>
      {projects.map((project, index) => (
        <div
          key={project.slug}
          className={`${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} flex flex-col items-center justify-between`}
        >
          {/* Left Side - Image */}
          <div className='flex w-full justify-center md:w-1/2'>
            {project.image && (
              <Image
                src={project.image}
                alt={project.title || ''}
                width={600}
                height={400}
                className='rounded-lg object-cover object-center'
              />
            )}
          </div>

          {/* Right Side - Content */}
          <div className='mt-8 w-full px-8 md:ml-12 md:mt-0 md:w-1/2'>
            <h4 className='gradient-text mb-4 text-sm uppercase tracking-wider'>
              {project.category}
            </h4>
            <h2 className='mb-6 text-4xl font-semibold leading-snug'>
              {project?.title?.split(',').map((text, index) => (
                <span key={index}>
                  {text}
                  {project.title &&
                    index < project?.title?.split(',')?.length - 1 && <br />}
                </span>
              ))}
            </h2>
            <p className='mb-6 text-lg text-gray-400'>{project.summary}</p>
            <Link href={`/projects/${project.slug}`}>
              <button className='hover:gradient-bg rounded-full border border-foreground px-4 py-2 text-foreground'>
                View Project
              </button>
            </Link>
          </div>
        </div>
      ))}
    </section>
  )
}
