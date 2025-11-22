import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import Footer from '@/components/Footer';
import '@/app/globals.css';

import { headers } from 'next/headers';

async function getProducts() {
  try {
    const apiUrl =
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:8888/.netlify/functions/products'
        : `https://astounding-pika-71fadf.netlify.app/.netlify/functions/products`;

 
    const finalUrl = apiUrl.replace(/([^:]\/)\/+/g, '$1');

    const res = await fetch(finalUrl, { cache: 'no-store' });

    if (!res.ok) throw new Error(`Failed to fetch products: ${res.status}`);

    const data = await res.json();

    return Array.isArray(data) ? data : data?.data || [];
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export default async function HomePage() {
  const products = await getProducts();

  
  console.log('Fetched products:', products);

  return (
    <>
      <Header />
      <main>
        <Hero />
        {products.length > 0 ? (
          <ProductGrid products={products} />
        ) : (
          <p style={{ textAlign: 'center', marginTop: '2rem' }}>
            No products found
          </p>
        )}
      </main>
      <Footer />
    </>
  );
}
