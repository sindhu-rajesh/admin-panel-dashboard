import React from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import "bootstrap/dist/css/bootstrap.min.css";

const Reports = () => {
  const reports = useSelector((state) => state.dashboard.reports);

  return (
    <div className="p-3">
      <h2>Reports & Analytics</h2>
      
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={reports}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
          <Line type="monotone" dataKey="transactions" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>

      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th>Month</th>
            <th>Revenue</th>
            <th>Transactions</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report, index) => (
            <tr key={index}>
              <td>{report.month}</td>
              <td>${report.revenue}</td>
              <td>{report.transactions}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Reports;
