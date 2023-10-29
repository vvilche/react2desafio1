import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <p className="copyright">Copyright &copy; 2023 Happy Cake</p>
          </div>
          <div className="col-md-4">
            <ul className="social-links">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <p className="about">
              Happy Cake es una empresa dedicada a la venta de pasteles. Ofrecemos una amplia variedad de pasteles para todas las ocasiones, desde cumpleaños hasta bodas.
            </p>
            <p className="contact">
              <a href="#">Contactanos</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

