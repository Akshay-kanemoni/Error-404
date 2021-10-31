import React, { useState } from 'react';
import Styles from './Product.module.css';
import StarIcon from '@material-ui/icons/Star';

export function Product(props) {

    let { _id, image, name, brandName, rating, prize, oldPrize, offer } = props;

    let [isEnable, setIsEnable] = useState(false);

    let [isEnableButton, setIsEnableButton] = useState(true);
    let [isEnableWish, setIsEnableWish] = useState(true);

    return <div className={Styles.product}>
        <div className={Styles.image_container}>
            <img src={image} alt={_id} onMouseEnter={() => setIsEnable(true)} onMouseLeave={() => setIsEnable(false)} />
        </div>
        <div className={Styles.ProductInfo}>
            <div className={isEnable ? Styles.infoOff : Styles.info}>
                <b>{brandName}</b>
                <p>{name}</p>
                <div className={Styles.ratings}>
                    <StarIcon className={Styles.StarIcon} />
                    <span>{rating}</span>
                </div>
            </div>
            <div className={isEnable ? Styles.product_btnOn : Styles.product_btn} onMouseEnter={() => setIsEnable(true)} onMouseLeave={() => setIsEnable(false)}>
                {
                    isEnableButton ? <button className={Styles.card_btn} onClick={() => setIsEnableButton(false)}>Add to Cart</button> :
                        <button className={Styles.added_Cart}>Added To Cart</button>
                }
                {
                    isEnableWish ? <button className={Styles.wish_btn} onClick={() => setIsEnableWish(false)}>Wish List</button> :
                        <button className={Styles.added_Cart}>Added To Wish</button>
                }
            </div>
        </div>
        <div className={Styles.product_prize}>
            <p>Rs.{prize} _<del>Rs.{oldPrize}</del> <span>( {offer}% Off )</span></p>
        </div>
    </div>;
}
