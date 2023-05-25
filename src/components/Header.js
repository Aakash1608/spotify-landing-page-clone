import React from 'react'
import spotifylogo from '../static/spotifylogo.png'

const Header = () => {
  return (
    <header className='flex'>
        <a target="_blank" href="https://www.spotify.com/in-en/">
            <img className='logo' src={spotifylogo} alt="" />
        </a>
        <div>
            <a href="#">Premium</a>
            <a href="#">Support</a>
            <a href="#">Download</a>
            <a href="#">Sign up</a>
            <a href="#">Login</a>
        </div>
    </header>
  )
}

export default Header