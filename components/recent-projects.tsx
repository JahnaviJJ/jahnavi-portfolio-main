import Link from 'next/link'
import { getProjects } from '@/lib/projects'
import Projects from '@/components/projects'

export default async function RecentProjects() {
  const projects = await getProjects(2)

  return (
    <section className='pb-24 pt-20'>
      <div>
        <div className='mb-20 flex items-center justify-between'>
          <h2 className='title font-work-sans text-muted-foreground'>
            Recent <span className='text-foreground'>Projects</span>
          </h2>
          <Link
            href='/projects'
            className='hover:gradient-bg rounded-full border border-foreground px-4 py-2 text-foreground'
          >
            View All Projects
          </Link>
        </div>
        <Projects projects={projects} />
      </div>
    </section>
  )
}
