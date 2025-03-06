import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
const Dashboard = () => {
  const {
    totalSales,
    settlements,
    qrGenerated,
    totalUsers,
    transactions,
    revenue,
  } = useSelector((state) => state.dashboard);

  const stats = [
    { title: "Total Sales", value: `$${totalSales}` },
    { title: "Settlements", value: `$${settlements}` },
    { title: "QR Generated", value: qrGenerated },
    { title: "Total Users", value: totalUsers },
    { title: "Transactions", value: transactions },
    { title: "Revenue", value: `$${revenue}` },
  ];

  return (
    <div className="p-3">
      <h2>Dashboard</h2>
      <Row>
        {stats.map((stat, index) => (
          <Col key={index} sm={4} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>{stat.title}</Card.Title>
                <Card.Text>{stat.value}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Dashboard;
