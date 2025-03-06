import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { updateProfile } from "../store/dashboardSlice";
import "bootstrap/dist/css/bootstrap.min.css";
const Profile = () => {
  const profile = useSelector((state) => state.dashboard.profile);
  const dispatch = useDispatch();
  const [updatedProfile, setUpdatedProfile] = useState(profile);

  const handleUpdateProfile = () => {
    dispatch(updateProfile(updatedProfile));
  };

  return (
    <div className="p-3">
      <h2>Business Profile</h2>
      <Card className="p-3">
        <Form>
          <Form.Group className="mb-2">
            <Form.Label>Business Name</Form.Label>
            <Form.Control type="text" value={updatedProfile.businessName} onChange={(e) => setUpdatedProfile({ ...updatedProfile, businessName: e.target.value })} />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" value={updatedProfile.email} onChange={(e) => setUpdatedProfile({ ...updatedProfile, email: e.target.value })} />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="text" value={updatedProfile.phone} onChange={(e) => setUpdatedProfile({ ...updatedProfile, phone: e.target.value })} />
          </Form.Group>
          <Button onClick={handleUpdateProfile}>Update Profile</Button>
        </Form>
      </Card>
    </div>
  );
};

export default Profile;
