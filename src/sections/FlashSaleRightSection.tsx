import React from 'react'
import ProductCardComponent from '../components/ProductCardComponent'

const FlashSaleRightSection: React.FC = ({title, items = []}) => {
  return (

    <section className="flashsale-right container">
        <section className="product-grid">
        <div className="container">
            <h1>{title}</h1>
            <div className="row row-cols-1 row-cols-md-2"> 
                {
                  items.map(product => <ProductCardComponent key={product.articleNumber} product={product} />)
                }  
            </div>  
        </div>
      </section>
        <div className="flashsale-box">
            <h1 className="flashsale-title">2 FOR USD $29</h1>
            <button className="btn btn-lg btn-theme">
                <span className="btn-theme-left-border"></span>
                FLASH SALE
                <span className="btn-theme-right-border"></span>
            </button> 
        </div>
        
    </section>
  )
}

export default FlashSaleRightSection