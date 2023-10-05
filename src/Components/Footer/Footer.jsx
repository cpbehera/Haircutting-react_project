import React from 'react';
import logo from '../../../public/logo.png';
import './Footer.css';

function Footer() {
    return (
        <div className='d-flex align-items-center justify-content-center flex-column text-center p-3 footer_wrapper'>
            <div>
                <div className='logo_wrapper d-flex align-items-center justify-content-center'>
                    <img src={logo} alt="logo" />
                </div>
                <p>Hair Cutting is an online platform designed to connect customers with a wide range of salons and beauty services, making it convenient for users to book appointments and access various beauty treatments in one place. It offers a user-friendly interface that streamlines the process of discovering, booking, and managing salon services.</p>
            </div>
            <div className='d-flex flex-column my-4'>
                <a href="#">Luxury Spa</a>
                <a href="#">Stone Therapy</a>
                <a href="#">Aroma Therapy</a>
                <a href="#">Skin Treatment</a>
            </div>
            <div className='d-flex flex-column'>
                <a href="#">Our Story</a>
                <a href="#">Experts</a>
                <a href="#">Pricing</a>
                <a href="#">Get In Touch</a>
            </div>
        </div>
    )
}

export default Footer;
