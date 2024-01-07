import "./Dashboard.css";
import logo from "../../assets/logo.png";
import { AccountIcon } from "../../icons/AccountIcon";
import Footer from "../../components/Footer";
import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <section className="dashboard-section">
        <div className="dashboard-container">
          <header className="dashboard-header">
            <img src={logo} alt="logo" className="logo" />
            <nav className="dashboard-nav">
              <Link className="d-nav-item" to="/partner/user">
                Dashboard
              </Link>
              <Link className="d-nav-item" to="/partner/inventory">
                Inventory
              </Link>
              <Link className="d-nav-item" to="/partner/kyc">
                KYC
              </Link>
              <Link className="d-nav-item" to="/partner/invest">
                Invest
              </Link>
              <Link className="d-nav-item" to="/partner/transactions">
                Transactions
              </Link>
              <Link className="d-nav-item" to="/partner/profile">
                Profile
              </Link>
            </nav>
            <div className="static-icon">
              <AccountIcon />
            </div>
          </header>
          <Outlet />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Dashboard;
