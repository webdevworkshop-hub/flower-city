import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { SectionInfo, SectionTitle } from "../ui/section";
import { BLOGS_CONTENT } from "./lib";
import { Button } from "../ui/button";




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
                            <CarouselItem key={index} className="flex flex-col justify-between lg:flex-row">
                                <div className=" lg:pl-5">
                                    <h3 className="text-[#058489] font-bold font-montserrat text-3xl mb-4">{blog.title}</h3>
                                    <div className="hidden relative h-[50vh] lg:block lg:w-full">
                                        <Image src={blog.images.thumbnail} alt={blog.title} fill className="object-cover shadow-image-box" />
                                    </div>
                                </div>
                                <div className="flex flex-col justify-between lg:w-1/2 ">
                                    <div className="flex gap-5 lg:h-1/2">
                                        <div className="relative h-[31vh]  w-1/2">
                                            <Image src={blog.images.img1} alt={blog.title} fill className="object-cover shadow-image-box" />
                                        </div>
                                        <div className="relative h-[60%] w-1/3 mt-auto">
                                            <Image src={blog.images.img2} alt={blog.title} fill className="object-cover shadow-image-box" />
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-xl mt-3 lg:mt-0">{blog.highlight_text}</p>

                                         <Button variant={"secondary"} className="mt-9">READ MORE</Button>
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
