import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

export default function Header() {
  const NAV_LINKS = [
    {
      title: "TRAVEL",
      route: "/travel",
    },
    {
      title: "BLOG",
      route: "/blogs",
    },
    {
      title: "LEAVING AND DINING GUIDE",
      route: "/guide",
    },
    {
      title: "CONTACT US",
      route: "/contact-us",
    },
  ];

  return (
    <header className="group  absolute z-50 flex h-[4.25rem] w-full items-center bg-white/60 px-4 transition-colors duration-500 hover:bg-[#201C26] lg:h-[12vh] lg:gap-[9.875rem]">
      <div className="container mx-auto flex h-fit justify-between">
        <div>
          <Link href="/" className="my-auto h-fit lg:h-[4.188rem] lg:w-[7rem]">
            <Image
              src={"/header/logo.png"}
              alt="logo"
              width={100}
              height={100}
              className="my-auto h-[2.25rem] w-[2.25rem] lg:h-[4.188rem] lg:w-[4.188rem]"
            />
            {/* <Image
              src={"/header/logo-white.png"}
              alt="logo"
              width={88}
              height={67}
              className="my-auto hidden h-[2.25rem] w-[2.93rem] group-hover:block lg:h-[4.188rem] lg:w-[5.5rem]"
            /> */}
          </Link>
        </div>

        <div className="flex justify-between text-base font-bold">
          {/* Desktop Navigation */}
          <div className="hidden items-center justify-between gap-5  md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.route}
                href={link.route}
                className="px-3 py-1 font-montserrat text-xl group-hover:text-background"
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center md:hidden">
            <Sheet>
              <div>
                <SheetTrigger>
                  <svg
                    width="24"
                    height="12"
                    viewBox="0 0 24 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="group-hover:invert"
                  >
                    <rect y="0.399902" width="24" height="3" fill="#201C26" />
                    <rect y="8.19971" width="24" height="3" fill="#201C26" />
                  </svg>
                </SheetTrigger>
              </div>
              <SheetContent>
                <nav className="flex h-full flex-col gap-20">
                  <a
                    href="/"
                    className="relative mx-auto aspect-[79/60] w-[4.9375rem]"
                  >
                    <Image
                      src="/header/logo-dark.png"
                      className="object-cover"
                      alt="logo"
                      fill
                    />
                  </a>
                  <div className="flex flex-col gap-6 font-montserrat text-base font-bold text-[#201C26]">
                    {NAV_LINKS.map((link) => (
                      <Link
                        key={link.route}
                        href={link.route}
                        className="px-5 py-3 hover:bg-secondary group-hover:text-background"
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
