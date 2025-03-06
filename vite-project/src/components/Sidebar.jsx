// import React from "react";
// //import { Nav } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// const NavBar = () =>

// const Sidebar = () => {
//   return (
//     <div className="d-flex flex-column p-3 bg-light vh-100" style={{ width: "250px" }}>
//       <h4 className="text-center">Admin Panel</h4>
//       <Nav className="flex-column">
//         <Nav.Link as={Link} to="/">Dashboard</Nav.Link>
//         <Nav.Link as={Link} to="/transactions">Transactions</Nav.Link>
//         <Nav.Link as={Link} to="/products">Products</Nav.Link>
//         <Nav.Link as={Link} to="/users">User & Merchant</Nav.Link>
//         <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
//         <Nav.Link as={Link} to="/reports">Reports & Analytics</Nav.Link>
//       </Nav>
//     </div>
//   );
// };

// export default Sidebar;
import React from "react";

import { Nav } from "react-bootstrap";

import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  return (
    <nav>
      {/* Add NavBar content here if needed */}
    </nav>
  );
};

const Sidebar = () => {
  return (
    <div className="d-flex flex-column p-3 bg-light vh-100" style={{ width: "250px" }}>
      <h4 className="text-center">Admin Panel</h4>
      <Nav className="flex-column">
        <Nav.Link as={Link} to="/">Dashboard</Nav.Link>
        <Nav.Link as={Link} to="/transactions">Transactions</Nav.Link>
        <Nav.Link as={Link} to="/products">Products</Nav.Link>
        <Nav.Link as={Link} to="/users">User & Merchant</Nav.Link>
        <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
        <Nav.Link as={Link} to="/reports">Reports & Analytics</Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
