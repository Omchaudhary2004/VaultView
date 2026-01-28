import { GiAbstract058 } from "react-icons/gi";
import "./navbars.css";

function Nav_bar() {
  return (
    <nav className="navbar">
      <div className="brand">
        <GiAbstract058 className="logo" />
        <span className="brand-name">VaultView</span>
      </div>
      <hr />
    </nav>
  );
}

export default Nav_bar;
