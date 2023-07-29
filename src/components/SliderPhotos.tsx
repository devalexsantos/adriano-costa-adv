"use client"

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

export default function SliderPhotos(){
  const [ref] = useKeenSlider<HTMLDivElement>({
    mode: "free",
      slides: { perView: 2.5, spacing: 3},
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2.3, spacing: 3},
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 3},
      },
    }
  })


    return(
    <div ref={ref} className="keen-slider">
      <div className="keen-slider__slide number-slide1">
        <img src="/assets/galeria/adriano-costa-galeria-01.jpg" width={405} height={320} alt="Adriano Costa"/>
      </div>
      <div className="keen-slider__slide number-slide2">
        <img src="/assets/galeria/adriano-costa-galeria-02.jpg" width={405} height={320} alt="Adriano Costa"/>
      </div>
      <div className="keen-slider__slide number-slide2">
        <img src="/assets/galeria/adriano-costa-galeria-03.jpg" width={405} height={320} alt="Adriano Costa"/>
      </div>
    </div>
    )
}