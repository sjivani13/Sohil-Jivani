import React from 'react';
import Fuse from 'fuse.js';
import { Row, Col, Form, Button } from "react-bootstrap";
import "./FuzzySearch.css";
import useSearch from '../../hooks/useSearch';

function FuzzySearch() {
    const { searchTerm, handleSearchInputChange, handleSearch } = useSearch()
    // const Fuse = require('fuse.js')
    // const recipes = [
    //     {
    //         name: "",
    //         type: "entree"
    //     },
    //     {
    //         name: "",
    //         type: "dessert"
    //     },
    //     {
    //         name: "",
    //         type: "main course"
    //     },
    //     {
    //         name: "",
    //         type: "appetizer"
    //     }
    // ]

    // const fuse = new Fuse(recipes, {
    //     keys: ['name', 'type']
    // })

    // const result = fuse.search('')
    // console.log(result)
    return (
        <Form inline="true" onSubmit={handleSearch}>
            <Row>
                <Col xs="auto">
                    <Form.Control
                        type="text"
                        placeholder="Search"
                        className="search"
                        value={searchTerm}
                        onChange={handleSearchInputChange}
                    />
                </Col>
                <Col xs="auto">
                    <Button id="btn" type="submit" >Submit</Button>
                </Col>
            </Row>
        </Form>
    )
}
export default FuzzySearch;