import React, { useEffect, useState } from 'react'

import img1 from '../../assets/hero/3.jpg'
import img2 from '../../assets/hero/1.jpg'
import img3 from '../../assets/hero/2.jpg'
import { useNavigate } from 'react-router-dom'

export default function Carousal() {
  const navigate=useNavigate()
  const CarousalImg = [img1, img2, img3]

  const [currentImg, setCurrentImg] = useState(0)


  const nextImage = () => {
    setCurrentImg((prev) => (prev + 1) % CarousalImg.length)
  }

  const prevImage = () => {
    setCurrentImg((prev) =>
      prev === 0 ? CarousalImg.length - 1 : prev - 1
    )
  }

  // Auto Carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage()
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      style={{
        backgroundImage: `url(${CarousalImg[currentImg]})`
      }}
      className="
        w-full
        h-[80vh]
        bg-no-repeat
        bg-cover
        bg-center
        my-3
        relative
        overflow-hidden
        transition-all
        duration-700
      "
    >

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>


      {/* Hero Content */}
      <div
        className="
          absolute
          inset-0
          flex
          flex-col
          items-center
          justify-center
          text-center
          text-white
          px-5
        "
      >

        <p className="text-lg md:text-xl font-medium mb-3">
          Fresh & Delicious
        </p>

        <h1
          className="
            text-4xl
            md:text-6xl
            lg:text-7xl
            font-bold
            mb-5
          "
        >
          Order Your Favorite Food
        </h1>

        <p
          className="
            text-base
            md:text-lg
            max-w-xl
            mb-7
            text-gray-200
          "
        >
          Delicious meals delivered fresh and fast to your doorstep.
        </p>

        <button
          className="
            bg-orange-500
            hover:bg-orange-600
            text-white
            px-8
            py-3
            rounded-full
            font-semibold
            text-lg
            shadow-lg
            transition
            duration-300
            hover:scale-105
          "
          onClick={()=>navigate("/foods")}
        >
          Order Now
        </button>

      </div>


      {/* Previous Button */}
      <button
        onClick={prevImage}
        className="
          absolute
          left-5
          top-1/2
          -translate-y-1/2
          z-10
          bg-white/80
          hover:bg-white
          text-black
          w-12
          h-12
          rounded-full
          text-2xl
          shadow-lg
          transition
          duration-300
          hover:scale-110
        "
      >
        ❮
      </button>


      {/* Next Button */}
      <button
        onClick={nextImage}
        className="
          absolute
          right-5
          top-1/2
          -translate-y-1/2
          z-10
          bg-white/80
          hover:bg-white
          text-black
          w-12
          h-12
          rounded-full
          text-2xl
          shadow-lg
          transition
          duration-300
          hover:scale-110
        "
      >
        ❯
      </button>


      {/* Dots */}
      <div
        className="
          absolute
          bottom-6
          left-1/2
          -translate-x-1/2
          z-10
          flex
          gap-3
        "
      >

        {CarousalImg.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImg(index)}
            className={`
              w-3
              h-3
              rounded-full
              transition-all
              duration-300
              ${
                currentImg === index
                  ? 'bg-orange-500 scale-125'
                  : 'bg-white/70'
              }
            `}
          />
        ))}

      </div>

    </div>
  )
}