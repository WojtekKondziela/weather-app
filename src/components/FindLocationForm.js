import React from 'react';
import { Form, FormGroup, FormControl } from 'react-bootstrap';

export const FindLocationForm = () => (

    <Form className='p-3 pt-5 form'>
        <FormGroup className='col-md-8 col-lg-6 mx-auto formGroup'>
            <FormControl type='text' placeholder='search' className='getLocationInput text-center mx-auto' />
        </FormGroup>
    </Form>

)