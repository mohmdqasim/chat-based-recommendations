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
          {user.image && (
            <img
              src={`http://localhost:5000/uploads/${user.image}`}
              alt="Profile"
            />
          )}
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


// ===================================================


// import React from 'react';
// import {
//   MDBCol,
//   MDBContainer,
//   MDBRow,
//   MDBCard,
//   MDBCardText,
//   MDBCardBody,
//   MDBCardImage,
//   MDBTypography,
//   MDBIcon
// } from 'mdb-react-ui-kit';
// import './Profile.module.css';

// export default function PersonalProfile() {
//   return (
//     <section className="vh-100" style={{ backgroundColor: 'orange' }}>
//       <MDBContainer className="py-5 h-100 d-flex justify-content-center align-items-center">


//         <MDBRow >
//           <MDBCol lg="6" className="mb-4 mb-lg-0">
//             {/* <MDBCard className="mb-3 mx-auto" style={{ borderRadius: '.9rem',width:'250%',marginRight:'150px'}}> */}
//             <MDBCard className="mb-3 mx-auto" style={{ borderRadius: '.9rem', width: '250%' }}>

//               <MDBRow className="g-0">
//                 <MDBCol md="4" className="gradient-custom text-center text-white"
//                   style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
//                   <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
//                     alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
//                   <MDBTypography tag="h5">Marie Horwitz</MDBTypography>
//                   <MDBCardText>Web Designer</MDBCardText>
//                   <MDBIcon far icon="edit mb-5" />
//                 </MDBCol>
//                 <MDBCol md="8">
//                   <MDBCardBody className="p-4">
//                     <MDBTypography tag="h6">Profile</MDBTypography>
//                     <hr className="mt-0 mb-4" />
//                     <MDBRow className="pt-1">
//                       <MDBCol size="6" className="mb-3">
//                         <MDBTypography tag="h6">First Name</MDBTypography>
//                         <MDBCardText className="text-muted">Ibtisam</MDBCardText>
//                       </MDBCol>
//                       <MDBCol size="6" className="mb-3">
//                         <MDBTypography tag="h6">Middle Name</MDBTypography>
//                         <MDBCardText className="text-muted"></MDBCardText>
//                       </MDBCol>
//                     </MDBRow>
//                     <MDBRow className="pt-1">
//                       <MDBCol size="6" className="mb-3">
//                         <MDBTypography tag="h6">Last Name</MDBTypography>
//                         <MDBCardText className="text-muted">Jutt</MDBCardText>
//                       </MDBCol>
//                       <MDBCol size="6" className="mb-3">
//                         <MDBTypography tag="h6">Email</MDBTypography>
//                         <MDBCardText className="text-muted">ibtisam@gmail.com</MDBCardText>
//                       </MDBCol>
//                     </MDBRow>
//                     <MDBRow className="pt-1">
//                       <MDBCol size="12" className="mb-3">
//                         <MDBTypography tag="h6">Profile Image</MDBTypography>
//                         <input type="file" className="form-control" />
//                       </MDBCol>
//                     </MDBRow>
//                     <div className="edit-profile mt-3">
//                       <button className="btn btn-primary">Edit Profile</button>
//                     </div>
//                   </MDBCardBody>
//                 </MDBCol>
//               </MDBRow>
//             </MDBCard>
//           </MDBCol>
//         </MDBRow>
//       </MDBContainer>
//     </section>
//   );
// }



// import React, { useEffect, useState } from "react";
// import {
//   MDBCol,
//   MDBContainer,
//   MDBRow,
//   MDBCard,
//   MDBCardText,
//   MDBCardBody,
//   MDBCardImage,
//   MDBTypography,
//   MDBIcon
// } from 'mdb-react-ui-kit';
// import './Profile.module.css';

// const Profile = () => {
//   const [user, setUser] = useState(null);
//   const [image, setImage] = useState(null);
//   const [editMode, setEditMode] = useState(false);
//   const [formData, setFormData] = useState({ fname: '', mname: '', lname: '' });

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const storedUser = localStorage.getItem("user");
//         if (storedUser) {
//           const parsedUser = JSON.parse(storedUser);
//           setUser(parsedUser);
//           setFormData({ fname: parsedUser.fname, mname: parsedUser.mname, lname: parsedUser.lname });
//         }
//       } catch (error) {
//         console.error("Error fetching user data:", error.message);
//       }
//     };

//     fetchUserData();
//   }, []);

//   const handleImageChange = (e) => {
//     const selectedImage = e.target.files[0];
//     setImage(selectedImage);
//   };

//   const handleImageUpload = async () => {
//     if (!image) {
//       alert("Please select an image to upload.");
//       return;
//     }

//     try {
//       const formData = new FormData();
//       formData.append("file", image);

//       const token = localStorage.getItem("token");
//       if (!token) {
//         alert("No token found, please log in.");
//         return;
//       }

