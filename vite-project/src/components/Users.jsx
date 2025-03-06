import React, { useState } from "react";
import { Table, Button, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../store/dashboardSlice";
import "bootstrap/dist/css/bootstrap.min.css";
const Users = () => {
  const users = useSelector((state) => state.dashboard.users);
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState({ name: "", email: "", role: "User" });

  const handleAddUser = () => {
    dispatch(addUser({ id: users.length + 1, ...newUser }));
    setNewUser({ name: "", email: "", role: "User" });
  };

  return (
    <div className="p-3">
      <h2>Users & Merchants</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h4>Add User</h4>
      <Form>
        <Form.Control className="mt-2" type="text" placeholder="Name" value={newUser.name} onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} />
        <Form.Control className="mt-2" type="email" placeholder="Email" value={newUser.email} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} />
        <Form.Select className="mt-2" value={newUser.role} onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}>
          <option>User</option>
          <option>Merchant</option>
          <option>Admin</option>
        </Form.Select>
        <Button className="mt-2" onClick={handleAddUser}>Add User</Button>
      </Form>
    </div>
  );
};

export default Users;
