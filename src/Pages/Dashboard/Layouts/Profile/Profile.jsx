import React, { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "../../../../routes/api";

function Profile() {
  const location = useLocation();
  const data = location.state;
  const [editMode, setEditMode] = useState(false);

  const user = {
    id: data.user.id,
    first_name: data.user.first_name,
    last_name: data.user.last_name,
    email: data.user.email,
    phone: data.user.phone,
    address: data.user.address,
    zip: data.user.zip,
    country: data.user.country,
  };

  const [userData, setUserData] = useState(user);

  useEffect(() => {
    setUserData(userData);
  }, [userData]);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const headers = { Authorization: `Bearer ${data.token}` };
    try {
      // Implement the logic to update the user profile
      // You can use API calls here or any other method based on your backend setup
      const response = await axios.put(`${apiUrl}/user/${user.id}`, userData, {
        headers,
      });

      console.log(response.data);
      setEditMode(false);
    } catch (error) {
      console.error("Error updating profile:", error.response.data.message);
    }
  };

  const handleInputChange = (e) => {
    setUserData({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="profile">
      <div className="profile-box">
        <div className="profile-heading">
          <h2 className="profile-title">Here's your Profile</h2>
          <p className="profile-subtitle">your personal info can be updated</p>
        </div>
        <div className="profile-form-box">
          {userData && (
            <form onSubmit={handleUpdateProfile} className="profile-form">
              <div className="profile-input-group">
                <div className="profile-input">
                  <label htmlFor="first-name">First Name:</label>
                  <input
                    type="text"
                    id="first-name"
                    name="first_name"
                    value={user?.first_name}
                    onChange={handleInputChange}
                    readOnly={!editMode}
                  />
                </div>
                <div className="profile-input">
                  <label htmlFor="last-name">Last Name:</label>
                  <input
                    type="text"
                    id="last-name"
                    name="last_name"
                    value={user?.last_name}
                    onChange={handleInputChange}
                    readOnly={!editMode}
                  />
                </div>
              </div>
              <div className="profile-input-group">
                <div className="profile-input">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={user?.email}
                    onChange={handleInputChange}
                    readOnly={!editMode}
                  />
                </div>
                <div className="profile-input">
                  <label htmlFor="phone">Phone:</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={user?.phone}
                    onChange={handleInputChange}
                    readOnly={!editMode}
                  />
                </div>
              </div>
              <div className="profile-input">
                <label htmlFor="address">Address:</label>
                <textarea
                  id="address"
                  name="address"
                  value={user?.address}
                  onChange={handleInputChange}
                  readOnly={!editMode}
                />
              </div>
              <div className="profile-input-group">
                <div className="profile-input">
                  <label htmlFor="zip">Zip:</label>
                  <input
                    type="text"
                    id="zip"
                    name="zip"
                    value={user?.zip}
                    onChange={handleInputChange}
                    readOnly={!editMode}
                  />
                </div>
                <div className="profile-input">
                  <label htmlFor="country">Country:</label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={user?.country}
                    onChange={handleInputChange}
                    readOnly={!editMode}
                  />
                </div>
              </div>
              {editMode ? (
                <button type="submit">Save Changes</button>
              ) : (
                <button type="button" onClick={() => setEditMode(true)}>
                  Edit Profile
                </button>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
