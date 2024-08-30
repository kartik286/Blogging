import React from 'react';
import "./footer.css";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai';
// import axios from "axios";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">MERN Stack Bloging Web Page</h1>

           

            <div className="footer__social">
                <a href="https://www.instagram.com/_acharys_/" className="footer__social-link" target='_blank'  rel='noreferrer'>
                    <i class=""><AiFillInstagram /></i>
                </a>
                <a href="https://www.linkedin.com/in/karthik-t-g-953668206/" className="footer__social-link" target='_blank' rel='noreferrer'>
                    <i class=""><AiFillLinkedin /></i>
                </a>
                <a href="https://www.github.com/" className="footer__social-link" target='_blank' rel='noreferrer'>
                    <i class=""><AiFillGithub /></i>
                </a>
                <a href="https://www.twitter.com/" className="footer__social-link" target='_blank' rel="noreferrer">
                    <i class=""><AiFillTwitterCircle /></i>
                </a>
                <a href="https://www.youtube.com/" className="footer__social-link" target='_blank' rel="noreferrer">
                    <i class=""><AiFillYoutube /></i>
                </a>
            </div>

            <span className="footer__copy">
                &#169;  All rights reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer