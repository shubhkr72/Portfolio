import React from 'react';
import Button from 'react-bootstrap/Button';
import {Form} from 'react-bootstrap';

function ContactForm() {
    return (
        <Form className='rounded-3 fs-6 bg-dark text-primary p-5 border shadow'>
            <div className='row'>
                <Form.Group className='mb-3 col-lg-6' controlId='firstName'>
                    <Form.Label className='w-100 text-start text-capitalize'>First name</Form.Label>
                    <Form.Control style={{ backgroundColor: '#7f89b0',color:'#000000' }} type='text' />
                </Form.Group>
                <Form.Group className='mb-3 col-lg-6' controlId='secondName'>
                    <Form.Label className='w-100 text-start text-capitalize'>Second name</Form.Label>
                    <Form.Control style={{ backgroundColor: '#7f89b0',color:'#000000' }} type='text' />
                </Form.Group>
            </div>
            <Form.Group className='mb-3' controlId='emailAddress'>
                <Form.Label className='w-100 text-start text-capitalize'>Email address</Form.Label>
                <Form.Control style={{ backgroundColor: '#7f89b0',color:'#000000' }} type='email' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='textarea'>
                <Form.Label className='w-100 text-start'>Message</Form.Label>
                <Form.Control as='textarea' style={{ backgroundColor: '#7f89b0',color:'#000000' }} rows={3} />
            </Form.Group>
            <Button variant='primary' type='submit'>Submit</Button>
        </Form>
    )
}

export default ContactForm;