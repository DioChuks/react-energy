import Card from "../../../components/Card";

function Inventory() {
  return (
    <div className="inventory-section">
      <div className="inventory-box">
        <div className="inventory-heading">
          <h2 className="inventory-title">Inventory</h2>
          <p className="inventory-text">Here are some of our latest stack</p>
        </div>
        <div className="inventory-cards">
          <Card
            image="https://bg-so-1.zippyimage.com/2024/01/03/90960400a057911cb2d768767260dfc4.jpg"
            title="Solar Panels"
          />
          <Card
            image="https://bg-so-1.zippyimage.com/2024/01/03/ba7d070de3650323a7716fb10fca5bca.jpg"
            title="Solar Roofing Tiles"
          />
          <Card
            image="https://bg-so-1.zippyimage.com/2024/01/03/1efa602d7a0b5d23d20500e2aca3bd5a.jpg"
            title="Solar Cropping"
          />
        </div>
      </div>
    </div>
  );
}

export default Inventory;
