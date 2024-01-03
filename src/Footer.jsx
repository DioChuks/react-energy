
function Footer() {
  return (
    <section className="footer-section">
      <div className="footer-section-container">
        <div className="footer-section-box">
          <div className="footer-section-heading animate__animated animate__backInUp">
            <h2 className="footer-section-title">Ecohavest</h2>
            <h3 className="footer-section-subtitle">
              Empowering a Sustainable Tomorrow: Clean Energy Solutions for a
              Greener World
            </h3>
          </div>
          <div className="footer-section-body animate__animated animate__bounceInLeft">
            <form className="footer-section-form">
              <label htmlFor="news">Newsletter</label>
              <div className="news-input">
                <input className="input" type="email" name="newsEmail" id="news" />
                <input className="btn-news" type="submit" value="subscribe" />
              </div>
            </form>
            <hr />
            <h5>Copyright &#8167; 2019 - {new Date().getFullYear()} Ecohavest. All rights reserved.</h5>
            <span>
              <a href="#">Terms</a> | <a href="#">Services</a> |{" "}
              <a href="#">Privacy</a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
