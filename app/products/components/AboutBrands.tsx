import React from 'react'
import Button from '@/components/Button'

const AboutBrands = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[50px]">
      <div className="find-us">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-52 lg:bold-52 xl:max-w-[600px]">Explore Our Brands</h2>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
          <Button 
            type="button" 
            title="Visit Our Instagram" 
            icon="/instagram-logo.png"
            variant="btn_white_outline" 
          />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutBrands