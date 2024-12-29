import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const SectionInfo = forwardRef<
  HTMLDivElement,
  { children: React.ReactNode; className?: string }
>(({ children, className }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        " px-5 pt-[3.5vh] font-sans [text-shadow:_0_2px_4px_rgb(99_102_241_/_0.8)] text-secondary  md:px-20 md:pt-[7vh]",
        className,
      )}
    >
      {children}
    </div>
  );
});
SectionInfo.displayName = "SectionInfo";



const SectionTitle = forwardRef<
  HTMLHeadingElement,
  { children: React.ReactNode; className?: string }
>(({ children, className }, ref) => {
  return (
    <h2
      ref={ref}
      className={cn(
        " text-4xl uppercase font-bold  md:text-6xl",
        className,
      )}
    >
      {children}
    </h2>
  );
});
SectionTitle.displayName = "SectionTitle";



const SectionContent = forwardRef<
  HTMLDivElement,
  { children?: React.ReactNode; className?: string }
>(({ children, className }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("px-5 py-[3.75rem] md:px-24 md:pb-[7.813rem]", className)}
    >
      {children}
    </div>
  );
});
SectionContent.displayName = "SectionContent";

export {
  SectionInfo,
  SectionTitle,
  SectionContent,
};
