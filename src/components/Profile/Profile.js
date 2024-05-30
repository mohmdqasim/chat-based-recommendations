// import React, { useEffect, useState } from "react";
// import styles from "./Profile.module.css";

// const Profile = () => {
//   const [user, setUser] = useState(null);
//   const [image, setImage] = useState(null);

//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       const parsedUser = JSON.parse(storedUser);
//       setUser(parsedUser);
//     }
//   }, []);

//   const handleImageChange = (e) => {
//     const selectedImage = e.target.files[0];
//     setImage(selectedImage);
//   };

//   const handleImageUpload = async () => {
//     try {
//       const formData = new FormData();
//       formData.append("image", image);

//       const response = await fetch("http://127.0.0.1:5000/profile", {
//         method: "PUT",
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//         body: formData,
//       });

//       console.log("REPOSNSEWSWWEWS",response)
//       const data = await response.json();

//       if (response.ok) {
//         setUser({ ...user, image: data.image });
//         localStorage.setItem('user', JSON.stringify({ ...user, image: data.image }));
        
//       } else {
//         console.error("Image upload failed:", data.message);
//         alert(data.message);
//       }
//     } catch (error) {
//       console.error("Error during image upload:", error.message);
//     }
//   };

//   if (!user) {
//     return <div className={styles.loading}>Loading...</div>;
//   }

//   return (
//     <div className={styles.profileContainer}>
//       <div className={styles.card}>
//         <h1 className={styles.title}>Profile</h1>
//         <div className={styles.userInfo}>
//           <p>
//             <span className={styles.label}>First Name:</span> {user.fname}
//           </p>
//           <p>
//             <span className={styles.label}>Middle Name:</span> {user.mname}
//           </p>
//           <p>
//             <span className={styles.label}>Last Name:</span> {user.lname}
//           </p>
//           <p>
//             <span className={styles.label}>Email:</span> {user.email}
//           </p>
//           {user.image && (
//             <img
//               src={`http://localhost:5000/uploads/${user.image}`}
//               alt="Profile"
//             />
//           )}
//         </div>
//         <div className={styles.formGroup}>
//           <label
//             className={styles.label}
//             htmlFor="image"
//             style={{ marginLeft: "353px", marginTop: "52px" }}
//           >
//             Profile Image:
//           </label>
//           <input
//             style={{ marginTop: "20px" }}
//             type="file"
//             id="image"
//             accept="image/*"
//             onChange={handleImageChange}
//             className={styles.input}
//           />
//         </div>
//         <button onClick={handleImageUpload} className={styles.uploadButton}>
//           Upload Image
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Profile;

// ------------------------------------------------------------------------------below is latest

