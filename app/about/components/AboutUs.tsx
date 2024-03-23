import React from 'react'
import Button from '@/components/Button'

const AboutUs = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[50px]">
      <div className="find-us">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-52 lg:bold-52 xl:max-w-[600px]">Your Affordable Dining Hub</h2>
          <p className="regular-16 xl:max-w-[450px]">For Life Group is your go-to spot for delicious yet budget-friendly F&B options. Our cozy spaces are designed for comfort, whether you're dining solo or with friends. Join us and enjoy the perfect blend of affordability and comfort at For Life Group.</p>
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

export default AboutUs