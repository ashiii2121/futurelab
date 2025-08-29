import React, { useState } from 'react';
import { baseUrl } from '../utils/config';

const LoginSidebar = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpForm, setShowOtpForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handlePhoneSubmit = async (e) => {
    e.preventDefault();
    if (phoneNumber.length !== 10) {
      setMessage('Please enter a valid 10-digit phone number');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`${baseUrl}/api/v1/auth/send-otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber }),
      });

      const data = await response.json();
      if (data.success) {
        setShowOtpForm(true);
        setMessage('OTP sent successfully!');
      } else {
        setMessage(data.message || 'Failed to send OTP');
      }
    } catch (error) {
      setMessage('Error sending OTP. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    if (otp.length !== 6) {
      setMessage('Please enter a valid 6-digit OTP');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`${baseUrl}/api/v1/auth/verify-otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber, otp }),
      });

      const data = await response.json();
      if (data.success) {
        localStorage.setItem('userToken', data.token);
        localStorage.setItem('userId', data.userId);
        setMessage('Login successful!');
        // Close sidebar and refresh page
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        setMessage(data.message || 'Invalid OTP');
      }
    } catch (error) {
      setMessage('Error verifying OTP. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${baseUrl}/api/v1/auth/send-otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber }),
      });

      const data = await response.json();
      if (data.success) {
        setMessage('OTP resent successfully!');
      } else {
        setMessage(data.message || 'Failed to resend OTP');
      }
    } catch (error) {
      setMessage('Error resending OTP. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangeNumber = () => {
    setShowOtpForm(false);
    setPhoneNumber('');
    setOtp('');
    setMessage('');
  };

  return (
    <div className="collapse" id="sidebar">
      <div className="sidebar-content">
        <div className="login-form-container">
          <div className="login-banner mb-4">
            <img
              src={`${process.env.PUBLIC_URL}/images/verification.png`}
              alt="Login Banner"
              className="img-fluid"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
          {!showOtpForm ? (
            <form onSubmit={handlePhoneSubmit}>
              <h4>Login with Phone Number</h4>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Enter 10-digit phone number"
                  maxLength="10"
                  pattern="[0-9]{10}"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary" disabled={isLoading}>
                {isLoading ? 'Sending...' : 'Send OTP'}
              </button>
            </form>
          ) : (
            <form onSubmit={handleOtpSubmit}>
              <h4>Enter OTP</h4>
              <p>OTP sent to +91{phoneNumber}</p>
              <div className="mb-3">
                <label htmlFor="otp" className="form-label">OTP</label>
                <input
                  type="text"
                  className="form-control"
                  id="otp"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter 6-digit OTP"
                  maxLength="6"
                  pattern="[0-9]{6}"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary" disabled={isLoading}>
                {isLoading ? 'Verifying...' : 'Verify OTP'}
              </button>
              
              <p className="resendNote mt-3">
                Didn't receive the code?
                <button 
                  type="button" 
                  className="resendBtn" 
                  onClick={handleResendOtp}
                  disabled={isLoading}
                >
                  Resend Code
                </button>
              </p>
              <p>
                <button 
                  type="button" 
                  className="resendNote" 
                  onClick={handleChangeNumber}
                  style={{background: 'none', border: 'none', color: 'blue', textDecoration: 'underline'}}
                >
                  Change Number
                </button>
              </p>
            </form>
          )}
          
          {message && (
            <div className={`alert ${message.includes('success') ? 'alert-success' : 'alert-danger'} mt-3`}>
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginSidebar;
