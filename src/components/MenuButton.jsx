import PropTypes from 'prop-types'

function MenuButton({ isActive, onClick }) {
  return (
    <div className={`fs-m-btn ${isActive ? "active" : ""}`} onClick={onClick} id="fsMenuBtn">
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

MenuButton.propTypes = {
    isActive: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default MenuButton;
