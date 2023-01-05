import { Lato, Montserrat } from "@next/font/google"
import "./globals.css"
import { config, library } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import {
  faBehance,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

// icons setup
config.autoAddCss = false
library.add(faInstagram, faBehance, faLinkedinIn, faEnvelope)

// fonts setup
const montserratFont = Montserrat({
  variable: "--font-montserrat",
  weight: ["300", "400", "500"],
})
const latoFont = Lato({
  variable: "--font-lato",
  weight: ["300", "400"],
  style: ["normal", "italic"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${montserratFont.variable} ${latoFont.variable} font-sans`}
    >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  )
}
