import Image from 'next/image';
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 



const Content = () => {
    

    
  
  return (
    <>
    <div className=' rounded-sm   mt-12  gap-20  flex  justify-between '>
   <div className='w-2/5 ml-8  '> 

    <p className='font-[800] text-4xl leading-10 mt-24 bg-gradient-to-b from-[#407088] to-[#ffb5b5] bg-clip-text text-transparent'> Enjoy our incredible online banking. <span className='block'>Millions of bilionairs are waiting....</span>   </p>
    <button className='text-[#fffbe0] px-4 py-2 mt-8 translate-x-28  font-bold text-2xl rounded-md bg-[#407088] shadow-xl  shadow-gray-500'> Join Now....</button>
    </div>
    

    <div className='w-[800px] mr-2 '>
    <Carousel> 
                  <div> 
                      <Image className=' rounded-md' src='/1.png' alt='image1' width={500} height={500}/> 
                    
  
                  </div> 
                  <div> 
                      <Image  className=' rounded-md'src='/2.png' alt='image2'  width={500 }height={500}/> 
                   
  
                  </div> 
                  <div> 
                      <Image width={500} height={500}  className=' rounded-md' src='/3.png' alt='image3'/> 
                    
  
                  </div> 
                  <div> 
                      <Image width={500} height={500} className=' rounded-md' src='/4.png' alt='image4'/> 
                  </div> 
                  <div> 
                      <Image height={500} width={500}  className=' rounded-md' src='/5.png' alt='image5'/> 
                     
  
                  </div> 
              </Carousel> 
    
    </div>
    
     
    </div>
     <div className='flex w-full justify-center h-20 font-bold text-4xl bg-gradient-to-r from-[#407088] to-[#ffb5b5] mt-40 mb-20 bg-clip-text text-transparent '>
          <p>About US 💫💫💫💫💫</p>
          </div>
     <div className='flex gap-32 items-center' >
      <div className='flex-1 flex flex-col gap-12'>
        <h1 className='font-bold text-[70px] leading-[1] bg-gradient-to-b from-[#194c33] to-[#ffb5b5] bg-clip-text text-transparent'>Better Investing for your Deposits.</h1>
        <p className='text-[24px] font-[300]'>Turning your idea to reality . We bring togrther the teams from the global finance industry.</p>
        <button className='p-5 py-3 bg-[#53c28b] border-none rounded-[5px] max-w-max'>See Our Works</button>
      </div>
     <div className='flex-1 mt-12 '><Image  width={400} height={400}  src='/hero.png' alt='Home-hero' className='animate-[bounce_8s_ease_alternate_infinite] '/></div> 
   </div>
          <div className='flex w-full justify-center h-20 font-bold text-4xl bg-gradient-to-r from-[#407088] to-[#ffb5b5] bg-clip-text text-transparent mt-20 mb-20'>
          <p>Testimonials 💚💚💚</p>
          </div>
   <div className='testmonials mb-40 pl-20 flex gap-20'>
     <div className='v1 flex flex-col relative h-72 border-4 w-72 p-8 rounded-xl border-r-[#95c2d8] shadow-lg' >
     <div className='flex items-center gap-4'>
     <Image width={500} height={500} className='rounded-[50%] w-[50px] h-[50px]' src='/v1.jpg'  alt='' />
     <span className='text-sm text-[#6c8fa0] opacity-80'>Ashraf Flefl <span className='block text-[7px]'>
     ⭐⭐⭐⭐⭐
     </span></span>
     </div>
     <p className='w-60 mt-10 leading-9 font-semibold bg-gradient-to-r from-[#407088] to-[#ffb5b5] bg-clip-text text-transparent'>   Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, amet.. </p>
     <p className='text-[10px] ml-12 text-[#6c8fa0] absolute font-semibold bottom-0 py-4'>625 reviews 🔥🔥🔥</p>
     
     </div>
     <div className='v1 flex flex-col relative h-72 border-4 w-72 p-8 rounded-xl border-r-[#95c2d8] shadow-lg' >
     <div className='flex items-center gap-4'>
     <Image width={500} height={500} className='rounded-[50%] w-[50px] h-[50px]' src='/t3.jpg'  alt='' />
     <span className='text-sm text-[#6c8fa0] opacity-80'>Rose anitia <span className='block text-[7px]'>
     ⭐⭐⭐⭐⭐
     </span></span>
     </div>
     <p className='w-60 mt-10 leading-9 font-semibold bg-gradient-to-r from-[#407088] to-[#ffb5b5] bg-clip-text text-transparent'>   Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, amet.. </p>
     <p className='text-[10px] ml-12 text-[#6c8fa0] absolute font-semibold bottom-0 py-4'>724 reviews 🔥🔥🔥</p>
     
     </div>
     <div className='v1 flex flex-col relative h-72 border-4 w-72 p-8 rounded-xl border-r-[#95c2d8] shadow-lg' >
     <div className='flex items-center gap-4'>
     <Image width={500} height={500} className='rounded-[50%] w-[50px] h-[50px]' src='/t2.jpg'  alt='' />
     <span className='text-sm text-[#6c8fa0] opacity-80'>Anita john <span className='block text-[7px]'>
     ⭐⭐⭐⭐⭐
     </span></span>
     </div>
     <p className='w-60 mt-10 leading-9 font-semibold bg-gradient-to-r from-[#407088] to-[#ffb5b5] bg-clip-text text-transparent'>   Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, amet.. </p>
     <p className='text-[10px] ml-12 text-[#6c8fa0] absolute font-semibold bottom-0 py-4'>325 reviews 🔥🔥🔥</p>
     
     </div>
   </div>
</>
  )
}

export default Content


