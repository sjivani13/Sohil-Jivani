import * as React from "react";
import { FaTrashAlt } from "react-icons/fa";

const TrashIcon = (props) => {
    console.log(props)
    return (

        <FaTrashAlt style={{ color: "red", marginLeft: "10px" }} onClick={props.onClick} />
    );
};

export default TrashIcon;