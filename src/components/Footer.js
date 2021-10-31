import React from 'react'
import "./Footer.css"
import img1 from "../images/gplay.png"
import img2 from "../images/App store.png"
import img3 from "../images/ori.png"
import img4 from "../images/30.png"



export default function Footer() {
    return (
        <div className="container">


            <div className="  row">
                <div className="col">
                    <small><b>ONLINE SHOPPING</b></small>
                    <p className="text-capitalize text-muted mt-3">men</p>
                    <p className="text-capitalize text-muted name">women</p>
                    <p className="text-capitalize text-muted name ">kids</p>
                    <p className="text-capitalize text-muted name">Home & living</p>
                    <p className="text-capitalize text-muted name">beauty</p>
                    <p className="text-capitalize text-muted name">gift cards</p>
                    <p className="text-capitalize text-muted name">myntre insider<span className="badge badge-danger">new</span></p>
                </div>
                <div className="col ">
                    <small><b>Useful links</b></small>
                    <p className="text-capitalize   text-muted  mt-3 ">contact us</p>
                    <p className="text-capitalize text-muted name">FAQ</p>
                    <p className="text-capitalize text-muted name">T & C</p>
                    <p className="text-capitalize text-muted name">terms of use</p>
                    <p className="text-capitalize text-muted name">track orders</p>
                    <p className="text-capitalize text-muted name">shipping</p>
                    <p className="text-capitalize text-muted name">cancellation</p>
                    <p className="text-capitalize text-muted name">returns</p>
                    <p className="text-capitalize text-muted name">whitehat</p>
                    <p className="text-capitalize text-muted name">blog</p>
                    <p className="text-capitalize text-muted name">careers</p>
                    <p className="text-capitalize text-muted name">private polisy</p>
                    <p className="text-capitalize text-muted name">site msp</p>

                </div>
                <div className="col">
                    <small><b>EXPERIENCE MYNTRA APP ON MOBILE</b></small>
                    <div className="img mt-3">
                        <img src={img1} alt="img"></img>
                        <img src={img2} alt="img"></img>


                    </div>

                </div>
                <div className="col">
                    <div className="img1 d-flex">
                        <img src={img3} alt="img"></img>
                        <span className="ml-4"> <b className="text-dark">100% ORIGINAL</b>guaramtee for all products at myntra.com</span>
                    </div>
                    <div className="img1 d-flex mt-4">
                        <img src={img4} alt="img"></img>
                        <span className="ml-4"><b> Return within 30days</b> of recieving your order</span>
                    </div>

                </div>

            </div>
        </div>

    )
}
