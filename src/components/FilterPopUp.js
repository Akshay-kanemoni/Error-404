import React from 'react';
import Styles from './Product.module.css';

export function FilterPopUp() {

    return (
        <div className={Styles.filterPopup}>
            <div className={Styles.popup_title}>
                <p>Filter</p>
                <span>X</span>
            </div>
            <ul>
                <p>PRICE</p>
                <li>
                    <input type="radio" name="filter" />
                    HIGH TO LOW
                </li>
                <li>
                    <input type="radio" name="filter" />
                    LOW TO HIGH
                </li>
                <p>RATING</p>
                <li>
                    <input type="radio" name="filter" />
                    HIGH TO LOW
                </li>
                <li>
                    <input type="radio" name="filter" />
                    LOW TO HIGH
                </li>
            </ul>
        </div>
    );
}
