import React, { useState } from 'react';
import Styles from './Product.module.css';
import StarIcon from '@material-ui/icons/Star';

export function Product(props) {

    let { _id, image, name, brandName, rating, prize, oldPrize, offer } = props;

    let [isEnable, setIsEnable] = useState(false);

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
                <button className={Styles.card_btn}>Add to Cart</button>
                <button className={Styles.wish_btn}>Wish List</button>
            </div>
        </div>
        <div className={Styles.product_prize}>
            <p>Rs.{prize} _<del>Rs.{oldPrize}</del> <span>( {offer}% Off )</span></p>
        </div>
    </div>;
}
