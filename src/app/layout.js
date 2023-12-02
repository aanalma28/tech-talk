import '../../styles/globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Landing Page</title>
      </head>
      <body>{children}</body>      
    </html>
  )
}

