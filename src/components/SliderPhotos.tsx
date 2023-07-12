"use client"

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from "next/image"

export default function SliderPhotos(){
  const [ref] = useKeenSlider<HTMLDivElement>({
    mode: "free",
      slides: { origin: "center", perView: 1.5, spacing: 10 },
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2.3, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 10 },
      },
    }
  })


    return(
    <div ref={ref} className="keen-slider">
      <div className="keen-slider__slide number-slide1">
        <Image src="/assets/galeria/adriano-costa-galeria-01.jpg" width={405} height={320} alt="Adriano Costa"/>
      </div>
      <div className="keen-slider__slide number-slide2">
        <Image src="/assets/galeria/adriano-costa-galeria-02.jpg" width={405} height={320} alt="Adriano Costa"/>
      </div>
      <div className="keen-slider__slide number-slide2">
        <Image src="/assets/galeria/adriano-costa-galeria-03.jpg" width={405} height={320} alt="Adriano Costa"/>
      </div>
    </div>
    )
}