'use client'

import { useState } from 'react'
import styles from '@/styles/ProductCard.module.css'

export default function ProductCard({ product }) {
  const [isWishlisted, setIsWishlisted] = useState(false)

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted)
  }

  return (
    <article className={styles.productCard}>
      
     <div className={styles.productImageWrapper}>
        <img
          src={product.image}
          alt={product.title}
          className={styles.productImage}
          loading="lazy"
        />
      </div>

    
      <div className={styles.productInfo}>
        <h3 className={styles.productName}>{product.title}</h3>
        
        <div className={styles.productFooter}>
          <p className={styles.productPrice}>
            <a href="#signin" className={styles.signInLink}>
              Sign in
            </a>
            {' '}or{' '}
            <a href="#create-account" className={styles.signInLink}>
              Create an account
            </a>
            {' '}to see pricing
          </p>
          
          <button
            className={`${styles.wishlistButton} ${isWishlisted ? styles.wishlisted : ''}`}
            onClick={toggleWishlist}
            aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill={isWishlisted ? '#E74C3C' : 'none'} 
              stroke={isWishlisted ? '#E74C3C' : 'currentColor'}
            >
              <path 
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </article>
  )
}
