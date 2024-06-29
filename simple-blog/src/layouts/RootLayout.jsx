import { NavLink, Outlet } from "react-router-dom";
import "../styles/index.css";

function RootLayout() {
  const getActive = ({ isActive, isPending }) =>
    isActive ? "active" : isPending ? "pending" : "";

  return (
    <>
      <nav>
        <NavLink style={{ marginRight: "5px" }} className={getActive} to="/">
          Home
        </NavLink>
        |
        <NavLink
          style={{ marginLeft: "5px", marginRight: "5px" }}
          className={getActive}
          to="/blog"
        >
          Blog
        </NavLink>
        |
        <NavLink
          style={{ marginLeft: "5px" }}
          className={getActive}
          to="/about"
        >
          About
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default RootLayout;
