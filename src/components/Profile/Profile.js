import React, { useEffect, useState } from "react";
import styles from "./Profile.module.css";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
    }
  }, []);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleImageUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("image", image);

      const response = await fetch("http://127.0.0.1:5000/profile", {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: formData,
      });

      console.log("REPOSNSEWSWWEWS",response)
      const data = await response.json();

      if (response.ok) {
        setUser({ ...user, image: data.image });
        localStorage.setItem('user', JSON.stringify({ ...user, image: data.image }));
        
      } else {
        console.error("Image upload failed:", data.message);
        alert(data.message);
      }
    } catch (error) {
      console.error("Error during image upload:", error.message);
    }
  };

  if (!user) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.profileContainer}>
      <div className={styles.card}>
        <h1 className={styles.title}>Profile</h1>
        <div className={styles.userInfo}>
          <p>
            <span className={styles.label}>First Name:</span> {user.fname}
          </p>
          <p>
            <span className={styles.label}>Middle Name:</span> {user.mname}
          </p>
          <p>
            <span className={styles.label}>Last Name:</span> {user.lname}
          </p>
          <p>
            <span className={styles.label}>Email:</span> {user.email}
          </p>
          {user.image && (
            <img
              src={`http://localhost:5000/uploads/${user.image}`}
              alt="Profile"
            />
          )}
        </div>
        <div className={styles.formGroup}>
          <label
            className={styles.label}
            htmlFor="image"
            style={{ marginLeft: "353px", marginTop: "52px" }}
          >
            Profile Image:
          </label>
          <input
            style={{ marginTop: "20px" }}
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            className={styles.input}
          />
        </div>
        <button onClick={handleImageUpload} className={styles.uploadButton}>
          Upload Image
        </button>
      </div>
    </div>
  );
};

export default Profile;
