import React from "react";
import { Alert } from "react-bootstrap";

function SAlert({ message, Type }) {
    return <Alert variant={Type} className="text-center">{message}</Alert>;
}

export default SAlert