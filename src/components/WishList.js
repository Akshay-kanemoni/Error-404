import React from 'react'
import Styles from './Product.module.css'
import { WishlistProduct } from './Product'
import Image1 from '../images/wish_empty_cart.gif'
import { Link } from 'react-router-dom'

export default function WishList() {

    let length = 0;

    return (
        <div>
            {
                length === 0 ?
                    <div className={Styles.emptyBasket}>
                        <div className={Styles.emptyWish}>
                            <span>YOUR WISHLIST IS EMPTY</span>
                            <p>Add items that you like to your wishlist. Review then anytime and easily move them to the bag</p>
                            <div className={Styles.wish_img_container}>
                                <img src={Image1} alt="wishlist_basket" />
                            </div>
                            <Link to='/womens'><button>CONTINUE SHOPPING</button></Link>
                        </div>
                    </div>
                    :
                    <div className={Styles.wishList}>
                        <div className={Styles.wish_items}>
                            <div className={Styles.wish_postalcode}>
                                <span>Check Delivery time and Services</span>
                                <button>Enter Pin Code</button>
                            </div>
                            <div className={Styles.wish_listProducts}>
                                <div className={Styles.wish_Itemslength}>
                                    <span>[ 0 ] Items are Available</span>
                                </div>
                                <div className={Styles.wish_product}>
                                    <WishlistProduct />
                                </div>
                            </div>
                        </div>
                        <div className={Styles.wish_billSystem}>
                            <p>[ 0 ] Items are Available</p>
                            <div className={Styles.bill}>
                                <div className={Styles.tableBill}>
                                    <span>Item Name</span>
                                    <span>Price</span>
                                </div>
                                <div className={Styles.wish_prices}>
                                    <span className={Styles.billTitle}>New Item I adadh adadad adadada a addk,ak a d ad</span>
                                    <span>₹ 0</span>
                                </div>
                                <div className={Styles.wish_totalPrice}>
                                    <span>Total Price</span>
                                    <span>₹ 0</span>
                                </div>
                                <div className={Styles.orderBtn}>
                                    <button>Place Order</button>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}
