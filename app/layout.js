export const metadata = {
  title: 'Discover Our Products | Mettā Muse - Premium Handcrafted Items',
  description: 'Explore our curated collection of premium handcrafted products. From stylish bags to unique accessories, find quality items made by skilled artisans.',
  keywords: 'e-commerce, products, handcrafted, bags, accessories, metta muse',
  authors: [{ name: 'Mettā Muse' }],
  openGraph: {
    title: 'Discover Our Products | Mettā Muse',
    description: 'Explore our curated collection of premium handcrafted products.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Simplon+Norm:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
