import React, { useState } from 'react'
import Styles from './Product.module.css'
import { Product } from './Product'
import { mensDetails } from './productDetails'
import { FilterPopUp } from './FilterPopUp'
import { FilterHandlers } from './FilterHandlers'
import { Link } from 'react-router-dom'

export default function Mens() {

    const [isCurrentState, setIsCurrentState] = useState(mensDetails)

    const [isPopup, setIsPopup] = useState(false);

    const { handleHighToLowPrice, handleLowToHighPrice, handleHighToLowRating, handleLowToHighRating } = FilterHandlers(setIsCurrentState, isCurrentState)

    return (
        <>
            <div className={Styles.section_1}>
                <div className={Styles.breadCrum}>
                    <p><Link to='/' style={{ textDecoration: "none", color: "#000" }}>Home</Link> / Clothing / <span>Men's Fashion</span></p>
                </div>
            </div>
            <div className={Styles.section_2}>
                <div className={Styles.filterSection}>
                    <p className={Styles.titleFilter} >FILTERS</p>
                    <ul>
                        <p>PRICE</p>
                        <li>
                            <input type="radio" name="filter" onClick={handleHighToLowPrice} />
                            HIGH TO LOW
                        </li>
                        <li>
                            <input type="radio" name="filter" onClick={handleLowToHighPrice} />
                            LOW TO HIGH
                        </li>
                        <p>RATING</p>
                        <li>
                            <input type="radio" name="filter" onClick={handleHighToLowRating} />
                            HIGH TO LOW
                        </li>
                        <li>
                            <input type="radio" name="filter" onClick={handleLowToHighRating} />
                            LOW TO HIGH
                        </li>
                    </ul>
                </div>
                <div className={Styles.displayProducts}>
                    <div className={Styles.filterOptions}>
                        <select>
                            <option>Size</option>
                            <option>Small</option>
                            <option>Medium</option>
                            <option>Large</option>
                            <option>XL</option>
                        </select>
                        <p>Sort by : Recommanded</p>
                        <div className={Styles.mobileFilter}>
                            <button onClick={() => setIsPopup(true)}>Filter</button>
                        </div>
                    </div>
                    <div className={Styles.productList}>
                        {
                            isCurrentState.map((item) => {
                                return <Product
                                    key={item._id}
                                    _id={item._id}
                                    image={item.image}
                                    name={item.name}
                                    brandName={item.brandName}
                                    rating={item.rating}
                                    prize={item.price}
                                    oldPrize={item.oldPrice}
                                    offer={item.offer}
                                />
                            })
                        }
                    </div>
                </div>
            </div>

            {/* Popup */}
            <div className={isPopup ? Styles.popupOn : Styles.popupOff} onClick={() => setIsPopup(false)}>
                <FilterPopUp />
            </div>
        </ >
    )
}


