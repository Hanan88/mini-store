import React from "react";

const Sidebar = () => {
  return (
    <>
      <h2 className="ps-3 pb-2">Categories</h2>
      <div>
        <ul className="list-group">
          <li className="list-group-item active" aria-current="true">
            An active item
          </li>
          <li className="list-group-item">Laptops</li>
          <li className="list-group-item">Mobiles</li>
          <li className="list-group-item">Fashions</li>
          <li className="list-group-item">Accessories</li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
