import React from "react";
import "./Footer.css";
import footer from "../../assets/img/footer.png";
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_warpper">
          <div className="footer-box">
            <div className="logo">
              <div className="logo-img">
                <img src={footer} alt="" />
              </div>
              <h2> Hight tech</h2>
            </div>
            <p>jshaigdy aywigdyi akugygwakhijlho uhg97huo flkamwejp</p>
          </div>
          <div className="footer-box">
            <h4 className="footer-title"> company</h4>
            <ul className="footer_links">
              <li>
                <a href="">our programs</a>
              </li>
              <li>
                <a href="">our plan</a>
              </li>
              <li>
                <a href="">our member</a>
              </li>
            </ul>
          </div>
          <div className="footer-box">
            <h4 className="footer-title"> Quick link</h4>
            <ul className="footer_links">
              <li>
                <a href="">about</a>
              </li>
              <li>
                <a href="">contact</a>
              </li>
              <li>
                {" "}
                <a href="">support</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
