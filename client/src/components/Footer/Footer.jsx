import './footer.scss'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div class='footer_top'>
          <Link className='footer__logo' to='/'>
            GOOD-FOOD 🍎🥝
          </Link>
        </div>

        <div className='footer__content'>
          <address className='footer__address'>
            <div>Address: 60-49 Road 11378 New York</div>
            <div>Phone: +65 11.188.888</div>
            <div>Email: hello@colorlib.com</div>
          </address>
          <div className='footer_menu'>
            <a className='footer__link' href='#'>
              SHOP
            </a>
            <a className='footer__link' href='#'>
              BLOG
            </a>
            <a className='footer__link' href='#'>
              CONTACT
            </a>
          </div>
          <div className='footer_subscribe'>
            <h2 className='footer__top__right__heading'>
              Sign up for our newsletter
            </h2>
            <p className='footer__top__right__subtitle'>
              Get e-mail updates about our latest Shop and special offers.
            </p>
            <form action='#' className='footer__top__right__form'>
              <input
                type='email'
                className='footer__top__right__input'
                placeholder='Enter Your Email Address'
              />
              <button type='submit' className='footer__top__right__btn'>
                Subscribe
              </button>
            </form>
            <address className='social_buttons_box'>
              <div className='social_button'>
                <a href='#' className='social_link'>
                  <i className='fab fa-facebook-f'></i>
                </a>
              </div>
              <div className='social_button'>
                <a href='#' className='social_link'>
                  <i className='fa-brands fa-whatsapp'></i>
                </a>
              </div>
              <div className='social_button'>
                <a href='#' className='social_link'>
                  <i class='fa-brands fa-linkedin-in'></i>
                </a>
              </div>
              <div className='social_button'>
                <a href='#' className='social_link'>
                  <i className='fab fa-twitter'></i>
                </a>
              </div>
            </address>
          </div>
        </div>

        <div class='footer_bottom container'>
          <p class='copyright'>
            Copyright &copy; 2021 All rights reserved | This template is made
            with 💚 by LOGO.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
