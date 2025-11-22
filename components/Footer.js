import styles from '@/styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
       
        <div className={styles.footerTop}>
          <div className={styles.newsletter}>
            <h2 className={styles.newsletterTitle}>BE THE FIRST TO KNOW</h2>
            <p className={styles.newsletterText}>Sign up for updates from mettā muse.</p>
            <form className={styles.newsletterForm}>
              <input
                type="email"
                placeholder="Enter your e-mail..."
                className={styles.newsletterInput}
                aria-label="Email address"
              />
              <button type="submit" className={styles.subscribeButton}>
                SUBSCRIBE
              </button>
            </form>
          </div>

          <div className={styles.contact}>
            <h2 className={styles.contactTitle}>CONTACT US</h2>
            <p className={styles.contactItem}>+44 221 133 5360</p>
            <p className={styles.contactItem}>customercare@mettamuse.com</p>
            
            <h3 className={styles.currencyTitle}>CURRENCY</h3>
            <div className={styles.currencySelector}>
              <span className={styles.currencyFlag}>🇺🇸</span>
              <span className={styles.currencyCode}>• USD</span>
            </div>
            <p className={styles.currencyNote}>
              Transactions will be completed in Euros and a currency reference is available on hover.
            </p>
          </div>
        </div>

        <hr className={styles.divider} />

        
        <div className={styles.footerMiddle}>
          <div className={styles.footerColumn}>
            <h3 className={styles.footerColumnTitle}>mettā muse</h3>
            <ul className={styles.footerLinks}>
              <li><a href="#about">About Us</a></li>
              <li><a href="#stories">Stories</a></li>
              <li><a href="#artisans">Artisans</a></li>
              <li><a href="#boutiques">Boutiques</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#compliance">EU Compliances Docs</a></li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.footerColumnTitle}>QUICK LINKS</h3>
            <ul className={styles.footerLinks}>
              <li><a href="#orders">Orders & Shipping</a></li>
              <li><a href="#join">Join/Login as a Seller</a></li>
              <li><a href="#payment">Payment & Pricing</a></li>
              <li><a href="#returns">Return & Refunds</a></li>
              <li><a href="#faqs">FAQs</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms & Conditions</a></li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.footerColumnTitle}>FOLLOW US</h3>
            <div className={styles.socialLinks}>
              <a href="#instagram" className={styles.socialIcon} aria-label="Instagram">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
                  <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="16" cy="16" r="5" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="22" cy="10" r="1.5" fill="currentColor"/>
                </svg>
              </a>
              <a href="#linkedin" className={styles.socialIcon} aria-label="LinkedIn">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
                  <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M12 14v8M12 11.5v.5M16 14v8M16 18c0-2 1-3 3-3s3 1 3 3v3" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                </svg>
              </a>
            </div>

            <h3 className={styles.paymentTitle}>mettā muse ACCEPTS</h3>
            <div className={styles.paymentMethods}>
              <div className={styles.paymentIcon}>GPay</div>
              <div className={styles.paymentIcon}>MCard</div>
              <div className={styles.paymentIcon}>PayPal</div>
              <div className={styles.paymentIcon}>Amex</div>
              <div className={styles.paymentIcon}>Apple</div>
              <div className={styles.paymentIcon}>OPay</div>
            </div>
          </div>
        </div>

      
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            Copyright © 2023 mettamuse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
