import "animate.css";
import { SunIcon } from "../icons/SunIcon";
import Card from "../components/Card";

function Third() {
  return (
    <section className="third-section" id="inventory">
      <div className="third-section-container">
        <div className="third-section-box">
          <div className="third-section-heading animate__animated animate__backInUp">
            <h2 className="third-section-title">Inventory <SunIcon name="spinning"/></h2>
          </div>
          <div className="third-section-body animate__animated animate__bounceInLeft">
            <p className="third-section-text">
              At the forefront of the green energy revolution stands Ecohavest
              Energy, a company deeply committed to sustainable power
              generation. Within our comprehensive portfolio, Solar energy
              occupies a prominent position. Ecohavest expertise in solar
              power reflects not only our dedication to environmental
              responsibility but also our innovative approach to clean and
              renewable electricity generation.
            </p>
            <div className="third-section-cards">
              <Card image="https://bg-so-1.zippyimage.com/2024/01/03/90960400a057911cb2d768767260dfc4.jpg" title="Solar Panels" />
              <Card image="https://bg-so-1.zippyimage.com/2024/01/03/ba7d070de3650323a7716fb10fca5bca.jpg" title="Solar Roofing Tiles" />
              <Card image="https://bg-so-1.zippyimage.com/2024/01/03/1efa602d7a0b5d23d20500e2aca3bd5a.jpg" title="Solar Cropping" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Third;
