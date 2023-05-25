import React from 'react'
import spotifylogo from '../static/spotifylogo.png'


const Footer = () => {
  return (
    <footer>
        <div className="right flex">
            <img className='logo-s' src={ spotifylogo } alt="" />
            <div>
                <h4>COMPANY</h4>
                <p>About</p>
                <p>For the Record</p>
            </div>
            <div>
                <h4>COMMUNITIES</h4>
                <p>For Artists</p>
                <p>developers</p>
                <p>Advertising</p>
                <p>Investors</p>
                <p>Vendors</p>
            </div>
            <div>
                <h4>USEFUL LINKS</h4>
                <p>Support</p>
                <p>Web Player</p>
                <p>Free MObile App</p>
            </div>
        </div>
        <div className="left"></div>
    </footer>
  )
}

export default Footer