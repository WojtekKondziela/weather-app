import React from 'react';
import { Container } from 'react-bootstrap';
import { FindLocationForm } from './FindLocationForm';

export const Layout = (props) => (

    <Container className='heightOfTheScreen'>
        <FindLocationForm />
        {props.children}
    </Container>

)