//       const response = await fetch("http://127.0.0.1:5000/upload", {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         body: formData,
//       });

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

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleProfileUpdate = async () => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       alert("No token found, please log in.");
//       return;
//     }

//     try {
//       const response = await fetch("http://127.0.0.1:5000/profile", {
//         method: "PUT",
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setUser({ ...user, ...formData });
//         localStorage.setItem('user', JSON.stringify({ ...user, ...formData }));
//         setEditMode(false);
//       } else {
//         console.error("Profile update failed:", data.message);
//         alert(data.message);
//       }
//     } catch (error) {
//       console.error("Error during profile update:", error.message);
//     }
//   };

//   if (!user) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <section className="vh-100" style={{ backgroundColor: 'orange' }}>
//       <MDBContainer className="py-5 h-100 d-flex justify-content-center align-items-center" >

//         <MDBRow >
//           <MDBCol lg="6" className="mb-4 mb-lg-0">
//             <MDBCard className="mb-3 mx-auto" style={{ borderRadius: '.9rem', width: '250%',marginRight:'150px' }}>
//               <MDBRow className="g-0">
//                 <MDBCol md="4" className="gradient-custom text-center text-white"
//                   style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
//                   <MDBCardImage src={`http://localhost:5000/uploads/${user.image}`} alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
//                   <MDBTypography tag="h5">{user.fname} {user.lname}</MDBTypography>
//                   <MDBCardText>Web Designer</MDBCardText>
//                   <MDBIcon far icon="edit mb-5" />
//                 </MDBCol>
//                 <MDBCol md="8">
//                   <MDBCardBody className="p-4">
//                     <MDBTypography tag="h6">Profile</MDBTypography>
//                     <hr className="mt-0 mb-4" />
//                     <MDBRow className="pt-1">
//                       <MDBCol size="6" className="mb-3">
//                         <MDBTypography tag="h6">First Name</MDBTypography>
//                         <MDBCardText className="text-muted">{user.fname}</MDBCardText>
//                       </MDBCol>
//                       <MDBCol size="6" className="mb-3">
//                         <MDBTypography tag="h6">Middle Name</MDBTypography>
//                         <MDBCardText className="text-muted">{user.mname}</MDBCardText>
//                       </MDBCol>
//                     </MDBRow>
//                     <MDBRow className="pt-1">
//                       <MDBCol size="6" className="mb-3">
//                         <MDBTypography tag="h6">Last Name</MDBTypography>
//                         <MDBCardText className ="text-muted">{user.lname}</MDBCardText>
//                       </MDBCol>
//                       <MDBCol size="6" className="mb-3">
//                         <MDBTypography tag="h6">Email</MDBTypography>
//                         <MDBCardText className="text-muted">{user.email}</MDBCardText>
//                       </MDBCol>
//                     </MDBRow>
//                     <MDBRow className="pt-1">
//                       <MDBCol size="12" className="mb-3">
//                         <MDBTypography tag="h6">Profile Image</MDBTypography>
//                         <input type="file" className="form-control" onChange={handleImageChange} />
//                       </MDBCol>
//                     </MDBRow>
                  
//                     <div className="edit-profile mt-3">
//                       {editMode ? (
//                         <>
//                           <button className="btn btn-primary" onClick={handleProfileUpdate}>Save Changes</button>
//                           <button className="btn btn-secondary ms-2" onClick={() => setEditMode(false)}>Cancel</button>
//                         </>
//                       ) : (
//                         <button className="btn btn-primary" onClick={() => setEditMode(true)}>Edit Profile</button>
//                       )}
//                       <button className="btn btn-success ms-2" onClick={handleImageUpload}>Upload Image</button>
//                     </div>
//                   </MDBCardBody>
//                 </MDBCol>
//               </MDBRow>
//             </MDBCard>
//           </MDBCol>
//         </MDBRow>
//       </MDBContainer>
//     </section>
//   );
// };

// export default Profile;


// import React, { useEffect, useState } from "react";
// import {
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBCard,
//   MDBCardText,
//   MDBCardBody,
//   MDBCardImage,
//   MDBTypography,
//   MDBIcon
// } from 'mdb-react-ui-kit';

// const Profile = () => {
//   const [user, setUser] = useState(null);
//   const [image, setImage] = useState(null);
//   const [editMode, setEditMode] = useState(false);
//   const [formData, setFormData] = useState({ fname: '', mname: '', lname: '' });

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const storedUser = localStorage.getItem("user");
//         if (storedUser) {
//           const parsedUser = JSON.parse(storedUser);
//           setUser(parsedUser);
//           setFormData({ fname: parsedUser.fname, mname: parsedUser.mname, lname: parsedUser.lname });
//         }
//       } catch (error) {
//         console.error("Error fetching user data:", error.message);
//       }
//     };

