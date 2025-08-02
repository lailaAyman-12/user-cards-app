import { Link } from "react-router-dom";

function Header() {
  return (
    <header
      style={{
        background: "#000",
        padding: "1rem",
        color: "#fff",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h2>Laila Ayman</h2>
      <nav>
        <Link to="/" style={linkStyle}>
          Home
        </Link>
        <Link to="/users" style={linkStyle}>
          Users
        </Link>
        <Link to="/contact" style={linkStyle}>
          Contact
        </Link>
      </nav>
    </header>
  );
}

const linkStyle = {
  margin: "0 10px",
  padding: "6px 12px",
  border: "1px solid #33f",
  borderRadius: "10px",
  color: "#fff",
  textDecoration: "none",
};

export default Header;
