import "animate.css";

function Fifth() {
  return (
    <section className="fifth-section">
      <div className="fifth-section-container">
        <div className="fifth-section-box">
          <div className="fifth-section-heading animate__animated animate__backInUp">
            <h2 className="fifth-section-title">Investor Relations</h2>
            <h3 className="fifth-section-subtitle">
              We recognize how important it is to invest in the future of our
              planet
            </h3>
          </div>
          <div className="fifth-section-body animate__animated animate__bounceInLeft">
            <p className="fifth-section-text">
              To find the best investment possibilities in the renewable energy
              sector, we use data-driven insights. Our strategy is in line with
              the worldwide call to move away from fossil fuels and towards
              sustainable energy sources.
            </p>
            <div className="fifth-section-cards">
              <div className="img-box">
                <img src="19.jpg" alt="int-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Fifth;
