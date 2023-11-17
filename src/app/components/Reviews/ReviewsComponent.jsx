import React from 'react'
import ReviewStats from '../Card/ReviewStats'
import FormComponent from './FormComponent'
import Reviews from './Reviews'

function ReviewsComponent() {
  return (
    <div className='mt-[39px] w-[1140px] max-h-fit bg-white rounded-xl pl-[40px] pr-[38px]'>
        <h2 className='text-[#1B2437] font-sans text-[34px] mt-[56.5px]'>Reviews</h2>
        <ReviewStats />
        <FormComponent />
        <Reviews />
        <div className='mt-[132px]'>

        </div>
    </div>
  )
}

export default ReviewsComponent