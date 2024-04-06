import * as React from "react";
import { FaTrashAlt } from "react-icons/fa";

const TrashIcon = (props) => {
    console.log(props)
    return (

        <FaTrashAlt onClick={props.onClick} />
    );
};

export default TrashIcon;