import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

export default function Hero() {
    const SLIDE = [
        {
            src : "/homepage/hero/slide1.jpg",
            desc : "Desc1"
        },
        {
            src : "/homepage/hero/slide2.jpg",
            desc : "Desc1"
        },
        {
            src : "/homepage/hero/slide3.png",
            desc : "Desc1"
        },
    ]

    
    return (
        <section className="h-[80vh]">
            <Carousel>
                <CarouselContent>
                    {SLIDE.map((item, index)=>(
                        <CarouselItem key={index}>
                        <div className="relative w-full h-[80vh]">
                            <Image src={item.src} alt="slide1" fill className=" object cover" />
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="absolute top-3/4 flex gap-6">
                    <CarouselPrevious theme="light" className="[&_svg]:size-10 border-none "/>
                    <CarouselNext theme="light" className="[&_svg]:size-10 border-none "/>
                </div>

            </Carousel>

        </section>
    )
}