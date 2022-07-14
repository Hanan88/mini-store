import React from "react";
import { FaOpencart, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="d-flex justify-content-around pt-2">
      <div>
        <FaOpencart className="fs-1" />
      </div>

      <div>
        <ul className="list-unstyled d-flex justify-content-between">
          <li className="pe-4">
            <Link to="/" className="text-decoration-none text-dark">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-decoration-none text-dark">
              ABOUT
            </Link>
          </li>
        </ul>
      </div>

      <div className="d-flex justify-content-between align-items-center w-210">
        <div className="dropdown float-start">
          <button
            className="btn btn-outline-dark dropdown-toggle w-160"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            ACCOUNT
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <Link className="dropdown-item" to="/signin">
                Sign in
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/signup">
                Sign up
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <FaShoppingCart className="fs-2" />
        </div>
      </div>
    </div>
  );
};

export default Header;
