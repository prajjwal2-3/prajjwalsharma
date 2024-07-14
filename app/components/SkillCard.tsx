import React from 'react'

export default function SkillCard({skillName,skillIcon}:{
    skillName:string,
    skillIcon: {
        alt: string;
        classname: string;
        src: string;
      };
}) {
  return (
    <div className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300">
      
      <img src={skillIcon.src} alt={skillIcon.alt} className='w-12 text-4xl mx-auto inline-block' />
      <p className="text-xl font-semibold mt-4">{skillName}</p>
    </div>
  )
}
