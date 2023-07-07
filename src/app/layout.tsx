import '../styles/globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: "Alex | Developer",
  description: "Seja bem-vindo ao meu Portfólio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
