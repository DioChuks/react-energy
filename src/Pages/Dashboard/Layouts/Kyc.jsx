import 'animate.css';
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { apiUrl } from "../../../routes/api";
import axios from "axios";

const Kyc = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = location.state || {};
  const [kycData, setKycData] = useState({
    id_card_front: null,
    id_card_back: null,
    photo: null,
    proof_of_address: null,
    tax_id_number: "",
    ssn: "",
    dob: "",
    business_license: null,
  });

  const handleFileChange = (field, file) => {
    setKycData({ ...kycData, [field]: file });
  };

  const handleInputChange = (e) => {
    setKycData({ ...kycData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();

      Object.keys(kycData).forEach((key) => {
        formData.append(key, kycData[key]);
      });

      const response = await axios.post(`${apiUrl}/kyc`, formData, {
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(response.data);
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  return (
    <div className="kyc">
      <div className="kyc-box">
        <div className="kyc-heading animate__animated animate__bounceInDown">
          <h2 className="kyc-title">KYC Verification</h2>
          <p className="kyc-subtitle">
            We would like to know more about you! 📑
          </p>
        </div>
        <div className="kyc-form-box">
          <div className="kyc-form">
            <div className="kyc-input-group">
              <div className="kyc-input">
                <label>ID Card Front</label>
                <input
                  type="file"
                  onChange={(e) =>
                    handleFileChange("id_card_front", e.target.files[0])
                  }
                  required
                />
              </div>
              <div className="kyc-input">
                <label>ID Card Back</label>
                <input
                  type="file"
                  onChange={(e) =>
                    handleFileChange("id_card_back", e.target.files[0])
                  }
                  required
                />
              </div>
            </div>
            <div className="kyc-input-group">
              <div className="kyc-input">
                <label>Photo</label>
                <input
                  type="file"
                  onChange={(e) => handleFileChange("photo", e.target.files[0])}
                  required
                />
              </div>
              <div className="kyc-input">
                <label>Proof of Address</label>
                <input
                  type="file"
                  onChange={(e) =>
                    handleFileChange("proof_of_address", e.target.files[0])
                  }
                />
              </div>
            </div>
            <div className="kyc-input">
              <label>Tax ID Number</label>
              <input
                type="text"
                onChange={(e) =>
                  handleInputChange("tax_id_number", e.target.value)
                }
              />
            </div>
            <div className="kyc-input">
              <label>SSN</label>
              <input
                type="file"
                onChange={(e) => handleFileChange("ssn", e.target.value)}
                required
              />
            </div>
            <div className="kyc-input">
              <label>Date of Birth</label>
              <input
                type="date"
                onChange={(e) => handleInputChange("dob", e.target.value)}
              />
            </div>
            <div className="kyc-input">
              <label>Business License</label>
              <input
                type="file"
                onChange={(e) =>
                  handleFileChange("business_license", e.target.files[0])
                }
              />
            </div>
            <button onClick={handleSubmit}>Submit KYC</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kyc;
