import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { SectionInfo, SectionTitle } from "../ui/section";
import { BLOGS_CONTENT } from "./lib";




export default function Blogs() {
    return (
        <section className="contain h-screen">
            <SectionInfo className="text-right">
                <SectionTitle>BLOGS</SectionTitle>
            </SectionInfo>
            <div>
                <Carousel opts={{ loop: true }} className="px-5 pt-5 md:px-20 md:pt-20 ">
                    <CarouselContent>
                        {BLOGS_CONTENT.map((blog, index) => (
                            <CarouselItem key={index}>
                                <div className="pl-5">
                                    <h3 className="text-[#058489] font-bold font-montserrat text-3xl mb-4">{blog.title}</h3>
                                    <div className="relative h-[60vh] lg:w-1/2">
                                        <Image src={blog.images.thumbnail} alt={blog.title} fill className="object-cover" />
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>


        </section>
    )
}
