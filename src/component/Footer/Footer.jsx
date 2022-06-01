import React from 'react'
import fb from '../../assets/images/icon/icon_facebook.png'
import ig from '../../assets/images/icon/icon_instagram.png'
import twt from '../../assets/images/icon/icon_twitter.png'
import mail from '../../assets/images/icon/icon_mail.png'
import twitch from '../../assets/images/icon/icon_twitch.png'
import logo from '../../assets/images/logo.png'

function Footer(){
    return(
        <footer class="footer" id="footer">
        <div class="container">
          <div class="row">
            <div class="col-md-3 col-sm-6 col-xs-6 address-list">
              <ul>
                <li>Jalan Suroyo No. 161 Mayangan <br/> Kota Probolonggo 672000</li>
                <li>binarcarrental@gmail.com</li>
                <li>081-233-334-808</li>
              </ul>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-6 nav-list">
              <ul>
                <li><a href="#services">Our Services</a></li>
                <li><a href="#why-us">Why Us</a></li>
                <li><a href="#testimonial">Testimonial</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-12 sosmed-list">
              <p>Connect with us</p>
              <a href="#"><i><img src={fb}/></i></a>
              <a href="#"><i><img src={ig}/></i></a>
              <a href="#"><i><img src={twt}/></i></a>
              <a href="#"><i><img src={mail}/></i></a>
              <a href="#"><i><img src={twitch}/></i></a>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-12 copyright">
              <p>Copyright Binar 2022</p>
              <img src={logo}/>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer