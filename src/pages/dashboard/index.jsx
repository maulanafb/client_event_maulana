import React from 'react'
import { Navigate } from 'react-router-dom';

export default function Dashboard() {
    const token = localStorage.getItem('token')
    console.log(token);
    if (!token) return <Navigate to="/login" replace={true} />
    return (
        <div>
            Dashboard
        </div>
    )
}
