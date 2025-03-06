import React, { useState } from "react";
import { Table, Button, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addTransaction } from "../store/dashboardSlice";
import "bootstrap/dist/css/bootstrap.min.css";
const Transactions = () => {
  const transactions = useSelector((state) => state.dashboard.transactionsList);
  const dispatch = useDispatch();
  const [newTransaction, setNewTransaction] = useState({
    user: "",
    amount: "",
    date: "",
  });

  const handleAddTransaction = () => {
    dispatch(addTransaction({ id: transactions.length + 1, ...newTransaction }));
    setNewTransaction({ user: "", amount: "", date: "" });
  };

  return (
    <div className="p-3">
      <h2>Transactions</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => (
            <tr key={tx.id}>
              <td>{tx.id}</td>
              <td>{tx.user}</td>
              <td>${tx.amount}</td>
              <td>{tx.date}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      
      <h4>Add Transaction</h4>
      <Form>
        <Form.Control className="mt-2" type="text" placeholder="User" value={newTransaction.user} onChange={(e) => setNewTransaction({ ...newTransaction, user: e.target.value })} />
        <Form.Control className="mt-2" type="number" placeholder="Amount" value={newTransaction.amount} onChange={(e) => setNewTransaction({ ...newTransaction, amount: e.target.value })} />
        <Form.Control className="mt-2" type="date" value={newTransaction.date} onChange={(e) => setNewTransaction({ ...newTransaction, date: e.target.value })} />
        <Button className="mt-2" onClick={handleAddTransaction}>Add Transaction</Button>
      </Form>
    </div>
  );
};

export default Transactions;
