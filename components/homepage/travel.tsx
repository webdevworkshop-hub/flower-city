import Image from "next/image";
import { Button } from "../ui/button";
import { SectionContent, SectionInfo, SectionTitle } from "../ui/section";

export default function Travel() {
    return (
        <section className="contain bg-secondary-bg">
            <SectionInfo className="flex justify-between items-center">
                <SectionTitle>Travel</SectionTitle>
                <Button className="bg-black rounded-md">Open Account</Button>
            </SectionInfo>
            <SectionContent className="grid lg:grid-cols-2">
                <div className="flex flex-col gap-5">

                </div>
                <div className="relative h-[23rem]">
                    <Image src={"/homepage/travel/travel.avif"} alt="travel-banner" fill className="object-cover w-1/2 " />
                </div>
            </SectionContent>

        </section>
    )
}