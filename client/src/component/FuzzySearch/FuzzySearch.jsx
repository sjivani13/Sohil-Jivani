import React from 'react';
import Fuse from 'fuse.js';
import "./FuzzySearch.css";

function FuzzySearch({
    searchInput,
    filterInput
}) {
    // const Fuse = require('fuse.js')
    const recipes = [
        {
            name: "",
            type: "entree"
        },
        {
            name: "",
            type: "dessert"
        },
        {
            name: "",
            type: "main course"
        },
        {
            name: "",
            type: "appetizer"
        }
    ]

    const fuse = new Fuse(recipes, {
        keys: ['name', 'type']
    })

    const result = fuse.search('')
    console.log(result)
}
export default FuzzySearch;