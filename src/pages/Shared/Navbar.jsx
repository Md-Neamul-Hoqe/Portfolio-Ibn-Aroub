import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { AuthContext } from "../../Auth/AuthProvider";

const Navbar = () => {
  const location = useLocation();
  const { maxWidth } = useContext(AuthContext);

  const NavLinks = (
    <>
      <li>
        <HashLink
          className={
            location?.hash === "#work" ? "text-main font-semibold" : "text-nav"
          }
          smooth
          to="#my-work">
          work
        </HashLink>
      </li>
      <li>
        <HashLink
          className={
            location?.hash === "#services"
              ? "text-main font-semibold"
              : "text-nav"
          }
          smooth
          to="#services">
          services
        </HashLink>
      </li>
      <li>
        <HashLink
          className={
            location?.hash === "#contact-me"
              ? "text-main font-semibold"
              : "text-nav"
          }
          smooth
          to="#contact-me">
          contact me
        </HashLink>
      </li>
    </>
  );
  return (
    <>
      <div className={`navbar px-0 text-nav sticky py-5 ${maxWidth}`}>
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
              {NavLinks}
            </ul>
          </div>
          <Link to="/" className="text-xl flex flex-col">
            <span className="uppercase text-3xl tracking-[0.3em] text-main">
              Ibn Aroub
            </span>
            <span className="titling-caps uppercase text-xs italic tracking-[0.4em]">
              MERN Stack Developer
            </span>
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl">{NavLinks}</ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
