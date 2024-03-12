<<<<<<< HEAD
import "./LandingPage.css";
=======
import React, { useState, useEffect } from 'react'
import "./LandingPage.css"
import { Container, Card, Form, Button, Figure, Col, Row } from "react-bootstrap";
// import { useNavigate, useParams } from "react-router-dom";
// import { useProvideAuth } from '../../hooks/useProvideAuth';
// import { useRequireAuth } from "../hooks/useRequireAuth";


// import { LoadingSpinner, Post } from "../components";

function LandingPage() {
    // const { state } = useProvideAuth();
    // const [data, setData] = useState({
    //     currentPassword: "",
    //     newPassword: "",
    //     confirmNewPassword: "",
    //     isSubmitting: false,
    //     errorMessage: null,
    // });

    // let params = useParams();
    // const {
    //     state: { isAuthenticated }, } = useRequireAuth();
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

    return (
        <Container style={{ marginTop: "50px" }}>
            <Card style={{ background: "black", width: '18rem', borderRadius: "40%" }}>
                <Card.Img src="dinner.jpg" style={{ borderRadius: "30%" }} />
                <Card.Body style={{ background: "black" }}>
                    <Card.Title style={{ color: "white" }}>Card Title</Card.Title>
                    <Card.Text style={{ color: "#b27581" }}>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button style={{ background: "#b27581" }}>Open Recipe</Button>
                </Card.Body>
            </Card>
        </Container >


    );
}

>>>>>>> 29f8f961797e8939eef91310391dc65a8fc0fbf7

export default LandingPage;