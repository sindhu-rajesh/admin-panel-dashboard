import React, { useState } from "react";
import { Table, Button, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../store/dashboardSlice";
import "bootstrap/dist/css/bootstrap.min.css";
const Products = () => {
  const products = useSelector((state) => state.dashboard.products);
  const dispatch = useDispatch();
  const [newProduct, setNewProduct] = useState({ name: "", price: "", qty: "", qr: "" });

  const handleAddProduct = () => {
    dispatch(addProduct({ id: products.length + 1, ...newProduct }));
    setNewProduct({ name: "", price: "", qty: "", qr: "" });
  };

  return (
    <div className="p-3">
      <h2>Products</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Qty</th>
            <th>QR Code</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>${p.price}</td>
              <td>{p.qty}</td>
              <td>{p.qr}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h4>Add Product</h4>
      <Form>
        <Form.Control className="mt-2" type="text" placeholder="Name" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} />
        <Form.Control className="mt-2" type="number" placeholder="Price" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} />
        <Form.Control className="mt-2" type="number" placeholder="Quantity" value={newProduct.qty} onChange={(e) => setNewProduct({ ...newProduct, qty: e.target.value })} />
        <Form.Control className="mt-2" type="text" placeholder="QR Code" value={newProduct.qr} onChange={(e) => setNewProduct({ ...newProduct, qr: e.target.value })} />
        <Button className="mt-2" onClick={handleAddProduct}>Add Product</Button>
      </Form>
    </div>
  );
};

export default Products;
