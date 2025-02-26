import React from 'react'
const educationData = [
  {
    college: 'University of Windsor',
    startDate: 'Sep 2023',
    endDate: '',
    course: 'Master of Applied Computing',
    location: 'ON, Canada',
    score: 'GPA: 3.6/4.0'
  },
  {
    college: 'L.D. College of Engineering',
    startDate: 'Jul 2018',
    endDate: 'May 2022',
    course: 'Bachelor of Engineering',
    location: 'Ahmedabad, India',
    score: 'CGPA: 8.9/10.0'
  }
]
const Education = () => {
  return (
    <section className='flex flex-col gap-9'>
      <h2 className='title font-work-sans text-muted-foreground'>
        My <span className='text-foreground'>Education</span>
      </h2>
      <div className='flex flex-col gap-12'>
        {educationData.map((item, inx) => (
          <div key={inx} className='flex w-full items-start justify-between'>
            <div>
              <p className='text-xl font-bold'>{item.course}</p>
              <p className='mt-2 text-foreground'>
                {item.college} •{' '}
                <span className='italic text-muted-foreground'>
                  @{item.location}
                </span>
              </p>
              <p className='text-foreground'>{item.score}</p>
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

export default Education
