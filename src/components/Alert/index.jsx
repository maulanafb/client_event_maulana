import React from "react";
import { Alert } from "react-bootstrap";

function SAlert({ message, Type, className }) {
    return <Alert variant={Type} className={`${className} text-center text-capitalize`}>{message}</Alert>;
}

export default SAlert