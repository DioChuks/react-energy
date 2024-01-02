import "animate.css";
import { SunIcon } from "./template/SunIcon";
import Card from "./Card";

function Third() {
  return (
    <section className="third-section">
      <div className="third-section-container">
        <div className="third-section-box">
          <div className="third-section-heading animate__animated animate__backInUp">
            <h2 className="third-section-title">Inventory <SunIcon name="spinning"/></h2>
          </div>
          <div className="third-section-body animate__animated animate__bounceInLeft">
            <p className="third-section-text">
              At the forefront of the green energy revolution stands Quart
              Energy, a company deeply committed to sustainable power
              generation. Within our comprehensive portfolio, wind energy
              occupies a prominent position. Quart Energy expertise in wind
              power reflects not only our dedication to environmental
              responsibility but also our innovative approach to clean and
              renewable electricity generation.
            </p>
            <div className="third-section-cards">
              <Card image="https://bg-so-1.zippyimage.com/2024/01/01/d884f75543b72d0056d9ca13019cedd2.jpg" title="EV Charging Stations" />
              <Card image="https://bg-so-1.zippyimage.com/2024/01/01/38fb79dbe572a6696c393a6860847696.jpg" title="Wind Energy" />
              <Card image="03.jpg" title="Lorem Ipsum"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Third;
