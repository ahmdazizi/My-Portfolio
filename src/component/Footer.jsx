import React from 'react'
import DataImage from '../data'

function Footer() {
  return (
    <div className="mt-32 py-4 md:px-6 flex md:flex-row flex-col items-center justify-between gap-6 md:gap-0 text-blue-950">
      <div className='mr-2 flex items-center'>
      <img src={DataImage.icon} alt="ikon" className="w-8 h-4" />
      <h1 className='text-2xl font-bold'>MyPortfolio</h1>
      </div>
     
      <div className="flex gap-7 font-medium">
        <a href="#beranda">Beranda</a>
        <a href="#tentang">Tentang</a>
        <a href="#proyek">Proyek</a>
      </div>
      <div className="flex items-center gap-3">
        <a href="">
          <i className='ri-github-fill ri-2x'></i>
        </a>
        <a href="">
          <i className='ri-instagram-fill ri-2x'></i>
        </a>
        <a href="">
          <i className='ri-linkedin-fill ri-2x'></i>
        </a>
      </div>
    </div>
  )
}

export default Footer