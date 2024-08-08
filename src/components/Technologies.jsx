import React from 'react'
import { BiLogoPostgresql } from 'react-icons/bi'
import { FaNodeJs } from 'react-icons/fa'
import { RiNextjsLine, RiNodejsLine, RiReactjsLine } from 'react-icons/ri'
import { SiMongodb } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <h1 className='my-20 text-center text-4xl'>Technologies</h1>
        <div className='flex flex-wrap items-center justify-center gap-4'>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-7xl text-react text-cyan-400'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                < BiLogoPostgresql className='text-7xl text-react text-sky-700'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <TbBrandNextjs className='text-7xl '/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiMongodb className='text-7xl text-react text-green-500'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaNodeJs className='text-7xl text-react text-green-600'/>
            </div>
        </div>
    </div>
  )
}

export default Technologies
