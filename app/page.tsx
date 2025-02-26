import Intro from '@/components/intro'

import RecentProjects from '@/components/recent-projects'
import Aboutme from '@/components/about-me'
import Head from 'next/head'

export default function Home() {
  return (
    <section className=''>
      <div className='container max-w-6xl'>
        <Intro />
        <div id='content'>
          <RecentProjects />
          <Aboutme />
        </div>
      </div>
    </section>
  )
}
