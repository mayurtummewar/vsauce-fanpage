import React from 'react'

const VideoItem = (props) => {
  return <div className='h-200 w-350 mx-auto mt-10 relative'>
    <div className='relative h-full flex flex-col justify-around text-white z-20 px-60'>
      <a href={props.redirect}>
      <h3 className='text-7xl font-medium no-underline hover:underline'>{typeof props.index === "number" && (props.index+1+". ")}{props.name} </h3>
      </a>
      <p className='text-2xl text-justify'>{props.description}</p>
    </div>
    <div className='absolute inset-0 bg-black/60 z-10'></div>
    <img src={props.thumbnail} alt={props.name} className='absolute z-0 inset-0 w-full h-full object-cover object-center' />
  </div>
}

export default VideoItem