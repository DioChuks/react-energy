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
              <Card image="https://quaintenergy.com/maduhih/uploads/2023/11/quaintenergy-1120.jpg" title="EV Charging Stations" />
              <Card image="https://quaintenergy.com/maduhih/uploads/2023/11/023f-quainddt-scaled.jpg" title="Wind Energy" />
              <Card image="03.jpg" title="Lorem Ipsum"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Third;
