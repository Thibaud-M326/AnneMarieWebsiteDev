'use client'

import React from "react"
import {
  useKeenSlider,
  KeenSliderPlugin,
  KeenSliderInstance,
} from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "@/app/style/aPropos/aProposCarousel.css"

import Image from 'next/image'

function ThumbnailPlugin(
  mainRef: MutableRefObject<KeenSliderInstance | null>
): KeenSliderPlugin {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active")
      })
    }
    function addActive(idx: number) {
      slider.slides[idx].classList.add("active")
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx)
        })
      })
    }

    slider.on("created", () => {
      if (!mainRef.current) return
      addActive(slider.track.details.rel)
      addClickEvents()
      mainRef.current.on("animationStarted", (main) => {
        removeActive()
        const next = main.animator.targetIdx || 0
        addActive(main.track.absToRel(next))
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
      })
    })
  }
}

export default function App() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
  })
  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 1,
      slides: {
        perView: 3,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  )

  return (
    <div className="carouselDiv">
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide-aPropos">
          <Image
            src="/aPropos/savoirFaire/savoirFaire1.jpg"
            width={1000}
            height={1000}
            alt='photo de sac'
          />
        </div>
        <div className="keen-slider__slide number-slide-aPropos">
          <Image
            src="/aPropos/savoirFaire/interieurSac.jpeg"
            width={1000}
            height={1000}
            alt='photo de sac'
          />
        </div>
        <div className="keen-slider__slide number-slide-aPropos">
          <Image
            src="/aPropos/savoirFaire/savoirFaire2.jpg"
            width={1000}
            height={1000}
            alt='photo de sac'
          />
        </div>
      </div>

      <div ref={thumbnailRef} className="keen-slider thumbnail">
        <div className="keen-slider__slide number-slide-aPropos">
          <Image
            src="/aPropos/savoirFaire/savoirFaire1.jpg"
            width={1000}
            height={1000}
            alt='photo de sac'
          />
        </div>
        <div className="keen-slider__slide number-slide-aPropos">
          <Image
            src="/aPropos/savoirFaire/interieurSac.jpeg"
            width={1000}
            height={1000}
            alt='photo de sac'
          />
        </div>
        <div className="keen-slider__slide number-slide-aPropos">
          <Image
            src="/aPropos/savoirFaire/savoirFaire2.jpg"
            width={1000}
            height={1000}
            alt='photo de sac'
          />
        </div>
      </div>
    </div>
  )
}