import React from 'react'
import Button from './Button'

const FindUs = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="find-us">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[600px]">Want something on the go? Find us online!</h2>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button 
              type="button"
              title="GoFood"
              icon="/gofood-logo.png"
              variant="btn_white"
              full
            />
            <Button 
              type="button"
              title="GrabFood"
              icon="/grabfood-logo.png"
              variant="btn_dark_amber_outline"
              full
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FindUs