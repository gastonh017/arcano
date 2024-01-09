"use client"
import Image from 'next/image';
import '@/components/Slide/slide.css';

export default function CardProductos({ width, height, url, text }) {
  return (
    <div className='slide-container'>
      <Image
        src={url}
        width={width}
        height={height}
        alt='banner'
        className='slide-img'
      />
      <p>{text}</p>

    </div >
  )
}