"use client";

import { CustomButton } from '.';
import Image from 'next/image'

const Hero = () => {

const handleScroll = ()=>{

}

  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>Find, Book or Rent a Car - Quickly and Easily!</h1>
            <p className='hero__subtitle'>Streamline your car rental experience with our effortles booking proces.</p>
            <CustomButton 
             title="Explore Cars"
             containerStyles="bg-primary-blue text-white rounded-full mt-10"
             handleClick={handleScroll}
            />
        </div>
        <div className='hero__image-container'>
            <div className="hero__image">
                <Image src="/hero.png" alt='hero' fill className='object-cantain'/>
            </div>
            <div className='hero__image-overlay' />
        </div>
    </div>
  )
}

export default Hero;
