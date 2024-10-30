import React from 'react'
import bg from "../assets/bg-shadow.png"
import banner from "../assets/banner-main.png";


const Hero = ({ handleCount }) => {
  return (

      <div className='w-full h-[80vh] md:h-[70vh] flex justify-center items-center  mt-[50px] '>

          <div className='w-[95%] md:w-[80%] bg-[black] h-[100%] backdrop-blur-2xl rounded-[10px] overflow-hidden relative'>
          <img src={bg} alt="" className='w-[100%] h-[100%]' />
          <div className="hero_contents absolute top-0 left-[50%]  transform translate-x-[-50%] w-full h-full flex justify-center items-center flex-col gap-4">
            
            <img src={banner} alt="Loading..."  className='w-[200px] h-[200px] '/>
                  <h2 className='text-xl md:text-3xl text-center text-white'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
                  <p className='text-[gray]'>Beyond Boundaries Beyond Limits</p>
                  <div className='border-[#E7FE29] p-1 rounded-[10px] border-[1px]'>

                      <button className='btn bg-[#E7FE29] border-none rounded-[10px]' onClick={handleCount} >Claim Free Credit</button>
                  </div>
          </div>

      </div>
    </div>
  )
}

export default Hero