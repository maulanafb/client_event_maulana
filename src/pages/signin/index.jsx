import React, { useState } from 'react'
import { Card, Container } from 'react-bootstrap'
import axios, * as others from 'axios';
import SAlert from '../../components/Alert';
import { Navigate, useNavigate } from 'react-router-dom';
import { config } from '../../configs';
import SForm from './form';

export default function PageSignIn() {

    const navigate = useNavigate()
    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    const [alert, setAlert] = useState({
        status: false,
        message: "",
        type: 'danger'
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async () => {
        setIsLoading(true)
        try {
            const res = await axios.post(`${config.api_host_dev}/cms/signin`, form)


            setAlert({ status: true, message: 'berhasil login', type: 'success' })
            localStorage.setItem('token', res.data.data.token)
            setIsLoading(false)

            navigate('/')
        } catch (error) {
            setAlert({ status: true, message: error?.response.data.msg ?? 'Internal Server Error', type: 'danger' })
            setIsLoading(false)
        }
    }
    const token = localStorage.getItem('token')

    if (token) return <Navigate to="/" replace={true} />
    return (
        <Container md={12} className='my-5'>
            <div className="m-auto" style={{ width: '50%' }}>
                {alert.status && <SAlert Type={alert.type} message={alert.message} />}
            </div>
            <Card style={{ width: '50%' }} className='m-auto mt-5'>
                <Card.Body>
                    <Card.Title className='text-center' >Sign In</Card.Title>
                    <SForm form={form} handleChange={handleChange} handleSubmit={handleSubmit} isLoading={isLoading} />
                </Card.Body>
            </Card>
        </Container>
    )
}
