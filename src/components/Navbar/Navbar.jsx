import React from 'react'
import vsauce_logo from '../../assets/vsauce_logo.svg'
import youtube_logo from '../../assets/youtube_logo.png'
import NavItem from './NavItem'

const Navbar = () => {
  const navList =[
    {
      text: "visit site",
      siteLink: "https://www.vsauce.com/#/"
    },
    {
      text: "wikipedia",
      siteLink: "https://en.wikipedia.org/wiki/Vsauce"
    },
    {
      text: "twitter",
      siteLink: "https://x.com/tweetsauce?lang=en"
    },
    {
      text: "subreddit",
      siteLink: "https://www.reddit.com/r/vsauce/"
    },
    {
      text: "the Curiosity box",
      siteLink: "https://www.curiositybox.com/"
    }
  ]
  return (
    <div className='flex items-center justify-between w-screen bg-white fixed z-50'>
      <img className='h-10 px-16' src={vsauce_logo} />
      <div className='flex items-center justify-between'>
        {navList.map(function(elem, idx) {
          return <div className='px-6 underline font-thin' key={idx}>
            <NavItem item={elem.text} redirect={elem.siteLink} />
          </div>
        })}
      </div>
      <a href="https://www.youtube.com/@Vsauce">
        <img className='h-15 px-16' src={youtube_logo} />
      </a>
    </div>
  )
}

export default Navbar