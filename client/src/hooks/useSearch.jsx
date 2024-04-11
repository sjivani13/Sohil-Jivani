import { createContext, useContext, useEffect, useReducer } from "react";
import api from "../utils/api.util";

const searchContext = createContext();

const initialState = {
    searchTerm: "",
    filteredRecipes: [],
    allRecipes: [],
};
const reducer = (state, action) => {
    switch (action.type) {
        case "INPUT_CHANGE": {
            return {
                ...state,
                searchTerm: action.payload,
            };
        }
        case "SET_RECIPES": {
            return { ...state, filteredRecipes: action.payload };
        }
        case "SET_ALL_RECIPES": {
            return { ...state, allRecipes: action.payload };
        }
        default: {
            return state;
        }
    }
};

export const ProvideSearch = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        api.get("/recipes").then((res) => {
            dispatch({ type: "SET_RECIPES", payload: res.data });
            dispatch({ type: "SET_ALL_RECIPES", payload: res.data });
        });
    }, []);

    return (
        <searchContext.Provider value={{ state, dispatch }}>
            {children}
        </searchContext.Provider>
    );
};
const useSearch = () => {
    const { state, dispatch } = useContext(searchContext);
    console.log(state);
    const handleSearchInputChange = (e) => {
        console.log(e.target.value);
        dispatch({ type: "INPUT_CHANGE", payload: e.target.value });

        if (e.target.value === "") {
            dispatch({ type: "SET_RECIPES", payload: state.allRecipes });
        }
    };
    const handleSearch = (e) => {
        e.preventDefault();

        const filteredResults = state.filteredRecipes.filter((recipe) => {
            if (
                recipe.ingredients
                    .toLowerCase()
                    .includes(state.searchTerm.toLowerCase())
            ) {
                return true;
            } else if (
                recipe.instructions
                    .toLowerCase()
                    .includes(state.searchTerm.toLowerCase())
            ) {
                return true;
            } else if (
                recipe.title
                    .toLowerCase()
                    .includes(state.searchTerm.toLowerCase())
            ) {
                return true;
            } else if (
                recipe.description
                    .toLowerCase()
                    .includes(state.searchTerm.toLowerCase())
            ) {
                return true;
            } else {
                return false;
            }
        });

        dispatch({ type: "SET_RECIPES", payload: filteredResults });
    };

    return { ...state, handleSearchInputChange, handleSearch };
};

export default useSearch;


