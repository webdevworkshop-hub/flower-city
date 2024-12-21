import { Montserrat, Signika, Spectral } from "next/font/google";


// Normal
export const spectral= Spectral({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-spectral",
    weight: "200"
})

// Heading
export const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-montserrat",
  });

  // Subheading
export const signika= Signika({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-signika",
})