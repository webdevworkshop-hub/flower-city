"use client"
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Hero() {
    const SLIDE = [
        {
            src: "/homepage/hero/slide1.jpg",
            tagline:"Where nature paints a thousand hues.",
            title: "A Tapestry of Blooms: Exploring the Valley of Flowers"
        },
        {
            src: "/homepage/hero/slide2.jpg",
            tagline: " A paradise for the senses.",
            title : "The Valley of Flowers: A Journey into Floral Bliss"
        },
        {
            src: "/homepage/hero/slide3.png",
            tagline: "Stepping into Wonder: Discovering the Valley of Flowers",
            title :" Untamed beauty, serene escape"
        },
    ]





    return (
        <section className="h-[80vh]">
            <Carousel opts={{ loop: true }}
                plugins={[Autoplay({ delay: 5000 })]}>
                <CarouselContent>
                    {SLIDE.map((item, index) => (
                        <CarouselItem key={index}>
                            <div className="relative w-full h-[80vh]">
                                <Image src={item.src} alt="slide1" fill className=" object cover" />
                                <div className="absolute top-[55%] left-[7%] text-white">
                                    <h3 className=" text-3xl md:text-4xl font-bold font-signika [text-shadow:_0_4px_4px_rgb(99_102_241_/_0.8)]">{item.title}</h3>
                                    <p className="text-2xl mt-2 font-semibold">{item.tagline}</p>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="absolute top-[90%] left-[7%] flex gap-6">
                    <CarouselPrevious theme="light" className="[&_svg]:size-10 border-none " />
                    <span className="text-4xl text-white">.....</span>
                    <CarouselNext theme="light" className="[&_svg]:size-10 border-none " />
                </div>
            </Carousel>

        </section>
    )
}