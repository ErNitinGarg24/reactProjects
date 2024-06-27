import { Image } from '@nextui-org/react'
import React from 'react'

const Navigation = () => {
  return (
    <div className='navigation'>
        <nav>
            <div className="navigation__logo">
                <Image src='/images/logo.svg' alt='logo' />
            </div>
        </nav>
    </div>
  )
}

export default Navigation