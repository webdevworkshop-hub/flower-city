import { Montserrat, Signika, Spectral } from "next/font/google";




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

// Normal
export const spectral= Spectral({
    subsets: ["latin"],
    display: "swap",
    weight: ["200"]
})