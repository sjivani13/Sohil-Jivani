import React, { useState } from "react";
import { Form, Nav, Navbar, Container } from "react-bootstrap";
import "./Header.css";
import { Link } from 'react-router-dom'
import FuzzySearch from "../FuzzySearch/FuzzySearch";
import useSearch from "../../hooks/useSearch";
import { useProvideAuth } from "../../hooks/useProvideAuth";

function Header() {
    const { state: { isAuthenticated }, signout } = useProvideAuth();

    // const [filteredData, setFilteredData] = useState(null);
    // const [searchInput, setSearchInput] = useState("");
    // const { searchData, handleSearchInputChange } = useSearch()

    // const handleSearch = (e) => {
    //     const searchStr = e.target.value.toLowerCase();
    //     setSearchInput(searchStr);
    //     const filteredList = [...data].filter((i) =>
    //         i.name.toLowerCase().includes(searchStr)
    //     );

    //     setFilteredData(filteredList);
    // };


    return (
        <Navbar expand="lg" className="header">
            <Container>
                <Navbar.Brand id="title" href="#home">
                    <img
                        alt=""
                        src="/pinkFork.png"
                        width="70"
                        height="70"
                        className="d-inline-block align-top"
                    />{' '}
                    Trio Digital Dishes</Navbar.Brand>
                <Navbar id="basic-navbar-nav">
                    <Nav className="center">
                        <FuzzySearch />
                    </Nav>
                    <Nav>

                        {isAuthenticated ?
                            <>
                                {/* Set of links to see when logged in */}
                                <Nav.Link id="home" as={Link} to="home">Home</Nav.Link>
                                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                                <Nav.Link id="logout" as={Link} to="logout" onClick={signout}>Log Out</Nav.Link>
                                <Nav.Link to="recipe" as={Link} type="file">
                                    <img
                                        alt=""
                                        src="/book.png"
                                        width="35"
                                        height="35"
                                    />
                                </Nav.Link>
                            </>
                            :
                            <>
                                {/* Set of links to see when logged out */}
                                <Nav.Link id="login" as={Link} to="login">Log In</Nav.Link>
                            </>
                        }

                    </Nav>

                </Navbar>
            </Container>
        </Navbar>
    );
}

export default Header;