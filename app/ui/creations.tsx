'use client'

import * as React from "react"
import styles from "@/app/style/creations.module.css"
import Image from 'next/image'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "@/app/style/carousel.css"

export default function App() {
    //load current size on first render
    const [sizeCarousel, setSizeCarousel] = React.useState(() => {
      if (window.innerWidth <= 616) {
        return 1;
      }
      else if (window.innerWidth <= 766) {
        return 2;
      }
      else if (window.innerWidth <= 1080) {
        return 2.5;
      }
      else if (window.innerWidth <= 1400) {
        return 3.5;
      }
      else {
        return 4.5;
      }
    }
  );

  //read screen size to change sizeCarousel
  React.useEffect(() => {
    function handleResize() {
      console.log('resized to: ', window.innerWidth, 'x', window.innerHeight);
      if (window.innerWidth <= 616) {
        setSizeCarousel(1);
      }
      else if (window.innerWidth <= 766) {
        setSizeCarousel(2);
      }
      else if (window.innerWidth <= 1080) {
        setSizeCarousel(2.5);
      }
      else if (window.innerWidth <= 1400) {
        setSizeCarousel(3.5);
      }
      else {
        setSizeCarousel(4.5);
      }
    }

    window.addEventListener('resize', handleResize);
  })

  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      loop: true,
      slides: {
        origin: "center",
        perView: sizeCarousel,
        spacing: 10
      }
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )


  return (
    <div className={styles.creationsDiv}>
      <h1>
        Les Creations
      </h1>
      <div className={styles.carouselDiv}>
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">
            <Image
              src="/bags/unnamed.png"
              width={1000}
              height={1000}
              alt='photo de sac'
            />
          </div>
          <div className="keen-slider__slide number-slide1">
            <Image
              src="/bags/unnamed2.png"
              width={1000}
              height={1000}
              alt='photo de sac'
            />
          </div>
          <div className="keen-slider__slide number-slide1">
            <Image
              src="/bags/unnamed3.png"
              width={1000}
              height={1000}
              alt='photo de sac'
            />
          </div>
          <div className="keen-slider__slide number-slide1">
            <Image
              src="/bags/unnamed4.png"
              width={1000}
              height={1000}
              alt='photo de sac'
            />
          </div>
          <div className="keen-slider__slide number-slide1">
            <Image
              src="/bags/unnamed5.png"
              width={1000}
              height={1000}
              alt='photo de sac'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
