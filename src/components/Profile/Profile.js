import React, { useEffect, useState } from 'react';
import styles from './Profile.module.css';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    fname: '',
    mname: '',
    lname: '',
    email: ''
  });

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setFormData(parsedUser);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:5000/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          fname: formData.fname,
          mname: formData.mname,
          lname: formData.lname
        })
      });

      const data = await response.json();

      if (response.ok) {
        setUser(data);
        localStorage.setItem('user', JSON.stringify(data));
        setIsEditing(false);
      } else {
        console.error('Update failed:', data.message);
        alert(data.message);
      }
    } catch (error) {
      console.error('Error during update:', error.message);
    }
  };

  if (!user) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.profileContainer}>
      <div className={styles.card}>
        <h1 className={styles.title}>Profile</h1>
        {isEditing ? (
          <form onSubmit={handleFormSubmit} className={styles.userInfo}>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="fname">First Name:</label>
              <input
                type="text"
                id="fname"
                name="fname"
                value={formData.fname}
                onChange={handleInputChange}
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="mname">Middle Name:</label>
              <input
                type="text"
                id="mname"
                name="mname"
                value={formData.mname}
                onChange={handleInputChange}
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="lname">Last Name:</label>
              <input
                type="text"
                id="lname"
                name="lname"
                value={formData.lname}
                onChange={handleInputChange}
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                disabled
                className={styles.input}
              />
            </div>
            <button type="submit" className={styles.saveButton}>Save</button>
          </form>
        ) : (
          <div className={styles.userInfo}>
            <p><span className={styles.label}>First Name:</span> {user.fname}</p>
            <p><span className={styles.label}>Middle Name:</span> {user.mname}</p>
            <p><span className={styles.label}>Last Name:</span> {user.lname}</p>
            <p><span className={styles.label}>Email:</span> {user.email}</p>
          </div>
        )}
        {/* <button onClick={handleEditToggle} className={styles.editButton}>
          {isEditing ? 'Cancel' : 'Edit'}
        </button> */}
      </div>
    </div>
  );
};

export default Profile;

