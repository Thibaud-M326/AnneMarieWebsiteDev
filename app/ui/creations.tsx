'use client'

import * as React from "react"
import styles from "@/app/style/creations/creations.module.css"
import Image from 'next/image'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useScreenSize } from "@/app/lib/screenSize";

export default function Creations() {

  const screenSize = useScreenSize().screenSize;

  //load current size on first render  
  const [sizeCarousel, setSizeCarousel] = React.useState(() => {
    return 1;
  });

  //read screen size to change sizeCarousel
  React.useEffect(() => {
    console.log(screenSize)
    if(screenSize === "xs") {
      setSizeCarousel(1);
    } else if (screenSize === "sm") {
      setSizeCarousel(1.5);
    } else if (screenSize === "md") {
      setSizeCarousel(2.5);
    } else if (screenSize === "lg") {
      setSizeCarousel(3.5);
    } else {
      setSizeCarousel(4);
    }

  }, [sizeCarousel, setSizeCarousel, screenSize])

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
    <div
      className={styles.creationsDiv}
      id="creations"
    >
      <h1>
        Les Creations
      </h1>
      <div className={styles.carouselDiv}>
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide-creations">
            <Image
              src="/bags/unnamed.png"
              width={1000}
              height={1000}
              alt='photo de sac'
            />
          </div>
          <div className="keen-slider__slide number-slide-creations">
            <Image
              src="/bags/unnamed2.png"
              width={1000}
              height={1000}
              alt='photo de sac'
            />
          </div>
          <div className="keen-slider__slide number-slide-creations">
            <Image
              src="/bags/unnamed3.png"
              width={1000}
              height={1000}
              alt='photo de sac'
            />
          </div>
          <div className="keen-slider__slide number-slide-creations">
            <Image
              src="/bags/unnamed4.png"
              width={1000}
              height={1000}
              alt='photo de sac'
            />
          </div>
          <div className="keen-slider__slide number-slide-creations">
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
