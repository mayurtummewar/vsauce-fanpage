import React from 'react'
import Navbar from './Navbar/Navbar'
import Content from './Content/Content'

const Body = () => {
  return (
    <div className='h-full w-full bg-gray-300 relative'>
        <Navbar />
        <Content />
{/*         
      To Do :-
      Add a sidebar displaying similar youtube channels.
      Make the site responsive.
 */}
    </div>
  )
}

export default Body