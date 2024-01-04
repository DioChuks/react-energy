import "animate.css";
import MobileNav from "./MobileNav";
import Navigation from "./Navigation";
import Button from "./Button";

function First() {
  return (
    <section className="first-section">
      <div className="first-section-container">
        <header className="first-section-header">
          <img src="1704367523369xp3vn4hz-removebg-preview.png" alt="logo" className="logo animate__animated animate__bounceInUp" />
          {/* mobile view */}
          <div className="fs-nav-mobile" id="fsNavMobile">
            <MobileNav />
          </div>
          {/* end of mobile view */}
          <Navigation />
        </header>
        {/* <!-- first-section content --> */}
        <div className="first-section-content">
          <div className="slide-content-column">
            <div className="industrium-content-wrapper-1">
              <div className="industrium-heading content-slider-item-heading animate__animated animate__backInUp">
                <span className="industrium-heading-content">
                  <span>UNVEIL THE FUTURE OF SOLAR ENERGY</span>
                </span>
              </div>
            </div>
            <div className="industrium-content-wrapper-2">
              <div className="content-slider-item-text animate__animated animate__lightSpeedInRight">
                <p>
                  We are dedicated to the design, installation, and integration
                  of <br />
                  cutting-edge solar panels and energy solutions. Our goal is to
                  make every ray of sunshine count, powering your life
                  sustainably, efficiently, and economically.&nbsp;
                </p>
              </div>
            </div>
            <div className="industrium-content-wrapper-3">
              <div className="content-slider-item-buttons animate__animated animate__fadeInRight">
                <Button name="Explore More" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default First;
