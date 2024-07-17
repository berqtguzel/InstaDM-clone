import "./layout.css"

export const metadata = {
  title:"Sohbetler - Instagram",
  description: "İnstagram dm",
  content:"width=device-width; initial-scale=1.0",

  icons: {
    icon:[
      "/favicon.ico?v=1"
    ],
    apple:[
      "/apple-touch-icon.png?v=4"
    ],
    shortcut:[
      "/apple-touch-icon.png"
    ],
  },
  manifest:"/site.webmanifest"
}
export default function RootLayout({ children }) {

  
  return (

    <html lang="en">
      <body >{children}</body>
    </html>
  );
}