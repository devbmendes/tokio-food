import { Link } from 'react-router-dom'
import logo from './../assets/images/tokyofood.png'
import './../assets/styles/footer.css'
export default function Footer() {
    return (
        <>
            <footer className='mt-5'>
                <div className="container">
                    <div className="row">
                        <div className="col text-center footer-content">
                            <img src={logo} alt="" height='150' width='150' />
                            <p>Tokio Food Restaurant & Fine dining, Porto</p>
                            <p>10013 Porto City, 914-309-7030, reservations@tokiofood.com</p>
                            <p>Aberto : 9h - Fechado : 23h</p>
                            <div className="social-media mb-4">
                                <Link className='link-media' to='https://www.facebook.com/' target='_blank'><i className="bi bi-facebook"></i></Link>
                                <Link className='link-media' to='https://www.instagram.com/' target='_blank'><i className="bi bi-instagram"></i></Link>

                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}