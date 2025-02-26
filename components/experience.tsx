import React from 'react'

const experienceData = [
  {
    company: 'Ingenico',
    startDate: 'Oct 2024',
    endDate: '',
    designation: 'Product Manager'
  },
  {
    company: 'Panim Technology',
    startDate: 'Jan 2022',
    endDate: 'Jun 2023',
    designation: 'Software Developer'
  },
  {
    company: 'Cloud Counselage',
    startDate: 'Dec 2022',
    endDate: 'Jun 2021',
    designation: 'Android Developer Intern'
  }
]

const Experience = () => {
  return (
    <section className='flex flex-col gap-9'>
      <h2 className='title font-work-sans text-muted-foreground'>
        My <span className='text-foreground'>Experience</span>
      </h2>
      <div className='flex flex-col gap-12'>
        {experienceData.map((item, inx) => (
          <div key={inx} className='flex w-full items-start justify-between'>
            <div>
              <p className='text-xl font-bold'>{item.designation}</p>
              <p className='mt-1 italic text-muted-foreground'>
                @{item.company}
              </p>
            </div>
            <div className='gradient-text'>
              {`${item.startDate} - ${item.endDate.length > 0 ? item.endDate : 'Present'}`}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
