import React from 'react'
import "./Login.css"
import img5 from "../images/login.webp"

export default function Login() {
    return (
        <div className="Log">

        <div className="login">
            <img src={img5} alt="img"></img>
            <form className="form d-block">
                <div>
                <label className="mt-3"><b className='h4'>Login </b>or<b className="h4">  Signup</b></label>

                 </div>
                 <div>
                <input className="mt-3" type="number" placeholder="  +91   |   Mobile Number *"></input>

                 </div>
                 <p className="mt-3">By continuing , i agree to the <a href="#" className="text-danger"><b>Terms of Use</b></a> & <a href="#" className="text-danger"><b>Privacy Policy</b></a></p>
                 <button className="btn ">CONTINUE</button>
                 <small className="mt-4">Have trouble logging in ? <b ><a href="#" className="text-danger">Get help</a></b></small>
            </form>
            
        </div>
        </div>

    )
}
