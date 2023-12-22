import Image from 'next/image'
import React from 'react'
import Section from './ui/section'

type Props = {}

const Footer = (props: Props) => {
  return (
    <Section className='py-20' background={'green'}>
        <Image src='/WhiteLogo.png' alt='logo' width={300} height={300}/>
    </Section>
  )
}

export default Footer