//     fetchUserData();
//   }, []);

//   const handleImageChange = (e) => {
//     const selectedImage = e.target.files[0];
//     setImage(selectedImage);
//   };

//   const handleImageUpload = async () => {
//     if (!image) {
//       alert("Please select an image to upload.");
//       return;
//     }

//     try {
//       const formData = new FormData();
//       formData.append("file", image);

//       const token = localStorage.getItem("token");
//       if (!token) {
//         alert("No token found, please log in.");
//         return;
//       }

//       const response = await fetch("http://127.0.0.1:5000/upload", {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         body: formData,
//       });

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

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleProfileUpdate = async () => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       alert("No token found, please log in.");
//       return;
//     }

//     try {
//       const response = await fetch("http://127.0.0.1:5000/profile", {
//         method: "PUT",
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setUser({ ...user, ...formData });
//         localStorage.setItem('user', JSON.stringify({ ...user, ...formData }));
//         setEditMode(false);
//       } else {
//         console.error("Profile update failed:", data.message);
//         alert(data.message);
//       }
//     } catch (error) {
//       console.error("Error during profile update:", error.message);
//     }
//   };

//   if (!user) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <section className="vh-100" style={{ backgroundColor: 'orange' }}>
//       <MDBContainer className="py-5 h-100 d-flex justify-content-center align-items-center">

//         <MDBRow>
//           <MDBCol lg="6" className="mb-4 mb-lg-0">
//             <MDBCard className="mb-3 mx-auto" style={{ borderRadius: '.9rem', width: '250%', marginRight: '150px' }}>
//               <MDBRow className="g-0">
//                 <MDBCol md="4" className="gradient-custom text-center text-white" style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
//                   <MDBCardImage src={`http://localhost:5000/uploads/${user.image}`} alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
//                   <MDBTypography tag="h5">{user.fname} {user.lname}</MDBTypography>
//                   <MDBCardText>Web Designer</MDBCardText>
//                   <MDBIcon far icon="edit mb-5" />
//                 </MDBCol>
//                 <MDBCol md="8">
//                   <MDBCardBody className="p-4">
//                     <MDBTypography tag="h6">Profile</MDBTypography>
//                     <hr className="mt-0 mb-4" />
//                     <MDBRow className="pt-1">
//                       <MDBCol size="6" className="mb-3">
//                         <MDBTypography tag="h6">First Name</MDBTypography>
//                         <MDBCardText className="text-muted">{user.fname}</MDBCardText>
//                       </MDBCol>
//                       <MDBCol size="6" className="mb-3">
//                         <MDBTypography tag="h6">Middle Name</MDBTypography>
//                         <MDBCardText className="text-muted">{user.mname}</MDBCardText>
//                       </MDBCol>
//                     </MDBRow>
//                     <MDBRow className="pt-1">
//                       <MDBCol size="6" className="mb-3">
//                         <MDBTypography tag="h6">Last Name</MDBTypography>
//                         <MDBCardText className="text-muted">{user.lname}</MDBCardText>
//                       </MDBCol>
//                       <MDBCol size="6" className="mb-3">
//                         <MDBTypography tag="h6">Email</MDBTypography>
//                         <MDBCardText className="text-muted">{user.email}</MDBCardText>
//                       </MDBCol>
//                     </MDBRow>
//                     <MDBRow className="pt-1">
//                       <MDBCol size="12" className="mb-3">
//                         <MDBTypography tag="h6">Profile Image</MDBTypography>
//                         <input type="file" className="form-control" onChange={handleImageChange} />
//                       </MDBCol>
//                     </MDBRow>

//                     <div className="edit-profile mt-3">
//                       {editMode ? (
//                         <>
//                           <button className="btn btn-primary" onClick={handleProfileUpdate}>Save Changes</button>
//                           <button className="btn btn-secondary ms-2" onClick={() => setEditMode(false)}>Cancel</button>
//                         </>
//                       ) : (
//                         <button className="btn btn-primary" onClick={() => setEditMode(true)}>Edit Profile</button>
//                       )}
//                       <button className="btn btn-success ms-2" onClick={handleImageUpload}>Upload Image</button>
//                     </div>
//                   </MDBCardBody>
//                 </MDBCol>
//               </MDBRow>
//             </MDBCard>
//           </MDBCol>
//         </MDBRow>
//       </MDBContainer>

//       {/* Media query for mobile view */}
//       <style>
//         {`
//           @media (max-width: 786px) {
//             .gradient-custom {
//               border-radius: .9rem;
//               width: 0%;
//               margin-left:'150px'
              
//             }

//             .custom-column {
//               display: flex;
//               flex-direction: column;
//             }
//             .custom-column {
//               display: flex;
//               flex-direction: column;
              
//             }
//           }
//         `}
//       </style>
//     </section>
//   );
// };

// export default Profile;


