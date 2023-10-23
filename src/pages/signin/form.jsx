import React from 'react'
import TextInputWithLabel from '../../components/TextInputWithLabel'
import SButton from '../../components/Button'
import { Form } from 'react-bootstrap'


export default function SForm({ form, handleChange, handleSubmit, isLoading }) {
    return (
        <Form>
            <TextInputWithLabel
                label={"Email Address"}
                name={"email"}
                value={form?.email}
                type={'email'}
                onChange={handleChange}
                placeholder={'Enter email'}
            />

            <TextInputWithLabel label={"Password"}
                name={"password"}
                value={form?.password}
                type={'password'}
                onChange={handleChange}
                placeholder={'Enter Password'} />
            <SButton disabled={isLoading} loading={isLoading} variant="primary" type="submit" action={handleSubmit}>
                Submit
            </SButton>
        </Form>
    )
}
