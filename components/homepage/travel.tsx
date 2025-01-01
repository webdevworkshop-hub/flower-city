import Image from "next/image";
import { Button } from "../ui/button";
import { SectionContent, SectionInfo, SectionTitle } from "../ui/section";

export default function Travel() {
    return (
        <section className="contain bg-secondary-bg lg:h-[85vh]">
            <SectionInfo className="flex justify-between items-center">
                <SectionTitle>Travel</SectionTitle>
                <Button className="bg-black ">Open Account</Button>
            </SectionInfo>
            <SectionContent className=" grid lg:grid-cols-2">
                <div className="flex flex-col gap-9 text-center lg:max-w-xl my-auto">
                   <div className="text-center lg:max-w-2xl">
                        <h3 className="text-8xl font-bold text-[#8b61c2] font-signika">Explore</h3>
                        <h5 className="font-semibold text-3xl">THE CITY</h5>
                   </div>
                    <div className="flex flex-col gap-2 items-center">
                        <p className="text-2xl">It is not beauty that endears, it’s love that makes us see beauty.</p>
                        <div className="flex gap-5">
                            <Button variant={"secondary"}>Get Started</Button>
                            <Button variant={"outline"}>View more</Button>
                        </div>
                    </div>
                </div>
                
                <div className="relative h-[30rem]">
                  <div className="absolute  left-0 right-0 bg-[#c6dfe6] mx-auto rounded-full aspect-square h-[30rem]"></div>
                    <div className="relative h-[23rem] mt-[7%] z-20">
                        <Image src={"/homepage/travel/travel.avif"} alt="travel-banner" fill className="object-cover  w-1/2 " />
                    </div>
                    
                </div>
            </SectionContent>

        </section>
    )
}