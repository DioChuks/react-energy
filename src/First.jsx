import "animate.css";
import MobileNav from "./MobileNav";
import Navigation from "./Navigation";
import Button from "./Button";

function First() {
  return (
    <section className="first-section">
      <div
        className="first-section-container"
      >
        <header className="first-section-header">
          <h3 className="logo animate__animated animate__bounceInUp">Ecohavest</h3>
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
                  <span>Future Solutions</span> <br /> For Smart Electric
                  Vehicle Charging!
                </span>
              </div>
            </div>
            <div className="industrium-content-wrapper-2">
              <div className="content-slider-item-text animate__animated animate__lightSpeedInRight">
                <p>
                  Our residential, commercial, and fast charging stations are
                  widely compatible, built on open standards, and designed to be
                  accessible for everyone.
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
