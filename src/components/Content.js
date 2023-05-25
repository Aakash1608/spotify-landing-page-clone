import React, { useState } from 'react'
import Button from './Button'
import phoneImage from '../static/phone.jpg'

const Content = () => {
  const [qOne, setQone] = useState(false)
  const [qTwo, setQtwo] = useState(false)
  const [qThree, setQthree] = useState(false)
  const [qFour, setQfour] = useState(false)

  const handleClick = (val) => {
    if (val === 1){
      setQone(!qOne)
    }else if (val === 2) {
      setQtwo(!qTwo)
    }else if (val === 3) {
      setQthree(!qThree)
    }else if(val === 4){
      setQfour(!qFour)
    }
  }
  return (
    <main>
        <section className='section-one flex'>
            <div className='phoneImage-div'>
                <img className='phone-image' src={phoneImage} alt="" />
            </div>
            <div className='flex column top-div'>
              <h1>Play millions of songs and podcasts, for free.</h1>
              <Button />
            </div>
        </section>
        <section className='flex column section-two'>
          <h1>Got questions?</h1>
          <div className='questionaire'>
            { !qOne ? 
              <div className='question flex'
              onClick={() => handleClick(1)}>
                <p>How do I create a playlist?</p>
                <span>&dArr;</span>
              </div> :
              <div>
                <div style={{
                  backgroundColor: 'rgb(238, 238, 238)'
                }} onClick={() => handleClick(1)} className="question flex">
                  <p>How do I create a playlist?</p>
                  <span>&uArr;</span>
                </div>
                <div className='answer'>
                  <p>Playlists are a great way to save collections of music, either for your own listening or to share.</p>
                  <p>To create one:</p>
                    <p>1. Tap Your Library.</p>
                    <p>2. Tap CREATE.</p>
                    <p>3. Give your playlist a name.</p>
                    <p>4. Start adding songs (and we'll help you along).</p>
                </div>
              </div>
            }
            { !qTwo ? 
              <div className='question flex'
              onClick={() => handleClick(2)}>
                <p>How do I activate Data Saver mode?</p>
                <span>&dArr;</span>
              </div> :
              <div>
                <div style={{
                  backgroundColor: 'rgb(238, 238, 238)'
                }} onClick={() => handleClick(2)} className="question flex">
                  <p>How do I activate Data Saver mode?</p>
                  <span>&uArr;</span>
                </div>
                <div className='answer'>
                    <p>1. Tap Home.</p>
                    <p>2. Tap Settings.</p>
                    <p>3. Tap Data Saver.</p>
                    <p>4. Switch on Data Saver.</p>
                </div>
              </div>
            }
            { !qThree ? 
              <div className='question flex'
              onClick={() => handleClick(3)}>
                <p>Is it only possible to shuffle play music?</p>
                <span>&dArr;</span>
              </div> :
              <div>
                <div style={{
                  backgroundColor: 'rgb(238, 238, 238)'
                }} onClick={() => handleClick(3)} className="question flex">
                  <p>Is it only possible to shuffle play music?</p>
                  <span>&uArr;</span>
                </div>
                <div className='answer'>
                    <p>Any playlist with the shuffle icon will play on shuffle.</p>
                    <p>Some playlists won't have the shuffle icon, so you can tap any song to play it.</p>
                </div>
              </div>
            }
            { !qFour ? 
              <div className='question flex'
              onClick={() => handleClick(4)}>
                <p>Is it only possible to shuffle play music?</p>
                <span>&dArr;</span>
              </div> :
              <div>
                <div style={{
                  backgroundColor: 'rgb(238, 238, 238)'
                }} onClick={() => handleClick(4)} className="question flex">
                  <p>Is it only possible to shuffle play music?</p>
                  <span>&uArr;</span>
                </div>
                <div className='answer'>
                    <p>Tap Search. Under Browse All, tap Podcasts.</p>
                </div>
              </div>
            }
          </div>
        </section>
    </main>
  )
}

export default Content