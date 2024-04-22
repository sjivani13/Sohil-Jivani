import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import "./Header.css";
import { Link } from 'react-router-dom'
import FuzzySearch from "../FuzzySearch/FuzzySearch";
import useSearch from "../../hooks/useSearch";
import { useProvideAuth } from "../../hooks/useProvideAuth";

function Header() {
    const { state: { isAuthenticated }, signout } = useProvideAuth();
    const { handleSearchInputChange, handleSearch } = useSearch();
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
                <Navbar.Brand id="title" href="/home">
                    <img
                        alt=""
                        src="/pinkFork.png"
                        width="70"
                        height="70"
                        className="d-inline-block align-top"
                    />{' '}
                    Trio Digital Dishes</Navbar.Brand>
                <Navbar id="basic-navbar-nav">
                    <Nav className="center"> {isAuthenticated && <form onSubmit={handleSearch}>
                        <input placeholder="hit enter to search.." type="text" onChange={handleSearchInputChange} />
                        {/* <button>Submit</button> */}
                    </form>}
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
                                        src="/images.png"
                                        width="40"
                                        height="40"
                                    />
                                </Nav.Link>
                                <Nav.Link to="favorites" as={Link} type="file">
                                    <img
                                        alt=""
                                        src="/Recipe-icon.png"
                                        width="40"
                                        height="40"
                                    />
                                </Nav.Link>
                            </>
                            :
                            <>
                                {/* Set of links to see when logged out  */}
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