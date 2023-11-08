import React from 'react'
import { Nav, Container, Navbar, Breadcrumb, Table } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import SButton from '../../components/Button';
import SBreadCrumb from '../../components/Breadcrumb';
import SNavbar from '../../components/Navbar';

export default function Dashboard() {
    return (
        <>

            <Container className='mt-3'>
                <SBreadCrumb />

                <h1>Dashboard</h1>
            </Container>
        </>
    )
}
