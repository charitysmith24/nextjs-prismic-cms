import './globals.css'
import type { Metadata, ResolvingMetadata } from 'next'
import localFont from '@next/font/local'
import { createClient } from '@/prismicio'

const giFont400 = localFont({
  src: [
    {
      path: './fonts/G.I.-400.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/G.I.-400Italic.woff2',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-giFont400'
});

const giFont530 = localFont({
  src: [
    {
      path: './fonts/G.I.-530.woff2',
      weight: '530',
      style: 'normal',
    },
    {
      path: './fonts/G.I.-530Italic.woff2',
      weight: '530',
      style: 'italic',
    },
  ],
  variable: '--font-giFont530'
});

const giFont750 = localFont({
  src: [
    {
      path: './fonts/G.I.-750.woff2',
      weight: '750',
      style: 'normal',
    },
    {
      path: './fonts/G.I.-750Italic.woff2',
      weight: '750',
      style: 'italic',
    }
  ],
  variable: '--fong-giFont750'
})

export async function generateMetadata(): Promise<Metadata> { 
  const client = createClient();

  const page = await client.getSingle("settings");

  return {
    title: page.data.site_title || "Flowrise Fallback",
    description: page.data.meta_description || "Flowrise is the relaxing app for you.",
    openGraph: {
      images: [page.data.og_image.url || ""],
    },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`clsx(${giFont400.variable}, ${giFont530.variable}, ${giFont750.variable})`}>{children}</body>
    </html>
  )
}
