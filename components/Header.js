import styles from '@/styles/Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
    
      <div className={styles.topBanner}>
        <div className={styles.topBannerContent}>
          <div className={styles.bannerItem}>
            <span className={styles.bannerIcon}>📱</span>
            <span>Lorem ipsum dolor</span>
          </div>
          <div className={styles.bannerItem}>
            <span className={styles.bannerIcon}>📱</span>
            <span>Lorem ipsum dolor</span>
          </div>
          <div className={styles.bannerItem}>
            <span className={styles.bannerIcon}>📱</span>
            <span>Lorem ipsum dolor</span>
          </div>
        </div>
      </div>

   
      <div className={styles.mainHeader}>
        <div className={styles.headerContainer}>
       
          <div className={styles.logo}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <rect x="8" y="8" width="10" height="10" fill="#333" />
              <rect x="22" y="8" width="10" height="10" fill="#333" />
              <rect x="8" y="22" width="10" height="10" fill="#333" />
              <rect x="22" y="22" width="10" height="10" fill="#333" />
              <circle cx="20" cy="20" r="4" fill="#fff" />
            </svg>
          </div>

          
          <div className={styles.brandName}>
            <h1>LOGO</h1>
          </div>

         
          <div className={styles.headerActions}>
            <button className={styles.iconButton} aria-label="Search">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="8" strokeWidth="2"/>
                <path d="M21 21l-4.35-4.35" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <button className={styles.iconButton} aria-label="Wishlist">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className={styles.iconButton} aria-label="Shopping Cart">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="9" cy="21" r="1" strokeWidth="2"/>
                <circle cx="20" cy="21" r="1" strokeWidth="2"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className={styles.iconButton} aria-label="User Profile">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="7" r="4" strokeWidth="2"/>
              </svg>
            </button>
            <button className={styles.languageButton} aria-label="Change Language">
              ENG
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                <path d="M6 9L1 4h10z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>


      <nav className={styles.navigation}>
        <ul className={styles.navList}>
          <li><a href="#shop" className={styles.navLink}>SHOP</a></li>
          <li><a href="#skills" className={styles.navLink}>SKILLS</a></li>
          <li><a href="#stories" className={styles.navLink}>STORIES</a></li>
          <li><a href="#about" className={styles.navLink}>ABOUT</a></li>
          <li><a href="#contact" className={styles.navLink}>CONTACT US</a></li>
        </ul>
      </nav>
    </header>
  )
}
