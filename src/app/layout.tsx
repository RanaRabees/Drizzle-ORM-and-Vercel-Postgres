import Navbar from '@/components/Navbar'
import './globals.css'
import Myfooter from '@/components/Myfooter'


export const metadata = {
  title: 'Rana Rabees Hackathon',
  description: 'A combo of nextjs, sanity, stripe',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Myfooter />
      </body>
    </html>
  )
}
