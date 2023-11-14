import React from 'react'

function CardComponent() {
  return (
  
  <div className=' w-[1100px] justify-center  flex bg-white mt-[62px] text-black   max-h-[660px]'>
    <div className='grid grid-cols-2'>
        <div className=' flex  flex-row justify-center bg-slate-500'>
            <div className='mt-[40px] px-[156px] justify-center items-center flex-col flex'>
                <img src='/product/dres1.png' alt='dres1' className=' object-cover max-w-[280px] max-h-[436px]' />
                <div className='grid grid-cols-5  mt-[56px] bg-purple-400'>
                    <div className='w-[88px] h-[88px]  bg-purple-400  border-2 rounded-sm justify-center items-center  '>
                        <img src='/product/dres1.png' className='w-[46px] h-[72px] ' />
                    </div>
                    <div className='w-[88px] h-[88px]  bg-purple-400 flex border-2 rounded-sm justify-center items-center '>
                        <img src='/product/dres1.png' className='w-[46px] h-[72px]  ' />
                    </div>
                    <div className='w-[88px] h-[88px]  bg-purple-400 flex border-2 rounded-sm justify-center items-center '>
                        <img src='/product/dres1.png' className='w-[46px] h-[72px] ' />
                    </div>
                    <div className='w-[88px] h-[88px]  bg-purple-400 flex border-2 rounded-sm justify-center items-center '>
                        <img src='/product/dres1.png' className='w-[46px] h-[72px] ' />
                    </div>
                    <div className='w-[88px] h-[88px]  bg-purple-400 flex border-2 rounded-sm justify-center items-center '>
                        <img src='/product/dres1.png' className='w-[46px] h-[72px] ' />
                    </div>
                  
                    
                </div>
            </div>
            
            <div>
          
           </div>
            
        </div>
        <div className='px-[32px] '>
            <div className='flex flex-row justify-between items-center py-[32px]'>
            <section className='px-[21px] pt-[6px] pb-[8px] text-[14px] text-black bg-slate-500 rounded-full'>
                Popular
            </section>
            <h1>heart</h1>
            </div>
            <h1 className='mt-[24px] text-[48px] font-sans max-w-[348px]'>Black Valentino
dress with tulle </h1>

            bgfd
        </div>
    </div>
    </div>

  )
}

export default CardComponent