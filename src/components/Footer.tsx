import Image from 'next/image'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div>
        <Image src='/OakLogoPage.png' alt='logo' width={2000} height={400}/>
    </div>
  )
}

export default Footer