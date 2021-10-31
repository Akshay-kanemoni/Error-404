import React from 'react'
import "./Header.css"
import Logo from "../images/logo.png"
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
//import SearchOutlined from '@material-ui/icons/SearchOutlined';

export default function Header() {
    return (
        <div>
            <div className="main">
                <div className="logo">
                    <img src={Logo} alt="img1"></img>
                </div>
                <div className="categories">
                    <div className="categories_1 dropdown">Men
                        <div className="dropdown-content">
                            <div className="dropdown_category">
                                <div className="Header_column">
                                    <ul>
                                        <label>
                                            <strong>Top Wear</strong>
                                        </label>
                                        <li>T-Shirts</li>
                                        <li>casual Shirts</li>
                                        <li>Formal Shirts</li>
                                        <li>Sweat shirts</li>
                                        <li>Sweaters</li>
                                        <li>Jackets</li>
                                        <li>Blazzers & Coats</li>
                                        <li>Suits</li>
                                        <li>Rain Jackets</li>
                                    </ul>
                                    <ul>
                                        <label><strong>Indian & Festive Wear</strong></label>
                                        <li>Kurtas & Kurta Sets</li>
                                        <li>Sherwanis</li>
                                        <li>Nehru Jackets</li>
                                    </ul>
                                </div>
                                <div className="Header_column">    <ul>
                                    <label><strong>Bottom Wear</strong></label>
                                    <li>Jeans</li>
                                    <li>casual trousers</li>
                                    <li>Formal trousers</li>
                                    <li> shorts</li>
                                    <li>Track Pants</li>
                                </ul>
                                    <ul>
                                        <label><strong>InnerWear & Aleep Wear</strong></label>
                                        <li>Briefs & Trunks</li>
                                        <li>Boxers</li>
                                        <li>Vests</li>
                                        <li>Sleepwear&Loungewear</li>
                                        <li>Thermals</li>
                                    </ul></div>
                                <div className="Header_column">
                                    <ul>
                                        <label><strong>Foot Wear</strong></label>
                                        <li>Flip FLop</li>
                                        <li>casual Shoes</li>
                                        <li>Formal Shoes</li>
                                        <li> Sneakers</li>
                                        <li>Socks</li>
                                        <li>Sandals & Floaters</li>
                                    </ul>
                                    <ul>
                                        <label><strong>Personal Care & Grooming</strong></label>
                                        <label>Sunglasses & Frames</label>
                                        <label>Watches</label>
                                    </ul>
                                </div>
                                <div className="Header_column">
                                    <ul>
                                        <label><strong>Sports  & Active Wear</strong></label>
                                        <li>Sports Shoes</li>
                                        <li>Sports Sandals</li>
                                        <li>Active T-shirts</li>
                                        <li>Swimmmers</li>
                                        <li>Trackers</li>
                                        <li>Track suits</li>
                                    </ul>
                                    <ul>
                                        <label><strong>Gadgets</strong></label>
                                        <li>Smart Wearables</li>
                                        <li>Fitness gadgets</li>
                                        <li>Headphones</li>
                                        <li>Speakers</li>
                                    </ul>
                                </div>
                                <div className="Header_column">
                                    <ul>
                                        <label><strong>Bottom Wear</strong></label>
                                        <li>Jeans</li>
                                        <li>casual trousers</li>
                                        <li>Formal trousers</li>
                                        <li> shorts</li>
                                        <li>Track Pants</li>
                                    </ul>
                                    <ul>
                                        <label><strong>InnerWear & Aleep Wea</strong></label>
                                        <li>Briefs & Trunks</li>
                                        <li>Boxers</li>
                                        <li>Vests</li>
                                        <li>Sleepwear&Loungewear</li>
                                        <li>Thermals</li>
                                    </ul>
                                </div>
                                <div className="Header_column">
                                    <ul>
                                        <label><strong>fashion Accessories</strong></label>
                                        <li>Wallets</li>
                                        <li>Belts</li>
                                        <li>Perfumes </li>
                                        <li>Trimmers</li>
                                        <li>Caps</li>
                                        <li>Phone cases</li>
                                        <li>Deodrants</li>
                                        <li>ties</li>
                                        <li>Mufflers</li>
                                        <li>Scarves</li>

                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="categories dropdown1">Women
                        <div className="dropdown-content1">
                            <div className="dropdown_category1">
                                <div className="Header_column">
                                    <ul>
                                        <label>
                                            <strong>Top Wear</strong>
                                        </label>
                                        <li>Kurtas</li>
                                        <li>Kurtas tunics & Tops</li>
                                        <li>Ethinic wear</li>
                                        <li>Legging,Salwar</li>
                                        <li>Sarees</li>
                                        <li>Dress Materials</li>
                                        <li>Lehanga Cholis</li>
                                        <li>Suits</li>
                                        <li> Jackets</li>
                                    </ul>
                                    <ul>
                                        <label><strong>Indian & Festive Wear</strong></label>
                                        <li>Kurtas & Kurta Sets</li>
                                        <li>shrugs</li>
                                        <li>Nehru Jackets</li>
                                    </ul>
                                </div>
                                <div className="Header_column">    <ul>
                                    <label><strong>Bottom Wear</strong></label>
                                    <li>Jeans</li>
                                    <li>casual trousers</li>
                                    <li>Formal trousers</li>
                                    <li> shorts</li>
                                    <li>Track Pants</li>
                                </ul>
                                    <ul>
                                        <label><strong>InnerWear & Aleep Wear</strong></label>
                                        <li>Briefs & Trunks</li>
                                        <li>Boxers</li>
                                        <li>Vests</li>
                                        <li>Sleepwear&Loungewear</li>
                                        <li>Thermals</li>
                                    </ul></div>
                                <div className="Header_column">
                                    <ul>
                                        <label><strong>Foot Wear</strong></label>
                                        <li>Flip FLop</li>
                                        <li>casual Shoes</li>
                                        <li>Formal Shoes</li>
                                        <li> Sneakers</li>
                                        <li>Socks</li>
                                        <li>Sandals & Floaters</li>
                                    </ul>
                                    <ul>
                                        <label><strong>Personal Care & Grooming</strong></label>
                                        <label>Sunglasses & Frames</label>
                                        <label>Watches</label>
                                    </ul>
                                </div>
                                <div className="Header_column">
                                    <ul>
                                        <label><strong>Sports  & Active Wear</strong></label>
                                        <li>Sports Shoes</li>
                                        <li>Sports Sandals</li>
                                        <li>Active T-shirts</li>
                                        <li>Swimmmers</li>
                                        <li>Trackers</li>
                                        <li>Track suits</li>
                                    </ul>
                                    <ul>
                                        <label><strong>Gadgets</strong></label>
                                        <li>Smart Wearables</li>
                                        <li>Fitness gadgets</li>
                                        <li>Headphones</li>
                                        <li>Speakers</li>
                                    </ul>
                                </div>
                                <div className="Header_column">
                                    <ul>
                                        <label><strong>Bottom Wear</strong></label>
                                        <li>Jeans</li>
                                        <li>casual trousers</li>
                                        <li>Formal trousers</li>
                                        <li> shorts</li>
                                        <li>Track Pants</li>
                                    </ul>
                                    <ul>
                                        <label><strong>InnerWear & Aleep Wea</strong></label>
                                        <li>Briefs & Trunks</li>
                                        <li>Boxers</li>
                                        <li>Vests</li>
                                        <li>Sleepwear&Loungewear</li>
                                        <li>Thermals</li>
                                    </ul>
                                </div>
                                <div className="Header_column">
                                    <ul>
                                        <label><strong>fashion Accessories</strong></label>
                                        <li>Wallets</li>
                                        <li>Belts</li>
                                        <li>Perfumes </li>
                                        <li>Trimmers</li>
                                        <li>Caps</li>
                                        <li>Phone cases</li>
                                        <li>Deodrants</li>
                                        <li>ties</li>
                                        <li>Mufflers</li>
                                        <li>Scarves</li>

                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="categories dropdown2">Kids
                        <div className="dropdown-content2">
                            <div className="dropdown_category1">
                                <div className="Header_column">
                                    <ul>
                                        <label>
                                            <strong>Top Wear</strong>
                                        </label>
                                        <li>T-Shirts</li>
                                        <li>casual Shirts</li>
                                        <li>Formal Shirts</li>
                                        <li>Sweat shirts</li>
                                        <li>Sweaters</li>
                                        <li>Jackets</li>
                                        <li>Blazzers & Coats</li>
                                        <li>Suits</li>
                                        <li>Rain Jackets</li>
                                    </ul>
                                    <ul>
                                        <label><strong>Indian & Festive Wear</strong></label>
                                        <li>Kurtas & Kurta Sets</li>
                                        <li>Sherwanis</li>
                                        <li>Nehru Jackets</li>
                                    </ul>
                                </div>
                                <div className="Header_column">    <ul>
                                    <label><strong>Bottom Wear</strong></label>
                                    <li>Jeans</li>
                                    <li>casual trousers</li>
                                    <li>Formal trousers</li>
                                    <li> shorts</li>
                                    <li>Track Pants</li>
                                </ul>
                                    <ul>
                                        <label><strong>InnerWear & Aleep Wear</strong></label>
                                        <li>Briefs & Trunks</li>
                                        <li>Boxers</li>
                                        <li>Vests</li>
                                        <li>Sleepwear&Loungewear</li>
                                        <li>Thermals</li>
                                    </ul></div>
                                <div className="Header_column">
                                    <ul>
                                        <label><strong>Foot Wear</strong></label>
                                        <li>Flip FLop</li>
                                        <li>casual Shoes</li>
                                        <li>Formal Shoes</li>
                                        <li> Sneakers</li>
                                        <li>Socks</li>
                                        <li>Sandals & Floaters</li>
                                    </ul>
                                    <ul>
                                        <label><strong>Personal Care & Grooming</strong></label>
                                        <label>Sunglasses & Frames</label>
                                        <label>Watches</label>
                                    </ul>
                                </div>
                                <div className="Header_column">
                                    <ul>
                                        <label><strong>Sports  & Active Wear</strong></label>
                                        <li>Sports Shoes</li>
                                        <li>Sports Sandals</li>
                                        <li>Active T-shirts</li>
                                        <li>Swimmmers</li>
                                        <li>Trackers</li>
                                        <li>Track suits</li>
                                    </ul>
                                    <ul>
                                        <label><strong>Gadgets</strong></label>
                                        <li>Smart Wearables</li>
                                        <li>Fitness gadgets</li>
                                        <li>Headphones</li>
                                        <li>Speakers</li>
                                    </ul>
                                </div>
                                <div className="Header_column">
                                    <ul>
                                        <label><strong>Bottom Wear</strong></label>
                                        <li>Jeans</li>
                                        <li>casual trousers</li>
                                        <li>Formal trousers</li>
                                        <li> shorts</li>
                                        <li>Track Pants</li>
                                    </ul>
                                    <ul>
                                        <label><strong>InnerWear & Aleep Wea</strong></label>
                                        <li>Briefs & Trunks</li>
                                        <li>Boxers</li>
                                        <li>Vests</li>
                                        <li>Sleepwear&Loungewear</li>
                                        <li>Thermals</li>
                                    </ul>
                                </div>
                                <div className="Header_column">
                                    <ul>
                                        <label><strong>fashion Accessories</strong></label>
                                        <li>Wallets</li>
                                        <li>Belts</li>
                                        <li>Perfumes </li>
                                        <li>Trimmers</li>
                                        <li>Caps</li>
                                        <li>Phone cases</li>
                                        <li>Deodrants</li>
                                        <li>ties</li>
                                        <li>Mufflers</li>
                                        <li>Scarves</li>

                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="categories dropdown3">Home&Living</div>
                    <div className="categories dropdown4">Beauty</div>
                </div>

                <div className="search_bar">
                    <input type='text' placeholder="Search" />
                </div>
                <div className="Mobile_cat">
                    <div>Men</div>
                    <div>Women</div>
                    <div>Kids</div>
                </div>
                <div className="profile header_icons">
                    <span ><AccountCircleOutlinedIcon className="icons"></AccountCircleOutlinedIcon></span>
                    <p className="font_profile dropdown2">profile
                        <div className="dropdown-content2">
                            <div className="dropdown_category3">
                                <div className="Header_column1">
                                    <ul>
                                        <label><strong>Welcome</strong></label>
                                        <li>To access account and manage orders</li>
                                        <br />
                                        <button><strong>LOGIN / SIGNUP</strong></button>
                                        <br />
                                        <li>Order</li>
                                        <li>Wishlist</li>
                                        <li>Gift card </li>
                                        <li>Contact Us</li>
                                        <hr />
                                        <li>Myntra Credit</li>
                                        <li>Coupons</li>
                                        <li>Saved card</li>
                                        <li>saved address</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </p>
                </div>
                <div className="wishlist header_icons">
                    <span><FavoriteBorderOutlinedIcon className="icons"></FavoriteBorderOutlinedIcon></span>
                    <p className="font_profile">Wish list</p>
                </div>
                <div className="bag header_icons">
                    <span><ShoppingBagOutlinedIcon className="icons"></ShoppingBagOutlinedIcon></span>
                    <p className="font_profile">Bag</p>
                </div>
            </div>
        </div>
    )
}
