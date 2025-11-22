'use client'

import { useState } from 'react'
import ProductCard from './ProductCard'
import styles from '@/styles/ProductGrid.module.css'

export default function ProductGrid({ products }) {
  const [showFilter, setShowFilter] = useState(false)
  const [sortBy, setSortBy] = useState('recommended')

  const [filters, setFilters] = useState({
    customizable: false,
    idealFor: 'all',
    occasion: 'all',
    work: 'all',
    fabric: 'all',
    segment: 'all',
    suitableFor: 'all',
    rawMaterials: 'all',
    pattern: 'all',
  })

  const [expandedSections, setExpandedSections] = useState({
    idealFor: true,
    occasion: false,
    work: false,
    fabric: false,
    segment: false,
    suitableFor: false,
    rawMaterials: false,
    pattern: false,
  })

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const handleFilterChange = (filterName, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterName]: value,
    }))
  }

  return (
    <section className={styles.productSection}>
      <div className={styles.productContainer}>
       
        <div className={styles.filterBar}>
          <div className={styles.itemCount}>
            <h2 className={styles.itemCountText}>{products.length} ITEMS</h2>

            <button
              className={styles.filterToggle}
              onClick={() => setShowFilter(!showFilter)}
              aria-expanded={showFilter}
            >
              <span className={styles.filterToggleIcon}>›</span>
              <span className={styles.filterToggleText}>
                {showFilter ? 'HIDE FILTER' : 'SHOW FILTER'}
              </span>
            </button>
          </div>

          <div className={styles.sortContainer}>
            <select
              className={styles.sortSelect}
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              aria-label="Sort products"
            >
              <option value="recommended">RECOMMENDED</option>
              <option value="newest">NEWEST FIRST</option>
              <option value="popular">POPULAR</option>
              <option value="price-low">PRICE: LOW TO HIGH</option>
              <option value="price-high">PRICE: HIGH TO LOW</option>
            </select>
          </div>
        </div>

       
        <div className={styles.contentWrapper}>
     
          {showFilter && (
            <aside className={styles.filterSidebar}>
            
              <div className={styles.filterGroup}>
                <label className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    checked={filters.customizable}
                    onChange={(e) =>
                      handleFilterChange('customizable', e.target.checked)
                    }
                    className={styles.checkbox}
                  />
                  <span>CUSTOMIZABLE</span>
                </label>
              </div>

              <hr className={styles.filterDivider} />

          
              <div className={styles.filterGroup}>
                <button
                  className={styles.filterHeader}
                  onClick={() => toggleSection('idealFor')}
                >
                  <span>IDEAL FOR</span>
                  <span
                    className={
                      expandedSections.idealFor
                        ? styles.arrowUp
                        : styles.arrowDown
                    }
                  >
                    ›
                  </span>
                </button>

                {expandedSections.idealFor && (
                  <div className={styles.filterOptions}>
                    <a href="#all" className={styles.filterLink}>
                      All
                    </a>

                    <label className={styles.checkboxLabel}>
                      <input type="checkbox" className={styles.checkbox} />
                      <span>Men</span>
                    </label>

                    <label className={styles.checkboxLabel}>
                      <input type="checkbox" className={styles.checkbox} />
                      <span>Women</span>
                    </label>

                    <label className={styles.checkboxLabel}>
                      <input type="checkbox" className={styles.checkbox} />
                      <span>Baby & Kids</span>
                    </label>
                  </div>
                )}
              </div>

              <hr className={styles.filterDivider} />

           
              <div className={styles.filterGroup}>
                <button
                  className={styles.filterHeader}
                  onClick={() => toggleSection('occasion')}
                >
                  <span>OCCASION</span>
                  <span
                    className={
                      expandedSections.occasion
                        ? styles.arrowUp
                        : styles.arrowDown
                    }
                  >
                    ›
                  </span>
                </button>

                {expandedSections.occasion && (
                  <div className={styles.filterOptions}>
                    <a href="#all" className={styles.filterLink}>
                      All
                    </a>
                  </div>
                )}
              </div>

              <hr className={styles.filterDivider} />

       
              <div className={styles.filterGroup}>
                <button
                  className={styles.filterHeader}
                  onClick={() => toggleSection('work')}
                >
                  <span>WORK</span>
                  <span
                    className={
                      expandedSections.work
                        ? styles.arrowUp
                        : styles.arrowDown
                    }
                  >
                    ›
                  </span>
                </button>

                {expandedSections.work && (
                  <div className={styles.filterOptions}>
                    <a href="#all" className={styles.filterLink}>
                      All
                    </a>
                  </div>
                )}
              </div>

              <hr className={styles.filterDivider} />

              <div className={styles.filterGroup}>
                <button
                  className={styles.filterHeader}
                  onClick={() => toggleSection('fabric')}
                >
                  <span>FABRIC</span>
                  <span
                    className={
                      expandedSections.fabric
                        ? styles.arrowUp
                        : styles.arrowDown
                    }
                  >
                    ›
                  </span>
                </button>

                {expandedSections.fabric && (
                  <div className={styles.filterOptions}>
                    <a href="#all" className={styles.filterLink}>
                      All
                    </a>
                  </div>
                )}
              </div>

              <hr className={styles.filterDivider} />

       
              <div className={styles.filterGroup}>
                <button
                  className={styles.filterHeader}
                  onClick={() => toggleSection('segment')}
                >
                  <span>SEGMENT</span>
                  <span
                    className={
                      expandedSections.segment
                        ? styles.arrowUp
                        : styles.arrowDown
                    }
                  >
                    ›
                  </span>
                </button>

                {expandedSections.segment && (
                  <div className={styles.filterOptions}>
                    <a href="#all" className={styles.filterLink}>
                      All
                    </a>
                  </div>
                )}
              </div>

              <hr className={styles.filterDivider} />


              <div className={styles.filterGroup}>
                <button
                  className={styles.filterHeader}
                  onClick={() => toggleSection('suitableFor')}
                >
                  <span>SUITABLE FOR</span>
                  <span
                    className={
                      expandedSections.suitableFor
                        ? styles.arrowUp
                        : styles.arrowDown
                    }
                  >
                    ›
                  </span>
                </button>

                {expandedSections.suitableFor && (
                  <div className={styles.filterOptions}>
                    <a href="#all" className={styles.filterLink}>
                      All
                    </a>
                  </div>
                )}
              </div>

              <hr className={styles.filterDivider} />

              <div className={styles.filterGroup}>
                <button
                  className={styles.filterHeader}
                  onClick={() => toggleSection('rawMaterials')}
                >
                  <span>RAW MATERIALS</span>
                  <span
                    className={
                      expandedSections.rawMaterials
                        ? styles.arrowUp
                        : styles.arrowDown
                    }
                  >
                    ›
                  </span>
                </button>

                {expandedSections.rawMaterials && (
                  <div className={styles.filterOptions}>
                    <a href="#all" className={styles.filterLink}>
                      All
                    </a>
                  </div>
                )}
              </div>

              <hr className={styles.filterDivider} />

            
              <div className={styles.filterGroup}>
                <button
                  className={styles.filterHeader}
                  onClick={() => toggleSection('pattern')}
                >
                  <span>PATTERN</span>
                  <span
                    className={
                      expandedSections.pattern
                        ? styles.arrowUp
                        : styles.arrowDown
                    }
                  >
                    ›
                  </span>
                </button>

                {expandedSections.pattern && (
                  <div className={styles.filterOptions}>
                    <a href="#all" className={styles.filterLink}>
                      All
                    </a>
                  </div>
                )}
              </div>
            </aside>
          )}

          
          <div className={styles.productGrid}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
