// import React, { useState, useEffect } from 'react'
// import { Container, Card, Form, Button, Figure, Col, Row } from "react-bootstrap";
// import { useNavigate, useParams } from "react-router-dom";
// import { LoadingSpinner, Post } from "../components";
// import { useProvideAuth } from "../hooks/useAuth";
// import { useRequireAuth } from "../hooks/useRequireAuth";

// function Homepage() {
//     const { state } = useProvideAuth();
//     const [data, setData] = useState({
//         currentPassword: "",
//         newPassword: "",
//         confirmNewPassword: "",
//         isSubmitting: false,
//         errorMessage: null,
//     });

//     let navigate = useNavigate();
//     let params = useParams();
//     const {
//         state: { isAuthenticated }, } = useRequireAuth();
// };
// const handleInputChange = (event) => {
//     setData({
//         ...data,
//         [event.target.name]: event.target.value,
//     });

//     const handleUpdatePassword = async (event) => {
//         event.preventDefault();
//         event.stopPropagation();
//         const form = event.currentTarget;
//         // handle invalid or empty form
//         if (form.checkValidity() === false) {
//             setValidated(true);
//             return;
//         }
//         setData({
//             ...data,
//             isSubmitting: true,
//             errorMessage: null,
//         });

//         try {
//             // write code to call edit user endpoint 'users/:id'
//             const {
//                 user: { uid, username },
//             } = state;
//             console.log(uid, username);

//             await api.put(`/users/${params.uname}`,
//                 {
//                     currentPassword: data.currentPassword,
//                     newPassword: data.newPassword,
//                     confirmNewPassword: data.confirmNewPassword,
//                 });

//             toast.success("Password successfully changed.")

//             setData({
//                 currentPassword: "",
//                 newPassword: "",

//             })

//             setValidated(false);

//             if (currentPassword !== currentPassword) {
//                 return res.status(401, "Error passwords don't match!")
//             } if (currentPassword !== newPassword && newPassword === confirmNewPassword) {
//                 setUser({ ...data, newPassword: confirmNewPassword })
//             }
//             // don't forget to update loading state and alert success

//         } catch (error) {
//             setData({
//                 ...data,
//                 isSubmitting: false,
//                 errorMessage: error.message,
//             });
//         }
//     }



//     return (
//         <div>
//             Homepage

//         </div>
//     )
// }

// export default Homepage

// const [user, setUser] = useState();
// const [loading, setLoading] = useState(true);
// const [validated, setValidated] = useState(false);
// const [profileImage, setProfileImage] = useState("")
// const [open, setOpen] = useState(false);

// console.log(user)


