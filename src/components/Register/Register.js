import React from 'react';
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon, Text } from '../Register/RegisterElements';

const Register = () => {
  return (
    <>
     <Container>
        <FormWrap>
          <Icon to='/'>OmegaHire</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>
                Register a member here
              </FormH1>
              <FormLabel htmlFor='for'>Name</FormLabel>
              <FormInput type='name' required />
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' required />
              <FormLabel htmlFor='for'>Contact</FormLabel>
              <FormInput type='number' required />
              <FormLabel htmlFor='for'>Designation</FormLabel>
              <FormInput type='text' required />
              <FormLabel htmlFor='for'>Department</FormLabel>
              <FormInput type='text' required />
              <FormButton type='submit'>Register</FormButton>
              <Text>Already Register Update your info</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container> 
    </>
  )
}

export default Register;