import React, { useEffect, useState } from "react";
import styles from "./Profile.module.css";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [image, setImage] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({ fname: "", mname: "", lname: "" });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setFormData({
        fname: parsedUser.fname,
        mname: parsedUser.mname,
        lname: parsedUser.lname,
      });
    }
  }, []);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleImageUpload = async () => {
    if (!image) {
      alert("Please select an image to upload.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", image);

      const token = localStorage.getItem("token");
      if (!token) {
        alert("No token found, please log in.");
        return;
      }

      const response = await fetch("http://127.0.0.1:5000/upload", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setUser({ ...user, image: data.image });
        localStorage.setItem(
          "user",
          JSON.stringify({ ...user, image: data.image })
        );
      } else {
        console.error("Image upload failed:", data.message);
        alert(data.message);
      }
    } catch (error) {
      console.error("Error during image upload:", error.message);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleProfileUpdate = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("No token found, please log in.");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:5000/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setUser({ ...user, ...formData });
        localStorage.setItem("user", JSON.stringify({ ...user, ...formData }));
        setEditMode(false);
      } else {
        console.error("Profile update failed:", data.message);
        alert(data.message);
      }
    } catch (error) {
      console.error("Error during profile update:", error.message);
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
          {editMode ? (
            <>
              <label className={styles.label}>First Name:</label>
              <input
                type="text"
                name="fname"
                value={formData.fname}
                onChange={handleInputChange}
                className={styles.input}
              />
              <label className={styles.label}>Middle Name:</label>
              <input
                type="text"
                name="mname"
                value={formData.mname}
                onChange={handleInputChange}
                className={styles.input}
              />
              <label className={styles.label}>Last Name:</label>
              <input
                type="text"
                name="lname"
                value={formData.lname}
                onChange={handleInputChange}
                className={styles.input}
              />
            </>
          ) : (
            <>
              <p>
                <span className={styles.label}>First Name:</span> {user.fname}
              </p>
              <p>
                <span className={styles.label}>Middle Name:</span> {user.mname}
              </p>
              <p>
                <span className={styles.label}>Last Name:</span> {user.lname}
              </p>
            </>
          )}
          <p>
            <span className={styles.label}>Email:</span> {user.email}
          </p>
          {/* {user.image && (
            <img
              src={`http://localhost:5000/uploads/${user.image}`}
              alt="Profile"
            />
          )} */}
        </div>
        <div>
          <label className={styles.label} htmlFor="image">
            Profile Image:
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            className={styles.input}
          />
        </div>
        <div className="button-container">
          <button onClick={handleImageUpload} className={styles.uploadBtn}>
            Upload Image
          </button>
          {editMode ? (
            <>
              <button onClick={handleProfileUpdate} className={styles.uploadBtn} >
                Save Changes
              </button>
              <button onClick={() => setEditMode(false)} className={styles.uploadBtn} style={{padding:"7px 40px"}}>
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={() => setEditMode(true)}
              className={styles.editBtn} style={{padding:'7px 23px'}}
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;


// // =====================================above is latest

// // import React, { useEffect, useState } from "react";
// // import styles from "./Profile.module.css";

// // const Profile = () => {
// //   const [user, setUser] = useState(null);
// //   const [image, setImage] = useState(null);
// //   const [editMode, setEditMode] = useState(false);
// //   const [formData, setFormData] = useState({ fname: "", mname: "", lname: "" });

// //   useEffect(() => {
// //     const storedUser = localStorage.getItem("user");
// //     if (storedUser) {
// //       const parsedUser = JSON.parse(storedUser);
// //       setUser(parsedUser);
// //       setFormData({
// //         fname: parsedUser.fname,
// //         mname: parsedUser.mname,
// //         lname: parsedUser.lname,
// //       });
// //     }
// //   }, []);

// //   const handleImageChange = (e) => {
// //     const selectedImage = e.target.files[0];
// //     setImage(selectedImage);
// //   };
// //   const my_secret_key = "my_secret_key";

// //   // Update the handleImageUpload function
// // const handleImageUpload = async () => {
// //   if (!image) {
// //     alert("Please select an image to upload.");
// //     return;
// //   }

// //   const formData = new FormData();
// //   formData.append("image", image);

// //   try {
// //     const response = await fetch("http://localhost:5000/upload_image", {
// //       method: "POST",
// //       body: formData,
// //       credentials: 'include',
// //       headers: {
// //         'Authorization': `Bearer ${my_secret_key}`
// //       }
// //     });

// //     if (response.ok) {
// //       const data = await response.json();
// //       setUser((prevUser) => ({
// //         ...prevUser,
// //         image: data.image,
// //       }));
// //       localStorage.setItem("user", JSON.stringify({ ...user, image: data.image }));
// //       alert("Image uploaded successfully.");
// //     } else if (response.status === 401) {
// //       alert("Unauthorized: Please log in again.");
// //       // Redirect to login page if needed
// //       // window.location.href = "/login";
// //     } else {
// //       const errorData = await response.json();
// //       alert(`Failed to upload image: ${errorData.message}`);
// //     }
// //   } catch (error) {
// //     console.error("Error uploading image:", error);
// //     alert("An error occurred while uploading the image.");
// //   }
// // };


// //   const handleInputChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   if (!user) {
// //     return <div className={styles.loading}>Loading...</div>;
// //   }

// //   return (
// //     <div className={styles.profileContainer}>
// //       <div className={styles.card}><h1 className={styles.title}>Profile</h1>
// //         <div className={styles.userInfo}>
// //           {editMode ? (
// //             <>
// //               <label className={styles.label}>First Name:</label>
// //               <input
// //                 type="text"
// //                 name="fname"
// //                 value={formData.fname}
// //                 onChange={handleInputChange}
// //                 className={styles.input}
// //               />
// //               <label className={styles.label}>Middle Name:</label>
// //               <input
// //                 type="text"
// //                 name="mname"
// //                 value={formData.mname}
// //                 onChange={handleInputChange}
// //                 className={styles.input}
// //               />
// //               <label className={styles.label}>Last Name:</label>
// //               <input
// //                 type="text"
// //                 name="lname"
// //                 value={formData.lname}
// //                 onChange={handleInputChange}
// //                 className={styles.input}
// //               />
// //             </>
// //           ) : (
// //             <>
// //               <p>
// //                 <span className={styles.label}>First Name:</span> {user.fname}
// //               </p>
// //               <p>
// //                 <span className={styles.label}>Middle Name:</span> {user.mname}
// //               </p>
// //               <p>
// //                 <span className={styles.label}>Last Name:</span> {user.lname}
// //               </p>
// //             </>
// //           )}
// //           <p>
// //             <span className={styles.label}>Email:</span> {user.email}
// //           </p>
// //         </div>
// //         <div>
// //           <label className={styles.label} htmlFor="image">
// //             Profile Image:
// //           </label>
// //           <input
// //             type="file"
// //             id="image"
// //             accept="image/*"
// //             onChange={handleImageChange}
// //             className={styles.input}
// //           />
// //         </div>
// //         <div>
// //           {user.image && (
// //             <img
// //               src={`http://localhost:5000/profile_images/${user.image}`}
// //               alt="Profile"
// //               className={styles.profileImage}
// //             />
// //           )}
// //         </div>
// //         <div className="button-container">
// //           <button onClick={handleImageUpload} className={styles.uploadBtn}>
// //             Upload Image
// //           </button>
// //           {editMode ? (
// //             <button
// //               onClick={() => setEditMode(false)}
// //               className={styles.uploadBtn}
// //               style={{ padding: "7px 40px" }}
// //             >
// //               Cancel
// //             </button>
// //           ) : (
// //             <button
// //               onClick={() => setEditMode(true)}
// //               className={styles.editBtn}
// //               style={{ padding: "7px 23px" }}
// //             >
// //               Edit Profile
// //             </button>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Profile;