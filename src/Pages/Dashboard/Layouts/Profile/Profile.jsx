import React, { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "../../../../routes/api";

function Profile() {
  const location = useLocation();
  const { user, token } = location.state; // Destructure for clarity

  const [profile, setProfile] = useState(user);
  const [editMode, setEditMode] = useState(false);
  const [updateError, setUpdateError] = useState(null); // Track errors

  useEffect(() => {
    if (!user || !token) {
      // Handle the error or redirect to a relevant page
      console.error("Missing user or token in location state");
    }
  }, [location.state]);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const headers = { Authorization: `Bearer ${token}` };
    try {
      const response = await axios.put(`${apiUrl}/user/${user.id}`, profile, {
        headers,
      });

      console.log(response.data);
      setUpdateError(null); // Clear any previous errors
      setEditMode(false);
    } catch (error) {
      console.error("Error updating profile:", error.response.data.message);
    }
  };

  const handleInputChange = (e) => {
    setProfile((prevProfile) => ({ ...prevProfile, [e.target.name]: e.target.value }));
  };

  return (
    <div className="profile">
      <div className="profile-box">
        <div className="profile-heading">
          <h2 className="profile-title">Here's your Profile</h2>
          <p className="profile-subtitle">your personal info can be updated</p>
        </div>
        <div className="profile-form-box">
          {profile && (
            <form onSubmit={handleUpdateProfile} className="profile-form">
              <div className="profile-input-group">
                <div className="profile-input">
                  <label htmlFor="first-name">First Name:</label>
                  <input
                    type="text"
                    id="first-name"
                    name="first_name"
                    value={profile.first_name}
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
                    value={profile.last_name}
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
                    value={profile.email}
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
                    value={profile.phone}
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
                  value={profile.address}
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
                    value={profile.zip}
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
                    value={profile.country}
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
              {updateError && (
                <div className="error-message">{updateError}</div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
